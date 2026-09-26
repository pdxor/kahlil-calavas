'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './boxboi-stories.module.css';

const playerOrigin = 'https://equirectangular-cinemagraph-creator.netlify.app';

export default function BoxboiStories() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(940);

  useEffect(() => {
    function resize(event: MessageEvent) {
      if (event.origin !== playerOrigin || event.source !== frame.current?.contentWindow || event.data?.type !== 'boxboi-360:resize') return;
      if (Number.isFinite(event.data.height)) setHeight(Math.max(400, Math.min(1800, event.data.height)));
    }
    window.addEventListener('message', resize);
    return () => window.removeEventListener('message', resize);
  }, []);

  return (
    <section id="boxboi-360" className={`section wrap ${styles.section}`} aria-labelledby="boxboi-title">
      <div className={styles.heading}>
        <div><p className="eyebrow">Boxboi / Nine stories in 360°</p><h2 id="boxboi-title">Small wonders.<br />Whole worlds.</h2></div>
        <div className={styles.copy}><p>A little curiosity goes a long way. Follow Boxboi and friends through art-filled rooms, Earthships, and imagined worlds in nine short, immersive stories.</p><p>Thirty seconds each. Trip-hop and sound effects. Look around and find your own point of view.</p><a className="text-link" href={`${playerOrigin}/360/`} target="_blank" rel="noopener noreferrer">Open the full 360° playlist <span aria-hidden="true">↗</span></a></div>
      </div>
      <iframe ref={frame} className={styles.player} src={`${playerOrigin}/360/?embed=1`} title="Boxboi interactive 360 degree video playlist — nine stories" loading="lazy" allow="autoplay; fullscreen; clipboard-write" allowFullScreen style={{ height }} />
      <div className={styles.caption}><p>Drag or swipe to look around. Music + sound effects, without narration.</p><a href={playerOrigin} target="_blank" rel="noopener noreferrer">Made with my Cinemagraph Creator ↗</a></div>
    </section>
  );
}
