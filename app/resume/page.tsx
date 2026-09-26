/* oxlint-disable next/no-html-link-for-pages -- Native anchors serve static PDF, TXT, and JSON files without client routing. */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import resume from '../../lib/resume.json';
import './resume.css';

export const metadata: Metadata = {
  title: 'Kahlil Calavas | Resume',
  description: 'Creative technology, spatial computing, and web development. Experience, projects, and downloadable visual and ATS resumes.',
  alternates: { canonical: '/resume' },
  openGraph: { title: 'Kahlil Calavas | Resume', description: resume.headline, url: 'https://kahlilcalavas.dev/resume', images: ['/images/future-lens-scan-capture.png'] },
};

export default function Resume() {
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: resume.name, url: resume.website, email: resume.email, jobTitle: 'Chief Technology Officer', worksFor: { '@type': 'Organization', name: 'TerraLux' }, sameAs: ['https://github.com/pdxor', 'https://www.linkedin.com/in/kahlil-c-8839b5192/'], knowsAbout: resume.skills.flatMap(group => group.items) };
  return <div className="resume-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }} />
    <a href="#resume-content" className="skip-link">Skip to resume</a>
    <header className="resume-nav"><Link href="/">KAHLIL CALAVAS</Link><Link href="/">Back to portfolio ↗</Link></header>
    <main id="resume-content">
      <section className="resume-hero">
        <div className="resume-hero-inner"><p className="eyebrow">Creative technology / Spatial computing</p><h1>Kahlil<br />Calavas.</h1><p className="resume-tagline">Somewhere between code,<br />the land, and imagination.</p></div>
      </section>
      <div className="resume-downloads">
        <a className="resume-primary" href="/resumes/Kahlil-Calavas-Visual-Resume.pdf">View visual résumé <span>PDF ↗</span></a>
        <a href="/resumes/Kahlil-Calavas-ATS-Resume.pdf">ATS résumé <span>PDF ↓</span></a>
        <a href="/resumes/Kahlil-Calavas-Resume.txt">Plain text <span>TXT ↓</span></a>
        <a href="/resumes/resume.json">Structured data <span>JSON ↓</span></a>
      </div>
      <article className="resume-content">
        <section><p className="eyebrow">01 / Profile</p><h2>Between worlds.</h2><p className="resume-summary">{resume.summary}</p><address><a href={`mailto:${resume.email}`}>{resume.email}</a><a href={`tel:+1${resume.phone.replace(/-/g, '')}`}>{resume.phone}</a><a href={resume.website}>kahlilcalavas.dev</a></address></section>
        <section><p className="eyebrow">02 / Professional experience</p><h2>Built over time.</h2>{resume.experience.map(job => <section className="resume-job" key={job.company}><div><h3>{job.company}</h3><p className="resume-role">{job.role}</p><p className="resume-dates">{job.dates}{'location' in job ? ` · ${job.location}` : ''}</p></div><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></section>)}</section>
        <section><p className="eyebrow">03 / Selected projects</p><h2>Out in the world.</h2><div className="resume-projects">{resume.projects.map(project => <a key={project.name} href={project.url}><Image src={project.image} alt={project.name === 'Future Lens' ? 'Kahlil capturing IX Art Park with a pole-mounted camera' : project.name === 'Future Lab' ? 'A Future Lab gathering' : 'Boxboi characters in a futuristic city'} width={600} height={360} unoptimized /><h3>{project.name} ↗</h3><p>{project.description}</p></a>)}</div></section>
        <section><p className="eyebrow">04 / Technical skills</p><h2>Tools of the trade.</h2><div className="resume-skills">{resume.skills.map(group => <div key={group.name}><h3>{group.name}</h3><p>{group.items.join(' · ')}</p></div>)}</div></section>
        <section><p className="eyebrow">05 / Education & professional development</p>{resume.education.map(ed => <div className="resume-education" key={ed.institution}><h3>{ed.institution}</h3><p>{ed.study} · {ed.dates}</p></div>)}</section>
      </article>
    </main>
    <footer className="resume-footer"><p>Code, land & imagination.</p><a href="/resumes/Kahlil-Calavas-Visual-Resume.pdf" download>Download the visual résumé ↓</a><Link href="/">Back to portfolio ↗</Link></footer>
  </div>;
}
