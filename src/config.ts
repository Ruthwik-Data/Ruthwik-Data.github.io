import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Ruthwik Arepelly",
  // REPLACE THIS FILE: Upload your photo to public/profile.jpg to see it here
  logo: "/profile-placeholder.jpg",
  email: "ruthwikarepelly2@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "https://medium.com/@rello4585",
    external: true,
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/Ruthwik-Data",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/ruthwik-arepelly",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Medium",
    url: "https://medium.com/@rello4585",
    icon: "mdi:medium",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Ruthwik Arepelly | AI Product Manager",
    description:
      "AI Product Manager specializing in RAG, Agentic Pipelines, and Evaluation-Driven Systems for B2B SaaS and Fintech.",
    image: identity.logo,
  },
  role: "AI Product Manager — B2B SaaS, Fintech, Evaluation-Driven Systems",
  description:
    "I am an experienced AI Product Manager specializing in building 0→1 products. I focus on shipping evaluation-first AI applications, including RAG systems, agents, and decision-support tools, prioritizing reliability and unit economics.",
  socialLinks: socialLinks,
  links: [
    {
      title: "View Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Ruthwik Arepelly",
    description:
      "AI Product Manager specializing in RAG, Agentic Pipelines, and reasoning transparency.",
    image: identity.logo,
  },
  subtitle: "AI Product Manager — B2B SaaS, Fintech, Evaluation-Driven Systems",
  about: {
    description: `
AI Product Manager specialized in building 0→1 products across B2B SaaS, Fintech, and AI sectors. I've scaled platforms to a global user base by prioritizing reliability, reasoning transparency, and unit economics over AI hype.
<br/><br/>
I specialize in shipping evaluation-driven LLM, RAG, semantic search, and agentic pipelines into production with clear metrics for acceptance, cost, latency, and reliability. I ground AI roadmaps in user research, experimentation, evals, and tradeoff analysis.`,
    image_l: {
      url: "/profile-placeholder.jpg",
      alt: "Ruthwik Arepelly",
    },
    image_r: {
      url: "/profile-placeholder.jpg",
      alt: "Ruthwik Arepelly",
    },
  },
  work: {
    description: `I build products that bridge the gap between complex AI and real-world value.`,
    items: [
      {
        title: "AI Product Manager",
        company: {
          name: "Community Dreams",
          image: "/logo.webp",
          url: "https://github.com/Ruthwik-Data",
        },
        date: "2024 - Present",
      },
      {
        title: "AI Product Manager",
        company: {
          name: "Stealth AI",
          image: "/logo.webp",
          url: "https://github.com/Ruthwik-Data",
        },
        date: "2024 - 2026",
      },
      {
        title: "Product Manager",
        company: {
          name: "Digital Connect",
          image: "/logo.webp",
          url: "https://github.com/Ruthwik-Data",
        },
        date: "2018 - 2023",
      },
      {
        title: "Co-Founder & Head of Product",
        company: {
          name: "Photon Edu Fintech",
          image: "/logo.webp",
          url: "https://github.com/Ruthwik-Data",
        },
        date: "2016 - 2018",
      },
    ],
  },
  connect: {
    description: `I'm always open to discussing RAG architecture, agentic workflows, or AI product strategy.`,
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Ruthwik Arepelly",
    description: "Featured AI, Fintech, and B2B SaaS projects.",
    image: identity.logo,
  },
  subtitle: "Featured Products & Systems",
  projects: [
    {
      title: "ReceiptIQ",
      description: "AI-powered receipt extraction and finance dashboard using GPT-4o Vision for 95% accuracy.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/Ruthwik-Data/receiptiq",
    },
    {
      title: "PennyPal",
      description: "GenAI financial companion with 90% voice intent recognition accuracy.",
      image: "/demo-1.jpg",
      year: "2024",
      url: "https://github.com/Ruthwik-Data/pennypal",
    },
    {
      title: "Memora",
      description: "Intelligent snapshot organizer that turns loose screenshots into searchable memories.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/Ruthwik-Data/memora",
    },
    {
      title: "Warmlist",
      description: "Warm outreach tracker for founders and PMs to track high-intent leads.",
      image: "/demo-1.jpg",
      year: "2024",
      url: "https://github.com/Ruthwik-Data/warmlist",
    },
    {
      title: "SugarShield",
      description: "Vision-based food analysis with transparency and explainability for health management.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/Ruthwik-Data/sugarshield",
    },
    {
      title: "SleepSense",
      description: "AI-driven sleep coaching application built with TypeScript.",
      image: "/demo-1.jpg",
      year: "2024",
      url: "https://github.com/Ruthwik-Data/sleepsense",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Writing | Ruthwik Arepelly",
    description: "Articles on Product Management, AI, and Socio-Technological trends.",
    image: identity.logo,
  },
  subtitle: "Selected Writing from Medium",
};

export const skillCategories = [
  {
    title: "AI / Data / LLM",
    skills: ["LLM APIs", "RAG Pipelines", "Agentic Workflows", "GPT-4o Vision", "Semantic Search", "Prompt Engineering"]
  },
  {
    title: "Product / PM",
    skills: ["Product Strategy", "B2B SaaS", "Fintech", "Evaluation Frameworks", "User Research", "Unit Economics"]
  },
  {
    title: "Technical Tools & Platforms",
    skills: ["TypeScript", "Python", "Next.js", "SQL", "Astro", "Vercel / GitHub Pages"]
  }
];
