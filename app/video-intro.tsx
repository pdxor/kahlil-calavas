'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './video-intro.module.css';

type Props = { title: string; src: string; poster: string; children: ReactNode };
export default function VideoIntro({ title, src, poster, children }: Props) {
  const [watching, setWatching] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [pausedByUser, setPausedByUser] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const sync = () => {
      if (visible && !document.hidden && (!preference.matches || watching) && !pausedByUser) {
        void element.play().catch(() => setPlaying(false));
      } else element.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: 0.05 });
    observer.observe(element);
    preference.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => { observer.disconnect(); preference.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync); };
  }, [pausedByUser, watching]);

  const togglePlayback = () => {
    const element = video.current;
    if (!element) return;
    if (!element.paused) { setPausedByUser(true); element.pause(); }
    else { setPausedByUser(false); void element.play().catch(() => setPlaying(false)); }
  };


  const changeMode = () => {
    const element = video.current;
    if (!element) return;
    const next = !watching;
    element.muted = !next;
    setWatching(next);
    requestAnimationFrame(() => element.parentElement?.scrollIntoView({ block: 'start', behavior: 'instant' }));
    setPausedByUser(false);
    if (next) {
      element.currentTime = 0;
      void element.play().catch(() => setPlaying(false));
    }
  };

  return (
    <div className={`${styles.intro} ${watching ? styles.watching : ''}`}>
      {/* oxlint-disable-next-line jsx-a11y/media-has-caption -- Original films have no published caption tracks; native controls provide playback and volume. */}
      <video ref={video} className={styles.video} muted={!watching} loop={!watching} playsInline preload="none" poster={poster} controls={watching} aria-hidden={watching ? undefined : true} aria-label={watching ? `${title} film` : undefined} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
        <source src={src} type="video/mp4" />
      </video>
      {!watching && <div className={styles.shade} />}
      <div className={`wrap ${styles.content}`}>
        <div hidden={watching}>{children}</div>
        <div className={styles.toolbar}>
          <span>{title} / The film</span>
          <div className={styles.buttons}>
            {!watching && <button type="button" onClick={togglePlayback} aria-label={`${playing ? 'Pause' : 'Play'} ${title} background video`}>{playing ? 'Pause film' : 'Play film'}</button>}
            <button type="button" onClick={changeMode} aria-pressed={watching}>{watching ? 'Back to overview' : 'Watch with sound'} <span aria-hidden="true">{watching ? '↙' : '↗'}</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}
