import Image from 'next/image';
import VideoIntro from './video-intro';
import shared from './project-showcase.module.css';
import styles from './future-lens.module.css';
import lab from './future-lab.module.css';

const moments = [
  { title: 'Gather', image: '/images/future-lab-gather.jpg', alt: 'Future Lab participants sharing a conversation on the porch' },
  { title: 'Innovate', image: '/images/future-lab-innovate.jpg', alt: 'A workshop table filled with colorful notes, sketches, and ideas' },
  { title: 'Build', image: '/images/future-lab-build.jpg', alt: 'Future Lab participants collaborating around a table with laptops and a shared screen' },
];
export default function FutureLab() {
  return (
    <section id="future-lab" className={styles.section} aria-labelledby="future-lab-title">
      <VideoIntro title="Future Lab" src="https://mhmtbsugxmiebanqeifx.supabase.co/storage/v1/object/public/videos/accelerator-and-future-lab.mp4" poster="/images/future-lab-recap.jpg">
        <div className={shared.kicker}><p className="eyebrow">Out in the world</p><span>03 / Selected work</span></div>
        <div className={shared.heading}>
          <h2 id="future-lab-title">Future Lab.</h2>
          <div className={`${shared.copy} ${styles.copy}`}>
            <p className={shared.headline}>Good ideas need somewhere to land.</p>
            <p>Future Lab brings builders, artists, technologists, and people working with the land together to try things, share what they know, and make something real.</p>
            <p>Conversations become experiments. Experiments become prototypes. A field lab for people shaping what comes next, through emerging tools, creative practice, and shared work.</p>
            <a className={shared.cta} href="https://thefuturist.network/futurelab" target="_blank" rel="noopener noreferrer">Inside Future Lab <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </VideoIntro>
      <div className={`wrap ${styles.process} ${lab.photos}`}>
        {moments.map(moment => <a key={moment.title} className={styles.step} href="https://thefuturist.network/futurelab" target="_blank" rel="noopener noreferrer"><Image src={moment.image} alt={moment.alt} width={1000} height={750} unoptimized loading="lazy" /><h3>{moment.title}<span className={styles.arrow} aria-hidden="true">↗</span></h3></a>)}
      </div>
      <div className={`wrap ${lab.next}`}><p className="eyebrow">The next gathering</p><p>Date, time, and location coming soon.</p><a className="text-link" href="https://thefuturist.network/futurelab" target="_blank" rel="noopener noreferrer">Follow Future Lab <span aria-hidden="true">↗</span></a></div>
    </section>
  );
}
