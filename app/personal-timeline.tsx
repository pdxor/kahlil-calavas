'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDownToLine, ArrowLeft, ArrowRight, ArrowUpRight, Check, Link as LinkIcon, X } from 'lucide-react';
import { momentDate, timelineMoments, timelinePdf, timelineThemes, type TimelineTheme } from './timeline-moments';
import styles from './personal-timeline.module.css';

type Theme = 'All moments' | TimelineTheme;
const years = [...new Set(timelineMoments.map(moment => moment.year))];
const firstMoment = timelineMoments[0];

export default function PersonalTimeline() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('All moments');
  const [selectedId, setSelectedId] = useState(firstMoment.id);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const momentRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLFieldSetElement>(null);
  const ownsHistoryEntry = useRef(false);
  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const visibleMoments = useMemo(() => timelineMoments.filter(moment => theme === 'All moments' || moment.themes.includes(theme)), [theme]);
  const current = Math.max(0, visibleMoments.findIndex(moment => moment.id === selectedId));
  const selected = visibleMoments[current];

  useEffect(() => {
    const readLocation = () => {
      const match = window.location.hash.match(/^#timeline(?:\/([a-z0-9-]+))?$/);
      if (match) {
        const moment = timelineMoments.find(item => item.id === match[1]);
        if (moment) { setSelectedId(moment.id); setTheme('All moments'); }
        setOpen(true);
      } else {
        setOpen(false);
        ownsHistoryEntry.current = false;
      }
    };
    readLocation();
    window.addEventListener('popstate', readLocation);
    window.addEventListener('hashchange', readLocation);
    return () => {
      window.removeEventListener('popstate', readLocation);
      window.removeEventListener('hashchange', readLocation);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const active = stripRef.current?.querySelector<HTMLButtonElement>('[aria-pressed="true"]');
    if (active && stripRef.current) {
      const strip = stripRef.current;
      strip.scrollTo({ left: active.offsetLeft - strip.offsetLeft - (strip.clientWidth - active.clientWidth) / 2, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  }, [selectedId, theme, open]);

  useEffect(() => () => { if (copyTimeout.current) clearTimeout(copyTimeout.current); }, []);

  const chooseMoment = useCallback((id: string) => {
    setSelectedId(id);
    setCopyStatus('idle');
    window.history.replaceState(window.history.state, '', `#timeline/${id}`);
    window.requestAnimationFrame(() => {
      const scroller = scrollRef.current;
      const moment = momentRef.current;
      if (!dialogRef.current?.open || !scroller || !moment) return;
      const top = scroller.scrollTop + moment.getBoundingClientRect().top - scroller.getBoundingClientRect().top - (toolbarRef.current?.offsetHeight ?? 0);
      scroller.scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const moveWithKeyboard = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'ArrowRight' && current < visibleMoments.length - 1) { event.preventDefault(); chooseMoment(visibleMoments[current + 1].id); }
      if (event.key === 'ArrowLeft' && current > 0) { event.preventDefault(); chooseMoment(visibleMoments[current - 1].id); }
    };
    dialog?.addEventListener('keydown', moveWithKeyboard);
    return () => dialog?.removeEventListener('keydown', moveWithKeyboard);
  }, [open, current, visibleMoments, chooseMoment]);

  function openTimeline() {
    ownsHistoryEntry.current = true;
    window.history.pushState(window.history.state, '', `#timeline/${selected.id}`);
    setOpen(true);
  }

  function closeTimeline() {
    setOpen(false);
    if (ownsHistoryEntry.current) {
      ownsHistoryEntry.current = false;
      window.history.back();
    } else {
      window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
    }
  }

  function chooseTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    const nextMoments = timelineMoments.filter(moment => nextTheme === 'All moments' || moment.themes.includes(nextTheme));
    if (!nextMoments.some(moment => moment.id === selectedId)) chooseMoment(nextMoments[0].id);
  }

  async function copyMomentLink() {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}${window.location.search}#timeline/${selected.id}`);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
    if (copyTimeout.current) clearTimeout(copyTimeout.current);
    copyTimeout.current = setTimeout(() => setCopyStatus('idle'), 3000);
  }

  return <>
    <div className={`wrap ${styles.callout}`}>
      <button ref={triggerRef} className={styles.trigger} type="button" onClick={openTimeline} aria-haspopup="dialog" aria-controls="personal-timeline" aria-label="View Kahlil’s timeline">
        <span className={styles.preview} aria-hidden="true">
          <Image src="/timeline/printed-dome.webp" alt="" width={112} height={88} unoptimized />
          <Image src="/timeline/awe.webp" alt="" width={112} height={88} unoptimized />
          <Image src="/timeline/reality-hack-2024.webp" alt="" width={112} height={88} unoptimized />
        </span>
        <span className={styles.triggerCopy}><span className={styles.kicker}>Selected moments / {years[0]}–{years.at(-1)}</span><span className={styles.triggerTitle}>View Kahlil’s timeline</span><span className={styles.triggerNote}>Prototypes, immersive technology, and the people building what comes next.</span></span>
        <span className={styles.triggerArrow}><ArrowUpRight size={26} aria-hidden="true" /></span>
      </button>
      <noscript><a className="text-link" href={timelinePdf}>Read Kahlil’s timeline as a PDF ↗</a></noscript>
    </div>

    {/* oxlint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- Native modal dialog supports Escape via onCancel; clicking its backdrop is an additional dismissal option. */}
    <dialog id="personal-timeline" ref={dialogRef} className={styles.dialog} aria-labelledby="timeline-heading" aria-describedby="timeline-description" onCancel={event => { event.preventDefault(); closeTimeline(); }} onClick={event => { if (event.target === event.currentTarget) closeTimeline(); }}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <span className={styles.wordmark}>Kahlil Calavas <span>/ The timeline</span></span>
          <div className={styles.headerActions}>
            <a className={styles.pdfLink} href={timelinePdf} download><ArrowDownToLine size={16} aria-hidden="true" /><span>Download PDF</span></a>
            <button ref={closeRef} type="button" className={styles.close} onClick={closeTimeline} aria-label="Close timeline"><span>Close</span><X size={21} aria-hidden="true" /></button>
          </div>
        </header>

        {open && <div ref={scrollRef} className={styles.scrollArea}>
          <div className={styles.intro}>
            <div><p className={styles.kicker}>Technology, architecture & collaboration</p><h2 id="timeline-heading" className={styles.title}>From prototype<br />to place.</h2></div>
            <p id="timeline-description">Printed structures. Spatial tools. Ideas tested together. Follow {timelineMoments.length} moments through hackathons, the accelerator, and the work taking shape at Future Lens.</p>
          </div>

          <div ref={toolbarRef} className={styles.toolbar}>
            <fieldset className={styles.filters} aria-label="Filter timeline by theme">
              {(['All moments', ...timelineThemes] as const).map(item => <button type="button" key={item} aria-pressed={theme === item} onClick={() => chooseTheme(item)}>{item}<span>{item === 'All moments' ? timelineMoments.length : timelineMoments.filter(moment => moment.themes.includes(item)).length}</span></button>)}
            </fieldset>
            <div className={styles.chronology}><fieldset className={styles.years} aria-label="Jump to year">
              {years.map(year => <button type="button" key={year} disabled={!visibleMoments.some(moment => moment.year === year)} aria-pressed={selected.year === year} aria-label={`Jump to ${year}`} onClick={() => { const first = visibleMoments.find(moment => moment.year === year); if (first) chooseMoment(first.id); }}>{year}</button>)}
            </fieldset>
            <div className={styles.controls}><button type="button" aria-label="Previous moment" disabled={current === 0} onClick={() => chooseMoment(visibleMoments[current - 1].id)}><ArrowLeft size={17} aria-hidden="true" /></button><button type="button" aria-label="Next moment" disabled={current === visibleMoments.length - 1} onClick={() => chooseMoment(visibleMoments[current + 1].id)}><ArrowRight size={17} aria-hidden="true" /></button></div></div>
          </div>

          <section ref={momentRef} className={styles.moment} aria-label="Selected timeline moment">
            <figure className={styles.figure}>
              <div className={`${styles.imageWell} ${selected.companion ? styles.diptych : ''} ${selected.portrait ? styles.portrait : ''}`}>
                <Image key={selected.id} src={selected.image} alt={selected.alt} width={selected.portrait ? 540 : 1280} height={selected.portrait ? 960 : 720} unoptimized />
                {selected.companion && <Image src={selected.companion.image} alt={selected.companion.alt} width={720} height={406} unoptimized />}
              </div>
              <figcaption>{selected.credit}</figcaption>
            </figure>
            <div className={styles.momentCopy}>
              <div className={styles.date}><span aria-hidden="true" /><time dateTime={selected.date}>{momentDate(selected.date)}</time></div>
              {selected.dateLabel && <p className={styles.dateLabel}>{selected.dateLabel}</p>}
              <h3 className={styles.momentTitle}>{selected.title}</h3>
              <p className={styles.place}>{selected.place}</p>
              <p className={styles.description}>{selected.description}</p>
              <div className={styles.tags}>{selected.themes.map(item => <span key={item}>{item}</span>)}</div>
              <div className={styles.momentLinks}>
                <a href={selected.source} target="_blank" rel="noopener noreferrer">{selected.sourceLabel ?? 'Watch original video'}<ArrowUpRight size={16} aria-hidden="true" /></a>
                {selected.relatedLinks?.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
                <button type="button" onClick={copyMomentLink} aria-label="Copy link to this moment">{copyStatus === 'copied' ? <Check size={15} aria-hidden="true" /> : <LinkIcon size={15} aria-hidden="true" />}<span aria-live="polite">{copyStatus === 'copied' ? 'Link copied' : copyStatus === 'error' ? 'Use the address bar' : 'Copy link'}</span></button>
              </div>
            </div>
          </section>

          <div className={styles.navigation}>
            <p><span>{String(current + 1).padStart(2, '0')}</span> / {String(visibleMoments.length).padStart(2, '0')}<span className={styles.navigationLabel}>{theme === 'All moments' ? 'Explore the moments' : `${theme} moments`}</span></p>
            <span className={styles.keyHint}>← → to explore</span>
          </div>
          <fieldset ref={stripRef} className={styles.filmstrip} aria-label="Choose a timeline moment">
            {visibleMoments.map(moment => <button type="button" key={moment.id} className={styles.thumbnail} aria-pressed={moment.id === selected.id} aria-label={`${momentDate(moment.date)}: ${moment.title}`} onClick={() => chooseMoment(moment.id)}><Image src={moment.image} alt="" width={220} height={124} unoptimized loading="lazy" /><span className={styles.thumbDate}>{momentDate(moment.date)}</span><span className={styles.thumbTitle}>{moment.title}</span></button>)}
          </fieldset>
          <output className="sr-only" aria-live="polite">{`${current + 1} of ${visibleMoments.length} ${theme === 'All moments' ? '' : theme.toLowerCase() + ' '}moments. ${momentDate(selected.date)}. ${selected.title}.`}</output>
          <footer className={styles.footer}><p>Dates are publication dates unless labeled otherwise; events may have happened earlier. Original videos on Facebook or Drive may require access. The garden entry dates the fundraiser, not the creation of its digital twin.</p><a href={timelinePdf} download>Keep the full timeline <ArrowDownToLine size={15} aria-hidden="true" /></a></footer>
        </div>}
      </div>
    </dialog>
  </>;
}
