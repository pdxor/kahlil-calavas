import TourSlider from './tour-slider';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#main" aria-label="Kahlil Calavas, home">KAHLIL CALAVAS</a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Connect ↗</a></nav>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="intro">
          <div className="portrait"><Image src="/images/kahlil-calavas.jpg" alt="Kahlil Calavas" width={800} height={800} unoptimized priority /></div>
          <div className="hero-copy"><h1 id="intro"><span className="intro-line">Hi, my name is</span><span>Kahlil</span><span>Calavas.</span></h1></div>
          <div className="hero-bottom"><p>Somewhere between code,<br />the land, and imagination.</p><a className="text-link" href="#work">Explore my work <span aria-hidden="true">↓</span></a></div>
        </section>
        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="section wrap work-heading"><div><p className="eyebrow">Recent digital twins / Future Lens</p><h2 id="work-title">Places you<br />can step into.</h2></div><div><p className="section-intro">A few places I’ve been turning into worlds.<br />Take your time. Have a look around.</p><a href="https://futurelens.cloud/#tours" target="_blank" rel="noopener noreferrer" className="text-link">More at Future Lens <span aria-hidden="true">↗</span></a></div></div>
          <TourSlider />
        </section>
        <section id="about" className="section wrap about-section" aria-labelledby="about-title">
          <div><p className="eyebrow">A little context</p><h2 id="about-title">Between<br />worlds.</h2></div>
          <div className="about-copy"><p className="large-copy">I’ve always moved between the technical and the creative. Sometimes I build the tools. Sometimes I use them to tell a story.</p><p>Lately, that means turning real places into explorable worlds. I’m building Future Lens and The Spatial Network, alongside my work as CTO at TerraLux — connecting 3D capture, maps, and immersive storytelling to the land and the people who care for it.</p><p>Before all of this: years of making websites, shaping interfaces, and figuring things out with good teams at BehindTheChair.com, The Walker Group, GraVoc, and Miranda Creative. The tools keep changing. The curiosity stays.</p><a className="text-link" href="https://www.linkedin.com/in/kahlil-c-8839b5192/" target="_blank" rel="noopener noreferrer">The longer version <span aria-hidden="true">↗</span></a></div>
        </section>
        <section className="wrap lately-section" aria-labelledby="lately-title">
          <h2 id="lately-title" className="eyebrow">Also in the mix</h2>
          <div className="notes">
            <a className="note" href="https://github.com/pdxor/futurelens-vr" target="_blank" rel="noopener noreferrer"><span className="note-number">01</span><div><h3>Beyond the screen</h3><p>Bringing the same worlds into VR and location-based AR. Scan a place. Build inside it. Walk back into it.</p></div><span className="note-arrow" aria-hidden="true">↗</span></a>
            <a className="note" href="https://github.com/pdxor/TreeXR" target="_blank" rel="noopener noreferrer"><span className="note-number">02</span><div><h3>Tree XR</h3><p>Wearable AR, natural environments, and community. A collaboration with Paige Dansinger and Marc Pettersen at the AWE 2026 Snap / Reality Hack.</p></div><span className="note-arrow" aria-hidden="true">↗</span></a>
            <a className="note" href="https://github.com/pdxor/green-timeline" target="_blank" rel="noopener noreferrer"><span className="note-number">03</span><div><h3>Boxboi</h3><p>A solarpunk story I’m bringing to life. Back to imagination, worldbuilding, and making something with a little heart.</p></div><span className="note-arrow" aria-hidden="true">↗</span></a>
          </div>
        </section>
        <footer id="contact" className="section wrap contact">
          <p className="eyebrow">Keep in touch</p><h2><a href="mailto:kahlilcalavas@gmail.com">Say hello. <span aria-hidden="true">↗</span></a></h2>
          <div className="footer-bottom"><p>© 2026 Kahlil Calavas</p><nav aria-label="Social links"><a href="https://www.linkedin.com/in/kahlil-c-8839b5192/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://www.facebook.com/kahlil.calavas" target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href="https://github.com/pdxor" target="_blank" rel="noopener noreferrer">GitHub ↗</a></nav><a className="back-top" href="#main">Back to the top ↑</a></div>
        </footer>
      </main>
    </>
  );
}
