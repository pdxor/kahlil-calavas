import styles from './futurist-network.module.css';

export default function FuturistNetwork() {
  return (
    <section
      id="futurist-network"
      className={`section wrap ${styles.section}`}
      aria-labelledby="futurist-network-title"
    >
      <div className={`project-heading ${styles.heading}`}>
        <div>
          <p className="eyebrow">Find your people</p>
          <h2 id="futurist-network-title">The Futurist Network.</h2>
        </div>
        <div className="project-copy">
          <p className="large-copy">The future is better when we build it together.</p>
          <p>
            Join me and other builders and futurists on our social network.
            Share what you’re making, trade ideas, and find people to build with.
          </p>
          <a
            className={styles.join}
            href="https://thefuturist.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Futurist Network <span aria-hidden="true">↗</span>
          </a>
          <p className={styles.domain}>thefuturist.network</p>
        </div>
      </div>
    </section>
  );
}
