import TourSlider from './tour-slider';
import TechnologySlider from './technology-slider';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#main" aria-label="Kahlil Calavas, home">KAHLIL CALAVAS</a>
        <nav aria-label="Main navigation"><a href="#future-lens">Future Lens</a><a href="#future-lab">Future Lab</a><a href="#about">About</a><a href="#contact">Connect ↗</a></nav>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="intro">
          <div className="portrait"><Image src="/images/kahlil-calavas.jpg" alt="Kahlil Calavas" width={800} height={800} unoptimized priority /></div>
          <div className="hero-copy"><h1 id="intro"><span className="intro-line">Hi, my name is</span><span>Kahlil</span><span>Calavas.</span></h1></div>
          <div className="hero-bottom"><p>Somewhere between code,<br />the land, and imagination.</p><a className="text-link" href="#work">Explore my work <span aria-hidden="true">↓</span></a></div>
        </section>
        <section id="future-lens" className="section wrap project-section" aria-labelledby="future-lens-title">
          <div className="project-heading"><div><p className="eyebrow">What I’m building</p><h2 id="future-lens-title">Future Lens.</h2></div><div className="project-copy"><p className="large-copy">A place is more than a point on a map.</p><p>I’m building ways to step inside it. Future Lens brings together digital twins, 360° tours, augmented reality, and the stories that give a place its meaning.</p><p>Farms, gathering spaces, landscapes. Places you can explore from a distance, then see differently when you’re there.</p><a className="text-link" href="https://futurelens.cloud/" target="_blank" rel="noopener noreferrer">Explore Future Lens <span aria-hidden="true">↗</span></a></div></div>
          <a className="project-image" href="https://futurelens.cloud/" target="_blank" rel="noopener noreferrer" aria-label="Explore Future Lens — opens in a new tab"><Image src="/images/future-lens-world.webp" alt="Big Hollow Green’s digital landscape in the Future Lens world viewer" width={1600} height={900} unoptimized loading="lazy" /><span className="image-caption">Big Hollow Green / a world in progress <span aria-hidden="true">↗</span></span></a>
        </section>
        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="section wrap work-heading"><div><p className="eyebrow">Recent digital twins / Future Lens</p><h2 id="work-title">Places you<br />can step into.</h2></div><div><p className="section-intro">A few places I’ve been turning into worlds.<br />Take your time. Have a look around.</p><a href="https://futurelens.cloud/#tours" target="_blank" rel="noopener noreferrer" className="text-link">More at Future Lens <span aria-hidden="true">↗</span></a></div></div>
          <TourSlider />
        </section>
        <section id="future-lab" className="section wrap project-section lab-section" aria-labelledby="future-lab-title">
          <div className="project-heading"><div><p className="eyebrow">Out in the world</p><h2 id="future-lab-title">Future Lab.</h2></div><div className="project-copy"><p className="large-copy">Good ideas need somewhere to land.</p><p>Future Lab brings builders, artists, technologists, and people working with the land together to try things, share what they know, and make something real.</p><p>The next gathering brings us to Forest City Farms. We’ll explore food sovereignty, regenerative practices, and technology for food abundance — with three presentations and one shared project.</p><a className="text-link" href="https://thefuturist.network/futurelab" target="_blank" rel="noopener noreferrer">Inside Future Lab <span aria-hidden="true">↗</span></a></div></div>
          <div className="lab-event"><div className="event-date"><p className="eyebrow">Next gathering / 2026</p><time dateTime="2026-10-03">October <span>03</span></time><p>Saturday · 3–11 PM ET</p></div><div className="event-details"><p className="eyebrow">Future Lab / Earth Tech</p><h3>Forest City Farms.</h3><p>Whately, Massachusetts</p><p>A day around the food systems we want to grow. Come for the ideas. Stay for the work, the people, and the evening.</p><a className="text-link" href="https://thefuturist.network/public/events/48beb196-786b-4ef9-bb98-46b09b92a18d" target="_blank" rel="noopener noreferrer">Event details & RSVP <span aria-hidden="true">↗</span></a></div></div>
        </section>
        <section id="about" className="section wrap about-section" aria-labelledby="about-title">
          <div><p className="eyebrow">A little context</p><h2 id="about-title">Between<br />worlds.</h2></div>
          <div className="about-copy">
            <p className="large-copy">I’ve always moved between the technical and the creative. Sometimes I build the tools. Sometimes I use them to tell a story.</p>
            <p>One of the most impactful moments in my career came when I went to Costa Rica with my 360 camera equipment and began telling the stories of eco lodges, wellness retreats, and natural preserves. I finally found a balance between technology and the felt experience of the natural world.</p>
            <p>My mentors were the clients who walked me through their dream businesses. Many had traveled thousands of miles to build their little slice of paradise, and their stories became the most important part of the process. I went from a Nikon D40 and a panorama tripod head to having a full media team and being one of the first in Costa Rica to offer drone surveying and virtual tour mapping.</p>
            <p>Fast forward, and my work has evolved into making digital twins that people can explore in VR and AR, with AI-generated assets created in real time. That opens up a level of creativity that wasn’t accessible even a few months ago. I’m here at the edge of the spatial computing revolution to give creators and entrepreneurs a new way to hack their environments. We’re in the age of creativity at the speed of thought… and I’m all in.</p>
            <p>Though my entrepreneurial career has been uninterrupted for over a decade, I’ve also held positions at traditional technology companies. I’ve spent years making websites, shaping interfaces, and figuring things out with good teams at BehindTheChair.com, The Walker Group, GraVoc, Terralux and The German Kitchen Center. I appreciate the range of work, but one thing has stayed constant across every project: I love helping people turn their dreams into real deliverables and services.</p>
            <p>I hope I get to learn your story soon. One of you out there has my next assignment to push the boundaries of immersive technology.</p>
            <a className="text-link" href="https://www.linkedin.com/in/kahlil-c-8839b5192/" target="_blank" rel="noopener noreferrer">The longer version <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <section className="wrap lately-section" aria-labelledby="lately-title">
          <h2 id="lately-title" className="eyebrow">Also in the mix</h2>
          <div className="notes">
            <a className="note" href="https://futurelens.cloud/get-app" target="_blank" rel="noopener noreferrer"><span className="note-number">01</span><div><h3>Beyond the screen</h3><p>Bringing the same worlds into VR and location-based AR. Scan a place. Build inside it. Walk back into it.</p></div><span className="note-arrow" aria-hidden="true">↗</span></a>
            <a className="note" href="https://github.com/pdxor/TreeXR" target="_blank" rel="noopener noreferrer"><span className="note-number">02</span><div><h3>Tree XR</h3><p>Wearable AR, natural environments, and community. A collaboration with Paige Dansinger and Marc Pettersen at the AWE 2026 Snap / Reality Hack.</p></div><span className="note-arrow" aria-hidden="true">↗</span></a>
            <a className="note" href="https://github.com/pdxor/green-timeline" target="_blank" rel="noopener noreferrer"><span className="note-number">03</span><div><h3>Boxboi</h3><p>A solarpunk story I’m bringing to life. Back to imagination, worldbuilding, and making something with a little heart.</p></div><span className="note-arrow" aria-hidden="true">↗</span></a>
          </div>
        </section>
        <section id="future-lab-recap" className="section wrap recap-section" aria-labelledby="recap-title">
          <div className="recap-heading"><div><p className="eyebrow">Future Lab / The recap</p><h2 id="recap-title">Last time<br />we got together.</h2></div><p className="section-intro">A little of what happens when people, place, art, and technology meet. From our Future Lab and Accelerator gathering in the Catskills.</p></div>
          {/* oxlint-disable-next-line jsx-a11y/media-has-caption -- The official film has no published caption track; preserve the original media without invented captions. */}
          <video className="recap-video" controls playsInline preload="none" poster="/images/future-lab-recap.jpg" aria-label="Future Lab and Accelerator gathering recap"><source src="https://mhmtbsugxmiebanqeifx.supabase.co/storage/v1/object/public/videos/accelerator-and-future-lab.mp4" type="video/mp4" />Watch the Future Lab recap at The Futurist Network.</video>
          <a className="text-link" href="https://thefuturist.network/futurelab#accelerator-future-lab-film" target="_blank" rel="noopener noreferrer">More from Future Lab <span aria-hidden="true">↗</span></a>
        </section>
        <TechnologySlider />
        <footer id="contact" className="section wrap contact">
          <p className="eyebrow">Keep in touch</p><h2><a href="mailto:kahlilcalavas@gmail.com">Say hello. <span aria-hidden="true">↗</span></a></h2>
          <div className="footer-bottom"><p>© 2026 Kahlil Calavas</p><nav aria-label="Social links"><a href="https://www.linkedin.com/in/kahlil-c-8839b5192/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://www.facebook.com/kahlil.calavas" target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href="https://github.com/pdxor" target="_blank" rel="noopener noreferrer">GitHub ↗</a></nav><a className="back-top" href="#main">Back to the top ↑</a></div>
        </footer>
      </main>
    </>
  );
}
