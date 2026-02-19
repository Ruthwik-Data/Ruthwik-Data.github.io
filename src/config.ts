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
    url: "/blog",
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
  }
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Ruthwik Arepelly | AI Product Manager",
    description:
      "AI Product Manager with 7+ years of 0→1 experience building B2B SaaS, Fintech, and AI products. Specializing in RAG, Agentic Pipelines, and reasoning transparency.",
    image: identity.logo,
  },
  role: "AI Product Manager",
  description:
    "I build high-impact AI systems for B2B SaaS and Fintech. From scaling edtech platforms to $100K ARR to architecting reasoning-transparency layers for GPT-4 Vision pipelines, I focus on reliability, unit economics, and human-centric AI.",
  socialLinks: socialLinks,
  links: [
    {
      title: "View My Work",
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
  subtitle: "AI Product Manager — B2B SaaS, Fintech, Evaluation Driven Systems",
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
      description: "AI-powered receipt extraction and finance dashboard using GPT-4o Vision. Reduced inference costs by ~40%.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/Ruthwik-Data/receiptiq",
    },
    {
      title: "PennyPal + Zenny",
      description: "Student finance assistant with conversational voice/text interface delivering real-time spending nudges.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/Ruthwik-Data/pennypal",
    },
    {
      title: "Memora",
      description: "AI-native digital memory tool that transforms screenshots into a searchable database using semantic vision.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/Ruthwik-Data/memora",
    },
    {
      title: "SleepSense",
      description: "AI-driven sleep coaching app for Google Gemini API Competition. Analyzes habits for personalized insights.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/Ruthwik-Data/sleepsense",
    },
    {
      title: "Photon Edu Fintech",
      description: "B2B SaaS edtech platform serving 75+ schools and 10,000+ students. Scaled to $100K ARR.",
      image: "/demo-2.jpg",
      year: "2018",
      url: "https://github.com/Ruthwik-Data",
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
