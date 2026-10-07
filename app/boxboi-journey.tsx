import Image from 'next/image';
import styles from './boxboi-journey.module.css';

export default function BoxboiJourney() {
  return (
    <section id="boxboi" className={`section wrap ${styles.section}`} aria-labelledby="boxboi-journey-title">
      <div className={styles.heading}>
        <div><p className="eyebrow">Boxboi / The Green Timeline</p><h2 id="boxboi-journey-title">The future<br />is a journey.</h2></div>
        <div className={styles.intro}>
          <p>A father. An inventor. A time machine.<br />And a future worth coming home to.</p>
          <p>Boxboi leaves the polluted streets of Crumble City to find the ideas that could change his family’s world. His journey leads to our present, and to the people already growing a different future.</p>
        </div>
      </div>
      <figure className={styles.film}>
        <Image src="/timeline/boxboi-pilot.webp" alt="Boxboi and Little Boxy on a neon-lit street in Crumble City, beneath a sign reading The end is the beginning" width={1800} height={1013} unoptimized loading="lazy" />
        <figcaption><span>BOXBOI</span><span>From Crumble City to the Green Timeline</span></figcaption>
      </figure>
      <ol className={styles.journey} aria-label="A glimpse of Boxboi’s journey">
        <li><span className={styles.chapter}>01 / The world he leaves</span><h3>Crumble City</h3><p>A city running out of tomorrow. An invention that opens a way through.</p></li>
        <li><span className={styles.chapter}>02 / The portal</span><h3>Back to the present</h3><p>Big Hollow Greene becomes a doorway to real places, new friends, and regenerative ideas.</p></li>
        <li><span className={styles.chapter}>03 / A future taking root</span><h3>The Green Timeline</h3><p>What we grow, build, and share today begins to change the world he returns to.</p></li>
      </ol>
      <div className={styles.preview}>
        <div><p className={styles.status}><span aria-hidden="true" />Story website in the making</p><h3>Step into the story.</h3><p>The new Boxboi website will bring the journey together: the pilot film, the characters, immersive worlds, and the real projects inspiring a greener timeline. This is a first look at what’s taking shape.</p></div>
        <div className={styles.links}>
          <a className={styles.primaryLink} href="https://github.com/pdxor/green-timeline" target="_blank" rel="noopener noreferrer">Explore the Green Timeline repo <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="https://green-timeline-boxboy.netlify.app/" target="_blank" rel="noopener noreferrer">Try the playable pilot <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#boxboi-360">Watch the 360° short stories <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
}
