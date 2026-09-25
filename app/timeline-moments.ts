export const timelineThemes = ['XR & tools', 'Architecture', 'Builders'] as const;
export type TimelineTheme = (typeof timelineThemes)[number];

export type TimelineMoment = {
  id: string;
  date: string;
  dateLabel?: string;
  year: number;
  title: string;
  place: string;
  description: string;
  themes: readonly TimelineTheme[];
  image: string;
  alt: string;
  companion?: { image: string; alt: string };
  portrait?: boolean;
  source: string;
  sourceLabel?: string;
  relatedLinks?: readonly { label: string; url: string }[];
  credit: string;
};

export const timelineMoments: readonly TimelineMoment[] = [
  {
    "id": "printing-the-possibility",
    "date": "2023-08-15",
    "year": 2023,
    "title": "Printing the possibility",
    "place": "EcoDome journey · Modular prototypes",
    "description": "Prototyping printed dome components with Joe LaRose and Spaceship Earth Engineers. Small physical models make it possible to test shapes, materials, and assembly before attempting a full-size structure.",
    "themes": [
      "Architecture",
      "Builders"
    ],
    "image": "/timeline/printed-dome.webp",
    "alt": "A modular white printed dome prototype being held and demonstrated in a workshop.",
    "source": "https://www.facebook.com/reel/1382131419055704/",
    "credit": "Video still · 00:18",
    "portrait": true
  },
  {
    "id": "reality-hack-2024",
    "date": "2024-01-29",
    "year": 2024,
    "title": "More than a hack",
    "place": "MIT Reality Hack 2024 · Cambridge",
    "description": "A return to MIT Reality Hack, where immersive technology is built through hands-on collaboration. The recap reflects on a third visit to the hackathon and the exchange between participants, mentors, and organizers.",
    "themes": [
      "XR & tools",
      "Builders"
    ],
    "image": "/timeline/reality-hack-2024.webp",
    "alt": "Hackathon participants together beneath the Reality Hack MIT XR Hackathon sign.",
    "source": "https://www.facebook.com/reel/911378390703000/",
    "credit": "Original video cover frame",
    "portrait": true
  },
  {
    "id": "a-place-to-build",
    "date": "2025-02-24",
    "year": 2025,
    "title": "A base for the work",
    "place": "Catskills incubator · New York",
    "description": "A Catskills home base becomes a place for collaborators to develop bioregional software and spatial ideas. The incubator announcement sets out plans for a nearby farm, makerspace, and a larger setting for shared technical work.",
    "themes": [
      "XR & tools",
      "Builders"
    ],
    "image": "/timeline/incubator.webp",
    "alt": "An immersive projection fills an interior room at the Catskills home base.",
    "source": "https://www.facebook.com/reel/1377476806747501/",
    "credit": "Video still · 00:10"
  },
  {
    "id": "accelerator-in-practice",
    "date": "2025-03-25",
    "year": 2025,
    "title": "The accelerator in practice",
    "place": "Immersion workshop · The Catskills",
    "description": "An immersion brings entrepreneurial ideas into a working session: planning, presenting, comparing approaches, and making room for invention. The emphasis is on the conditions that help collaborators turn an idea into something they can test.",
    "themes": [
      "Builders"
    ],
    "image": "/timeline/accelerator.webp",
    "alt": "A workshop participant presents beside a table of collaborators and working materials.",
    "source": "https://www.facebook.com/reel/1372795737188616/",
    "credit": "Video still · 01:50"
  },
  {
    "id": "awe-traces",
    "date": "2025-06-10",
    "year": 2025,
    "title": "Ideas meet users at AWE",
    "place": "Augmented World Expo · The Traces booth",
    "description": "At AWE, the Traces booth brings headset demonstrations into a busy public setting. It is a practical meeting point for spatial technology, physical interaction, and conversations with the people trying the work.",
    "themes": [
      "XR & tools",
      "Builders"
    ],
    "image": "/timeline/awe.webp",
    "alt": "Visitors try immersive headset demonstrations at the Traces booth at AWE.",
    "source": "https://drive.google.com/file/d/1nn2jqEU_a--VFe36upWAVV6skZF7HgOc/view",
    "credit": "Traces AWE video archive · Tavius folder · Still at 00:00.5",
    "dateLabel": "Archive date",
    "sourceLabel": "Watch AWE footage",
    "relatedLinks": [
      {
        "label": "View AWE post",
        "url": "https://www.facebook.com/2058041414685357"
      }
    ]
  },
  {
    "id": "the-spatial-network-at-the-un",
    "date": "2025-07-15",
    "year": 2025,
    "title": "A wider stage for spatial ideas",
    "place": "UN STI Forum side event · New York",
    "description": "Presenting The Spatial Network at a side event of the United Nations Science, Technology and Innovation Forum. The work enters a wider discussion about technology, collaboration, and the practical systems that connect people and places.",
    "themes": [
      "XR & tools",
      "Builders"
    ],
    "image": "/timeline/forum.webp",
    "alt": "Participants around a conference table during the UN STI Forum side event.",
    "source": "https://www.facebook.com/reel/803745888654229/",
    "credit": "Film credited to Eslerh Oreste · Still at 00:40"
  },
  {
    "id": "architecture-before-construction",
    "date": "2025-10-06",
    "year": 2025,
    "title": "See it before building it",
    "place": "EcoDome journey · Architectural visualization",
    "description": "The dome journey moves from physical prototypes to immersive planning. This EcoTerra demonstration places a dome design in a virtual setting, exploring how mixed reality can help people understand a proposal before construction begins.",
    "themes": [
      "Architecture",
      "XR & tools"
    ],
    "image": "/timeline/dome-visualization.webp",
    "alt": "A virtual dome and deck placed within a wooded landscape in an architectural visualization.",
    "source": "https://www.facebook.com/reel/2716766281993413/",
    "credit": "Architectural visualization · Video still at 00:08; black bars cropped"
  },
  {
    "id": "learning-building-systems",
    "date": "2025-12-03",
    "year": 2025,
    "title": "Learning how systems go together",
    "place": "Biotekt South · Modular architecture",
    "description": "Exploring an architectural system from inside the structure. The visit considers modular assembly and how a digital planning tool could let people configure a layout, understand its parts, and move toward a build.",
    "themes": [
      "Architecture",
      "Builders"
    ],
    "image": "/timeline/architectural-systems.webp",
    "alt": "A discussion inside an unfinished vaulted structure with repeated modular architectural forms.",
    "source": "https://www.facebook.com/reel/728036046465694/",
    "credit": "Video still · 00:20"
  },
  {
    "id": "reality-hack-2026",
    "date": "2026-01-22",
    "year": 2026,
    "title": "Back at Reality Hack",
    "place": "MIT Reality Hack 2026 · Cambridge",
    "description": "Another chapter at MIT Reality Hack: a meeting of XR builders, hardware experiments, and rapid prototypes. A humanoid robot demonstration captures the hands-on curiosity that runs through the hackathon environment.",
    "themes": [
      "XR & tools",
      "Builders"
    ],
    "image": "/timeline/reality-hack-2026.webp",
    "alt": "A humanoid robot demonstration in front of Reality Hack signage.",
    "source": "https://www.facebook.com/reel/839262405779656/",
    "credit": "Video still · 00:30",
    "portrait": true,
    "relatedLinks": [
      {
        "label": "Watch hackathon recap",
        "url": "https://www.facebook.com/reel/1319930203230976/"
      }
    ]
  },
  {
    "id": "a-digital-twin-with-a-purpose",
    "date": "2026-06-22",
    "year": 2026,
    "title": "A digital twin with a purpose",
    "place": "Alan Day Community Garden · Norway, Maine",
    "description": "The garden’s digital twin was created to support its fundraising efforts. The captured site makes a real place accessible in 3D; the “Light the Garden” fundraiser video shows the people and activity that the work was intended to support.",
    "themes": [
      "XR & tools",
      "Architecture"
    ],
    "image": "/timeline/digital-twin.webp",
    "alt": "The original photogrammetry scan of Alan Day Community Garden, showing its buildings, paths, and garden beds.",
    "source": "https://www.facebook.com/reel/1293283726122683/",
    "credit": "Original garden scan, current model view · Fundraiser video cover frame",
    "dateLabel": "Fundraiser post",
    "sourceLabel": "Watch the fundraiser",
    "companion": {
      "image": "/timeline/fundraiser.webp",
      "alt": "Two performers at microphones under the garden’s timber pavilion during the fundraiser."
    },
    "relatedLinks": [
      {
        "label": "Explore the digital twin",
        "url": "https://alanday.netlify.app/"
      }
    ]
  },
  {
    "id": "future-lab",
    "date": "2026-08-22",
    "year": 2026,
    "title": "Future Lab, in the room",
    "place": "Future Lab · Big Hollow Greene",
    "description": "Presentations, working sessions, and live demonstrations bring the projects into one room. The Future Lab and accelerator recap connects architectural models, immersive tools, and creative hardware through the people developing them.",
    "themes": [
      "XR & tools",
      "Architecture",
      "Builders"
    ],
    "image": "/timeline/future-lab.webp",
    "alt": "Presenters demonstrate a digital architectural model beside laptops and interactive visual tools.",
    "source": "https://mhmtbsugxmiebanqeifx.supabase.co/storage/v1/object/public/videos/accelerator-and-future-lab.mp4",
    "credit": "Future Lab / accelerator recap · Still at 01:30",
    "dateLabel": "Event date",
    "relatedLinks": [
      {
        "label": "View event post",
        "url": "https://www.facebook.com/2429851137504381"
      }
    ]
  },
  {
    "id": "tools-for-spatial-creation",
    "date": "2026-09-24",
    "year": 2026,
    "title": "Tools for spatial creation",
    "place": "Future Lens · CMS, VR & computer vision",
    "description": "Connecting immersive work to a content management system and computer vision makes spatial creation more practical. A virtual sculpture beside a real porch shows the tools moving from technical development into direct creative use.",
    "themes": [
      "XR & tools"
    ],
    "image": "/timeline/spatial-tools.webp",
    "alt": "A virtual ring sculpture inside a green editing outline beside a real wooden porch.",
    "source": "https://www.facebook.com/reel/28904039799179676/",
    "credit": "Immersive demonstration · Screenshot at about 01:13"
  }
];

export const timelinePdf = '/timeline/Kahlil-Calavas-Future-Lens-Timeline.pdf';

export function momentDate(date: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
}
