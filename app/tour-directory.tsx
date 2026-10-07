import { tours } from './tours';
import styles from './tour-directory.module.css';

export default function TourDirectory() {
  return (
    <div className={`wrap ${styles.directory}`}>
      <div className={styles.heading}>
        <h3 id="tour-directory-title">Choose your next place.</h3>
        <p>{tours.length} digital twins · Open a world in a new tab</p>
      </div>
      <ol className={styles.list} aria-labelledby="tour-directory-title">
        {tours.map((tour, index) => (
          <li key={tour.slug}>
            <a href={tour.url} target="_blank" rel="noopener noreferrer">
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span><span className={styles.name}>{tour.name}</span><span className={styles.location}>{tour.location}</span></span>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
