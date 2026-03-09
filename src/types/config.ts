export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type StrategyPiece = {
  title: string;
  subtitle: string;
  url: string;
  description: string;
  problem: string;
  mentalModel: string;
  decisions: string;
  successMetric: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  heroHeading: string;
  heroBioFirstLine: string;
  heroBioSecondLine: string;
  heroProofPoints: string[];
  socialLinks: SocialLink[];
  strategyPieces: StrategyPiece[];
  links: {
    title: string;
    url: string;
    external?: boolean;
  }[];
};

export type ResumeItem = {
  title: string;
  company: string;
  date: string;
  description: string[];
  icon?: string;
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: string;
  about: {
    bioFirstLine: string;
    bioSecondLine: string;
    image_l: {
      url: string;
      alt: string;
    };
    image_r: {
      url: string;
      alt: string;
    };
  };
  work: {
    description: string;
    items: ResumeItem[];
  };
  connect: {
    description: string;
    links: SocialLink[];
  };
};

export type AILab = {
  name: string;
  description: string; // 1-line description
  takeaway: string; // 1-line takeaway
  tags: string[];
  url: string;
  ctaLabel?: string; // optional custom button label
};

export type Project = {
  id: string;
  title: string;
  status: "Live" | "Prototype" | "Case Study";
  category: "Shipped Product" | "Product Thinking" | "System Design";

  // Grid/Card Fields
  shortProblem: string;
  shortSolution: string;
  outcome: string;

  metric?: string;
  githubUrl?: string;
  liveUrl?: string;
  loomUrl?: string;

  // Case Study Fields
  image: string;
  galleryUrls?: string[];
  overview: string[];
  problem: string; // Real-world constraints
  usersAndJobs: string; // Users & Jobs to be done
  solution: string; // Product narrative
  architectureContent: string; // Architecture & Evals
  techStack: string[];
  resultsAndMetrics: string; // Connect model accuracy to business value
  keyTakeaways: string[]; // 3-4 bullets max
  whyThisMatters: string; // real-world impact or user value
  myRole: string; // summary of my role
  roleBullets: string[]; // specific responsibilities
  futureImprovements?: string; // What I'd Build in V2
  hideFromGrid?: boolean; // If true, won't show in main project grid
  evaluation?: {
    datasetSize: string;
    method: string;
    primaryMetric: string;
    status: string;
  };
};

export type ConceptProject = {
  title: string;
  problem: string;
  concept: string;
  tags: string[];
  url: string;
};

export type ProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: Project[];
  aiLabs: AILab[];
  concepts: ConceptProject[];
};

export type BlogPageContent = {
  seo: SEOInfo;
  subtitle: string;
};
