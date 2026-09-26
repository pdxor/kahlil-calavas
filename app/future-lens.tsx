'use client';

import VideoIntro from './video-intro';
import Image from 'next/image';
import shared from './project-showcase.module.css';
import styles from './future-lens.module.css';

const steps = [
  { title: 'Scan', image: '/images/future-lens-scan-capture.png', alt: 'On-site capture with a pole-mounted camera in the colorful IX Art Park courtyard', caption: 'Capturing the real place.', description: 'Capture a real place and build a digital twin: a spatial foundation for the experience.', href: 'https://futurelens.cloud/services/3d-capture' },
  { title: 'Remix', image: '/images/future-lens-remix.jpg', alt: 'The Future Lens object inventory beside the IX Art Park digital twin, with a dome selected for editing', caption: 'An editable space for what comes next.', description: 'Arrange objects, layer in stories, and try new ideas inside the same space.', href: 'https://futurelens.cloud/how-to' },
  { title: 'Publish', image: '/images/future-lens-ar.jpg', alt: 'A digital dome placed over the real IX Art Park stage in augmented reality', caption: 'Digital content brought into the real place.', description: 'Bring the experience to visitors on the web and in location-based augmented reality.', href: 'https://futurelens.cloud/services/application-development' },
];

export default function FutureLens() {
  return (
    <section id="future-lens" className={styles.section} aria-labelledby="future-lens-title">
      <VideoIntro title="Future Lens" src="https://futurelens.cloud/marketing/video/future-lens-introduction.mp4" poster="/images/future-lens-poster.jpg">
          <div className={shared.kicker}><p className="eyebrow">Spatial experiences rooted in real places</p><span>01 / Selected work</span></div>
          <div className={shared.heading}>
            <h2 id="future-lens-title">Future Lens.</h2>
            <div className={`${shared.copy} ${styles.copy}`}>
              <p className={shared.headline}>A place is more than a point on a map.</p>
              <p>I’m building ways to step inside it. Future Lens brings together digital twins, 360° tours, augmented reality, and the stories that give a place its meaning. From the first capture to the final experience, it connects the physical world with what we can imagine.</p>
              <a className={shared.cta} href="https://futurelens.cloud/" target="_blank" rel="noopener noreferrer">Explore Future Lens <span aria-hidden="true">↗</span></a>
            </div>
          </div>
      </VideoIntro>
      <div className={`wrap ${styles.process}`}>
        {steps.map((step, index) => (
          <a key={step.title} href={step.href} target="_blank" rel="noopener noreferrer" className={styles.step}>
            <Image src={step.image} alt={step.alt} width={1600} height={900} unoptimized loading="lazy" />
            <p className={styles.caption}>{step.caption}</p>
            <h3><span className={styles.number}>0{index + 1}</span>{step.title}<span className={styles.arrow} aria-hidden="true">↗</span></h3>
            <p className={styles.description}>{step.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
