import ProjectShowcase from './project-showcase';

export default function FuturistNetwork() {
  return <ProjectShowcase
    id="futurist-network" number="02" eyebrow="A network for people making things happen"
    title="The Futurist Network."
    headline="Find your people. Build what comes next."
    description="The community and creative toolkit behind the work. A place to shape worlds, share stories, develop ideas with other builders, and gather support for regenerative projects. It brings the digital studio and the real-world gathering into the same conversation."
    href="https://thefuturist.network/" cta="Join the Futurist Network"
    images={[
      { src: '/images/network-gathering.jpg', alt: 'Futurist Network participants gathered inside a large circular sculpture in a green mountain landscape', label: 'Future Lab / people, place & possibility', href: 'https://thefuturist.network/futurelab' },
      { src: '/images/network-interior.jpg', alt: 'Futurist Toolkit promotional artwork showing a dome interior in the spatial design interface', label: 'Futurist Toolkit / imagine & make', href: 'https://thefuturist.network/futurist-toolkit', contain: true },
      { src: '/images/network-accelerator.jpg', alt: 'Creative production equipment and immersive technology in a Futurist Network residency studio', label: 'The accelerator / ideas into action', href: 'https://thefuturist.network/accelerator' },
    ]}
    features={[
      { title: 'A studio for your ideas', description: 'Create stories, worlds, interiors, and 3D models with connected tools that give a project room to grow.', href: 'https://thefuturist.network/futurist-toolkit' },
      { title: 'People to build with', description: 'Meet through Future Lab and develop a business, prototype, and story through the accelerator.', href: 'https://thefuturist.network/accelerator' },
      { title: 'Support for the work', description: 'Connect projects with an audience through public initiatives, the marketplace, and Chip-In fundraisers.', href: 'https://thefuturist.network/fundraisers' },
    ]}
  />;
}
