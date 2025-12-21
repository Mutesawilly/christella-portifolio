export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  year: string;
  client: string;
  role: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  tools: string[];
  outcomes: string[];
  gallery: { color: string; label: string }[];
}

export const projects: Project[] = [
  {
    id: "bloom",
    title: "Bloom",
    category: "Brand Identity",
    description: "A fresh visual identity for a sustainable beauty brand",
    color: "from-rose-soft to-primary/30",
    year: "2024",
    client: "Bloom Cosmetics",
    role: "Brand Designer",
    duration: "3 months",
    overview: "Bloom is a sustainable beauty brand committed to eco-conscious practices. The project involved creating a complete visual identity that reflects their values of natural beauty, environmental responsibility, and modern elegance.",
    challenge: "The main challenge was to create a brand identity that felt premium and luxurious while also communicating sustainability and eco-friendliness without falling into typical 'green' clichés.",
    solution: "I developed a soft, organic visual language using flowing typography and a muted color palette inspired by natural botanicals. The identity system includes custom illustrations, packaging design, and digital assets that work harmoniously across all touchpoints.",
    tools: ["Figma", "Adobe Illustrator", "Procreate", "After Effects"],
    outcomes: [
      "40% increase in brand recognition within target demographic",
      "Featured in Design Week magazine",
      "Successfully launched across 50+ retail locations",
      "Reduced packaging waste by 60% through design optimization"
    ],
    gallery: [
      { color: "from-rose-soft to-primary/20", label: "Logo Design" },
      { color: "from-primary/20 to-lavender-soft", label: "Color Palette" },
      { color: "from-lavender-soft to-cream-dark", label: "Typography" },
      { color: "from-cream-dark to-rose-soft/50", label: "Packaging" }
    ]
  },
  {
    id: "mindful",
    title: "Mindful",
    category: "Mobile App",
    description: "Meditation app designed for students and young professionals",
    color: "from-lavender-soft to-accent/30",
    year: "2024",
    client: "Mindful Inc.",
    role: "UI/UX Designer",
    duration: "4 months",
    overview: "Mindful is a meditation and wellness app specifically designed for the busy lifestyles of students and young professionals. The app features quick meditation sessions, stress-relief exercises, and sleep stories.",
    challenge: "Creating an app that could compete in the crowded wellness space while specifically addressing the unique stressors faced by younger users, including academic pressure and work-life balance.",
    solution: "I designed an interface that prioritizes speed and accessibility, with sessions starting in just two taps. The visual design uses calming gradients and gentle animations to create a peaceful digital environment that encourages regular use.",
    tools: ["Figma", "Principle", "Lottie", "Maze"],
    outcomes: [
      "100K+ downloads in first month",
      "4.8 star rating on App Store",
      "Featured in Apple's 'Apps We Love'",
      "85% user retention rate after 30 days"
    ],
    gallery: [
      { color: "from-lavender-soft to-accent/20", label: "Home Screen" },
      { color: "from-accent/20 to-secondary", label: "Session Flow" },
      { color: "from-secondary to-primary/20", label: "Profile" },
      { color: "from-primary/20 to-lavender-soft", label: "Settings" }
    ]
  },
  {
    id: "cafe-luna",
    title: "Café Luna",
    category: "Web Design",
    description: "Website redesign for a local artisan coffee shop",
    color: "from-cream-dark to-rose-soft/50",
    year: "2023",
    client: "Café Luna",
    role: "Web Designer & Developer",
    duration: "2 months",
    overview: "Café Luna is a beloved local coffee shop known for its artisan roasts and cozy atmosphere. The website redesign aimed to bring that warmth online while improving functionality for online orders and events.",
    challenge: "The existing website was outdated and didn't reflect the café's charming personality. Additionally, they needed an integrated ordering system and event booking functionality.",
    solution: "I created a warm, inviting website with rich photography and smooth interactions. The design uses earthy tones and handwritten typography accents to evoke the café's artisanal quality. Integrated features include online ordering, event calendar, and a loyalty program signup.",
    tools: ["Figma", "Webflow", "GSAP", "Stripe"],
    outcomes: [
      "200% increase in online orders",
      "Event bookings increased by 150%",
      "Page load time reduced by 65%",
      "Mobile traffic increased by 80%"
    ],
    gallery: [
      { color: "from-cream-dark to-secondary/30", label: "Homepage" },
      { color: "from-secondary/30 to-rose-soft", label: "Menu Page" },
      { color: "from-rose-soft to-primary/20", label: "Ordering" },
      { color: "from-primary/20 to-cream-dark", label: "Events" }
    ]
  },
  {
    id: "wanderlust",
    title: "Wanderlust",
    category: "Photography",
    description: "A visual journey through European architecture",
    color: "from-secondary to-lavender-soft/50",
    year: "2023",
    client: "Personal Project",
    role: "Photographer & Art Director",
    duration: "6 months",
    overview: "Wanderlust is a personal photography project documenting architectural beauty across 12 European cities. The series explores the contrast between historic and contemporary design, capturing the soul of each location.",
    challenge: "Creating a cohesive visual narrative across diverse architectural styles and lighting conditions while maintaining a distinctive artistic voice throughout the collection.",
    solution: "I developed a consistent editing style that emphasizes geometric forms and natural light. Each photograph is composed to highlight the relationship between structure and space, creating a meditative quality that invites viewers to pause and observe.",
    tools: ["Sony A7IV", "Lightroom", "Capture One", "Photoshop"],
    outcomes: [
      "Exhibition at City Gallery",
      "Published in Architectural Digest",
      "15K+ prints sold",
      "Collaboration with three architecture firms"
    ],
    gallery: [
      { color: "from-secondary to-lavender-soft/30", label: "Paris" },
      { color: "from-lavender-soft/30 to-cream-dark", label: "Barcelona" },
      { color: "from-cream-dark to-rose-soft/20", label: "Vienna" },
      { color: "from-rose-soft/20 to-secondary", label: "Copenhagen" }
    ]
  }
];
