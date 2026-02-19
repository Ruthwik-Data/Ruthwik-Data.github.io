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
  logo: "/ruthwik.jpg",
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
    "I am an AI Product Manager with 7+ years of 0→1 experience building products. I specialize in shipping evaluation-first AI products, including RAG applications, agents, and decision-support tools. I focus on reliability, reasoning transparency, and unit economics over AI hype.",
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
AI Product Manager with seven+ years of 0→1 experience building B2B SaaS, Fintech, and AI products. I've scaled platforms to 10,000+ users and $100K ARR by prioritizing reliability, reasoning transparency, and unit economics over AI hype.
<br/><br/>
I specialize in shipping evaluation-driven LLM, RAG, semantic search, and agentic pipelines into production with clear metrics for acceptance, cost, latency, and reliability. I ground AI roadmaps in user research, experimentation, evals, and tradeoff analysis.`,
    image_l: {
      url: "/ruthwik.jpg",
      alt: "Ruthwik Arepelly",
    },
    image_r: {
      url: "/ruthwik.jpg",
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
      image: "/demo-2.jpg",
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
      image: "/demo-2.jpg",
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
      image: "/demo-2.jpg",
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

export const skills = [
  "LLM APIs",
  "RAG Pipelines",
  "Agentic Workflows",
  "GPT-4o Vision",
  "TypeScript",
  "Python",
  "Next.js",
  "Product Strategy",
  "B2B SaaS",
  "Fintech",
  "Evaluation Frameworks"
];
