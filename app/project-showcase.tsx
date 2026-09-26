import Image from 'next/image';
import styles from './project-showcase.module.css';

type Visual = { src: string; alt: string; label: string; href: string; contain?: boolean };
type Feature = { title: string; description: string; href: string };
type Props = {
  id: string; number: string; eyebrow: string; title: string;
  headline: string; description: string; href: string; cta: string;
  images: [Visual, Visual, Visual]; features: [Feature, Feature, Feature];
};

export default function ProjectShowcase(props: Props) {
  return (
    <section id={props.id} className={`section wrap ${styles.section}`} aria-labelledby={`${props.id}-title`}>
      <div className={styles.kicker}><p className="eyebrow">{props.eyebrow}</p><span>{props.number} / Selected work</span></div>
      <div className={styles.heading}>
        <h2 id={`${props.id}-title`}>{props.title}</h2>
        <div className={styles.copy}><p className={styles.headline}>{props.headline}</p><p>{props.description}</p>
          <a className={styles.cta} href={props.href} target="_blank" rel="noopener noreferrer">{props.cta}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className={styles.gallery}>
        {props.images.map((visual, index) => (
          <a key={visual.src} className={`${styles.visual} ${index === 0 ? styles.primary : ''} ${visual.contain ? styles.contain : ''}`} href={visual.href} target="_blank" rel="noopener noreferrer">
            <Image src={visual.src} alt={visual.alt} width={1600} height={1000} unoptimized loading="lazy" />
            <span className={styles.caption}>{visual.label}<span aria-hidden="true">↗</span></span>
          </a>
        ))}
      </div>
      <div className={styles.features}>
        {props.features.map((feature, index) => (
          <a href={feature.href} key={feature.title} target="_blank" rel="noopener noreferrer" className={styles.feature}>
            <span className={styles.featureNumber}>0{index + 1}</span>
            <h3>{feature.title}<span aria-hidden="true">↗</span></h3><p>{feature.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
