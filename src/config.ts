import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
  OpenSourceContribution,
} from "./types/config";

export const identity: Identity = {
  name: "Ruthwik Arepelly",
  logo: "/profile.jpg",
  email: "ruthwikarepelly2@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/#projects" },
  { title: "About", url: "/#about" },
  { title: "Blog", url: "/blog" },
];

export const socialLinks: SocialLink[] = [
  { title: "GitHub", url: "https://github.com/Ruthwik-Data", icon: "mdi:github", external: true },
  { title: "LinkedIn", url: "https://linkedin.com/in/ruthwik-arepelly", icon: "mdi:linkedin", external: true },
  { title: "Medium", url: "https://medium.com/@rello4585", icon: "mdi:medium", external: true },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Ruthwik Arepelly | AI Product Manager",
    description: "AI Product Manager & former founder building evaluation-first AI products — RAG, agents, and LLM evals. Open-source contributor to DeepEval, LlamaIndex & Phoenix.",
    image: identity.logo,
  },
  heroHeading: "Building 0→1 AI Products",
  heroBioFirstLine: "Former founder and AI Product Manager with 7+ years building production AI systems.",
  heroBioSecondLine: "I take LLM pipelines from prototype to production—RAG systems, agents, and eval-first tools where reliability and unit economics are first-class—and contribute the fixes back to open-source eval frameworks like DeepEval, LlamaIndex, and Phoenix.",
  heroProofPoints: [
    "Scaled a B2B fintech from zero to $100K ARR as founder",
    "Shipped production LLM systems—RAG, agents, GPT-4o Vision, and eval frameworks",
    "Open-source contributor: merged a fix into DeepEval; PRs to LlamaIndex, Mastra & Phoenix",
  ],
  socialLinks: socialLinks,
  strategyPieces: [
    {
      title: "How Gifting Became a Growth Engine, Not a Feature",
      subtitle: "Why gifting is one of the most underrated growth loops in consumer products.",
      url: "/blog/gifting",
      description: "Why gifting compounds acquisition and retention when treated as a growth loop rather than a checkout add-on.",
      problem: "Teams ship gifting as a feature bolt-on and miss the warm acquisition loop underneath it.",
      mentalModel: "Gifting as a two-sided growth loop—every gift is a warm intro to a brand-new user.",
      decisions: "Design for the recipient's first-run experience, not just the gifter's checkout.",
      successMetric: "Recipient→active conversion and gift-driven new-user acquisition.",
    },
    {
      title: "From Venue to Platform: The Bernabéu as a Product",
      subtitle: "Why infrastructure should be treated as a multi-tenant revenue platform.",
      url: "/blog/bernabeu",
      description: "Analyzing infrastructure as a product platform that enables multi-tenant revenue streams.",
      problem: "Static physical assets failing to adapt to digital-first revenue opportunities.",
      mentalModel: "Asset-as-a-Platform: Enabling developers and partners to build 'on top' of physical space.",
      decisions: "Architecture over aesthetics; prioritizing APIs and data-capture points.",
      successMetric: "Non-matchday revenue growth and partner ecosystem health.",
    },
  ],
  links: [
    { title: "View My Work", url: "/#projects" },
    { title: "My Product Philosophy", url: "/#about" },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Ruthwik Arepelly",
    description: "AI Product Manager focused on building 0→1 products by bridging the gap between LLM hype and production reliability.",
    image: identity.logo,
  },
  subtitle: "AI Product Manager — B2B SaaS, Fintech, Evaluation-Driven Systems",
  about: {
    bioFirstLine: "Former founder and AI Product Manager with 7+ years building high-trust AI systems.",
    bioSecondLine: "I move LLM pipelines from prototype to production (68% → 91% acceptance), protect engineering runway by killing low-value features, and scaled a B2B fintech platform from zero to $100K ARR. I build RAG pipelines, LLM evaluation frameworks, and agentic workflows — and contribute back to open-source AI eval tools, with a merged fix in DeepEval and PRs to LlamaIndex, Mastra, and Phoenix.",
    image_l: { url: "/profile.jpg", alt: "Ruthwik Arepelly" },
    image_r: { url: "/profile.jpg", alt: "Ruthwik Arepelly" },
  },
  work: {
    description: `From a zero-to-$100K-ARR fintech to production LLM systems — I build products where reliability and unit economics are first-class constraints.`,
    items: [
      {
        title: "AI Product Manager",
        company: "Community Dreams",
        date: "2026 — Present",
        location: "Tampa, FL",
        icon: "mdi:robot-outline",
        description: [
          "Shipped an AI chatbot that replaced spreadsheet/email program tracking for a 6-person team, recovering 60+ hours/month (~950 hours/year)",
          "Led the design of a RAG grounding layer (chunking, tagging schema, retrieval) that eliminated hallucinations and gave staff instant, sourced citations",
          "Built n8n automation surfacing 5–10 data-integrity issues/week and consolidated status, AI recommendations, and next steps into one decision workspace",
        ],
      },
      {
        title: "AI Product Manager",
        company: "Stealth AI",
        date: "2024 — 2026",
        location: "San Francisco, CA",
        icon: "mdi:receipt-text-outline",
        description: [
          "Killed a contact-enrichment feature after discovery showed 80% of value came from follow-up reminders — saving ~$40K before a line of production code",
          "Grew user acceptance from 68% to 91% by shipping a reasoning-transparency layer with confidence indicators (validated across 25+ interviews)",
          "Cut AI operating costs 40% with a hybrid OCR + Vision/LLM pipeline — 60% less correction time, ~4s per receipt across 20 receipts / 172 line items",
          "Built SugarShield (precision 1.00, recall 0.77, FPR 0.00 on a 15-product set) with a human-in-the-loop gate for production readiness",
        ],
      },
      {
        title: "Product Manager",
        company: "Digital Connect",
        date: "2018 — 2023",
        location: "Hyderabad, India",
        icon: "mdi:office-building-outline",
        description: [
          "Consolidated 4 vendors (payments, records, websites) into one platform with an 8-person team — cut reconciliation from 7 days to same-day for 10,000+ students",
          "Shipped ecommerce with UPI integration that moved 35% of orders online and cut duplicate operational costs ~25%",
          "Drove 8 end-to-end digital launches (websites, ticketing, payment gateways) processing 50,000+ registrations; retained 80% of clients through COVID shutdowns",
        ],
      },
      {
        title: "Co-Founder & Head of Product",
        company: "Photon Edu Fintech",
        date: "2016 — 2018",
        location: "Hyderabad, India",
        icon: "mdi:rocket-launch-outline",
        description: [
          "Co-founded a B2B SaaS edtech/payments platform, scaling from zero to 75+ schools, 10,000+ students, and $100K ARR with a 5-person team",
          "Secured $100K ARR by diagnosing a 38% payment-failure rate and executing an emergency provider migration during peak enrollment",
          "Ran research across 20+ institutions and shipped features that cut administrative workload 40%, establishing strong product-market fit",
        ],
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
    description: "Detailed product briefs for AI, Fintech, and B2B SaaS systems.",
    image: identity.logo,
  },
  subtitle: "Product Briefs: 0→1 AI Systems",
  projects: [
    {
      id: "receiptiq",
      title: "ReceiptIQ",
      status: "Live",
      category: "Shipped Product",
      shortProblem: "Extracting data from messy, crumpled receipts is manual and error-prone.",
      shortSolution: "A GPT-4o Vision finance dashboard that turns receipt photos—or pasted text—into structured transactions with instant tax, category, and spend insights.",
      outcome: "Validated 18 structured transactions and 172 item-level records from 20 receipts, with JSON/CSV export for accounting tools.",
      metric: "172 item-level records extracted",
      githubUrl: "https://github.com/Ruthwik-Data/receiptiq",
      liveUrl: "https://receiptiq-topaz.vercel.app/",
      image: "/receiptiq_viz.jpg",
      galleryUrls: ["/receiptiq_viz.jpg", "/receiptiq.webp"],
      overview: [
        "Structured 18 transactions from 20 processed receipts",
        "Extracted 172 item-level records into a usable data model",
        "Standardized 6 merchants and generated 7 spending categories for analysis",
      ],
      problem: "Extracting data from messy, crumpled receipts is manual and error-prone. Users need a faster way to digitize receipts without typing line items.",
      whyThisMatters: "Manual receipt entry is a significant bottleneck for accountants and SMEs. Automating this eliminates hours of manual transcription and reduces costly accounting errors.",
      usersAndJobs: "Accountants, operators, and small business owners who need to capture expenses quickly and turn receipts into structured records.",
      solution: "A premium finance dashboard: GPT-4o Vision parses merchant, date, tax, and line items from a photo, upload, or pasted text, then computes spend insights (tax rate, net spend, categories) and exports to JSON/CSV for accounting tools.",
      architectureContent: "Receipt image / text → GPT-4o Vision → JSON structuring → category tagging → Supabase + Recharts dashboard",
      techStack: ["Next.js 15", "GPT-4o Vision", "Supabase", "Recharts", "Tailwind CSS 4"],
      resultsAndMetrics: "The pipeline processed 20 receipts, resulting in 18 structured transactions and 172 item-level records. Standardized 6 merchants and identified 7 spending categories. One SPAR transaction was flagged as a 5.4x outlier, with Walmart representing 45.8% of total spend (Avg value: $63.17).",
      keyTakeaways: [
        "Transforms messy, crumpled receipts into high-precision structured data",
        "Hybrid input (camera/upload or paste) with JSON/CSV export for accounting tools",
        "Validated 172 item-level records with outlier detection for finance analytics",
      ],
      myRole: "Product Manager",
      roleBullets: [
        "Defined project scope and mapped user jobs to be done for digitizing receipts",
        "Researched and tested vision prompt logic for high-accuracy item extraction",
        "Designed system flow from image input to analytics DB",
        "Collaborated with development to validate data patterns and outlier logic",
      ],
      futureImprovements: "Implement an agentic categorization loop based on prior accounting behavior and user-specific merchant rules.",
      evaluation: {
        datasetSize: "20 receipts",
        method: "Before/after structured processing review plus manual validation.",
        primaryMetric: "Structured transactions, extracted items, merchant normalization, and category generation.",
        status: "Validated and ready to show in portfolio.",
      },
    },
    {
      id: "finrag-eval",
      title: "FinRAG Eval",
      status: "Open Source",
      category: "System Design",
      shortProblem: "RAG over financial filings answers confidently even when it's wrong—the failure mode standard evals miss.",
      shortSolution: "A local RAG eval pipeline on Apple's FY2024 10-K that measures honest refusals vs. confident hallucinations.",
      outcome: "My fix now ships in DeepEval—a production eval framework used by real AI teams—after this pipeline caught a confident hallucination on Apple's actual 10-K and exposed a metric-level bug (#2594 → merged PR #2743).",
      metric: "Fix shipped in DeepEval · PR #2743 merged",
      githubUrl: "https://github.com/Ruthwik-Data/finrag-eval",
      image: "/finrag-eval.svg",
      galleryUrls: ["/finrag-eval.svg"],
      overview: [
        "Built an end-to-end local RAG pipeline (SEC EDGAR → answer) with a ground-truth eval suite",
        "Measured honest refusals (2/3) against confident hallucinations (1/3) on Apple's FY2024 10-K",
        "Surfaced a metric-level bug in DeepEval and filed it as GitHub Issue #2594",
      ],
      problem: "Teams building RAG over SEC filings face a dangerous failure mode: the system answers confidently even when it shouldn't. Standard RAG evals don't distinguish 'I don't know' (safe) from 'Revenue was $387.2B' when the real number is different (dangerous).",
      whyThisMatters: "In finance, a confident wrong number is worse than a refusal. Analysts act on precise figures, so the cost of a plausible-but-wrong answer is far higher than an honest 'not found'—yet most evals score both the same.",
      usersAndJobs: "AI teams and financial analysts building retrieval over dense regulatory documents who need to trust when the system says it doesn't know.",
      solution: "A fully local, reproducible RAG pipeline—SEC EDGAR ingestion through answer generation—with a 3-question evaluation suite grounded against Apple's actual FY2024 10-K figures, run at $0 API cost.",
      architectureContent: "SEC EDGAR 10-K → pdfplumber (section-aware) → chunker (overlap preserved) → nomic-embed-text → Supabase pgvector → top-k retrieval → llama3 (Ollama) → DeepEval metrics + manual ground-truth check",
      techStack: ["Python", "Supabase pgvector", "Ollama (llama3)", "nomic-embed-text", "DeepEval"],
      resultsAndMetrics: "On a 3-question suite grounded in Apple's FY2024 10-K: 2/3 honest refusals ('not found in context') and 1/3 confident hallucination with precise but incorrect figures. Running DeepEval's ContextualPrecisionMetric then exposed a metric-level bug—overlapping chunks were penalized as independent retrieval failures, making scores worse as chunk quality improved. I filed it as DeepEval Issue #2594 and contributed the fix, merged as PR #2743 (RetrievedContextData source grouping + corrected weighted precision score).",
      keyTakeaways: [
        "The dangerous failure mode isn't 'I don't know'—it's a wrong answer that sounds credible",
        "Built on a production-representative stack (Supabase pgvector), runs fully local at $0 for reproducible evals",
        "The eval found a bug in the eval framework—then I contributed the fix, now shipping in DeepEval (PR #2743)",
      ],
      myRole: "Product Manager / Builder",
      roleBullets: [
        "Framed the risk as 'confident hallucination vs. honest refusal' and built the ground-truth suite around it",
        "Designed section-aware chunking to preserve financial tables and boundaries",
        "Ran DeepEval metrics and traced the anomalous scores to a framework bug",
        "Documented and filed DeepEval Issue #2594 with a reproducible case",
      ],
      futureImprovements: "Expand the question suite beyond 3 grounded items and add automated regression tracking once the DeepEval group_by fix ships.",
      evaluation: {
        datasetSize: "3 questions grounded in Apple FY2024 10-K",
        method: "Ground-truth comparison against filing figures plus manual verdict per answer.",
        primaryMetric: "Honest-refusal rate vs. confident-hallucination rate.",
        status: "Validated. Findings and manual verdicts documented in the repo (notes/manual_eval.md).",
      },
    },
    {
      id: "self-improving-prompt-agent",
      title: "Self-Improving Prompt Agent",
      status: "Open Source",
      category: "System Design",
      shortProblem: "Prompt engineering is manual and intuition-driven—teams have no systematic way to know if a change improved quality.",
      shortSolution: "An edit → evaluate → keep/reject loop that optimizes a prompt against a scoring function and logs every decision.",
      outcome: "Improved a prompt's score from 0.10 to 0.80 across 10 rounds, rejecting 3 mutations with no regression.",
      metric: "Prompt score 0.10 → 0.80 in 10 rounds",
      githubUrl: "https://github.com/Ruthwik-Data/self-improving-prompt-agent",
      image: "/prompt-agent.svg",
      galleryUrls: ["/prompt-agent.svg"],
      overview: [
        "Built a minimal mutate → score → keep-if-better loop in ~100 lines of Python",
        "Optimized a fintech landing-page prompt from 0.10 to 0.80 over 10 rounds",
        "Logged full run history with mutation, score, and KEEP/REJECT decision",
      ],
      problem: "Most teams iterate on prompts by hand with no systematic signal on whether a change actually helped. The question: what if the system could evaluate its own prompt and keep only the improvements?",
      whyThisMatters: "This is the same structure that powers RLHF, AutoML, and DSPy-style optimizers. Understanding it hands-on—where the loop helps and where it's bounded by the eval—is core to building reliable LLM systems.",
      usersAndJobs: "PMs and engineers who want a repeatable, measurable way to improve prompts instead of relying on intuition.",
      solution: "A minimal edit → evaluate → keep/reject → repeat loop: loop.py mutates the prompt, judge.py scores it 0–1, and the best-known state is preserved unless a mutation beats it. Every round is logged.",
      architectureContent: "prompt.txt → loop.py (mutate) → judge.py (score 0–1) → keep if score > best, else reject → iterate",
      techStack: ["Python", "LLM-as-judge", "Prompt optimization"],
      resultsAndMetrics: "Across 10 rounds on a fintech landing-page prompt, the score climbed 0.10 → 0.80. Three of ten mutations were rejected (duplicates that would not compound), demonstrating the loop maintains the best state without regression. The final prompt added audience definition, hero/pricing/feature sections, hierarchy, a strong CTA, and a rationale requirement.",
      keyTakeaways: [
        "Optimization is bounded by your evaluation function—getting judge.py right matters more than the loop",
        "Rejection is signal, not failure: 3/10 mutations rejected means the system is working",
        "Swap judge.py for DeepEval metrics and loop.py for an LLM and this becomes DSPy—the architecture is the insight",
      ],
      myRole: "Product Manager / Builder",
      roleBullets: [
        "Designed the mutate → score → keep/reject loop and its logging format",
        "Defined the scoring rubric that bounds how good the output can get",
        "Ran 10 optimization rounds and analyzed KEEP/REJECT behavior",
        "Documented lessons on why the eval function is the real constraint",
      ],
      futureImprovements: "Replace the heuristic scorer with grounded task-performance metrics and use LLM-generated mutations to explore the space beyond rule-based edits.",
      evaluation: {
        datasetSize: "10 optimization rounds (1 prompt)",
        method: "Automated mutate-and-score loop with KEEP/REJECT logged per round.",
        primaryMetric: "Prompt quality score (0.0–1.0) and rejection behavior.",
        status: "Validated as an illustrative run; not yet statistically significant (noted in repo).",
      },
    },
    {
      id: "memora",
      title: "Memora",
      status: "Live",
      category: "Shipped Product",
      shortProblem: "We screenshot everything, then never find it—filenames like screenshot_1024.png carry zero searchable context.",
      shortSolution: "A Gemini-powered organizer that categorizes screenshots and lets you search them by their actual content.",
      outcome: "Turns a loose screenshot dump into a searchable gallery you query by meaning—\"AWS invoice,\" \"sushi menu\"—not filenames.",
      githubUrl: "https://github.com/Ruthwik-Data/memora",
      liveUrl: "https://memora-opal-nine.vercel.app/",
      image: "/memora-diagram.svg",
      galleryUrls: ["/memora-diagram.svg", "/memora.webp"],
      overview: [
        "Batches up to 20 screenshots to Gemini 1.5 Flash and gets back structured JSON metadata",
        "Auto-categorizes into Receipts, QR, Food, and Other, and extracts QR data during analysis",
        "Search by content, not filename; privacy-first—analysis is session-based, nothing stored server-side",
      ],
      problem: "Screenshots hold valuable context—receipts, QR codes, inspiration, data highlights—but generic filenames make them opaque to any normal search.",
      whyThisMatters: "Screen-capture is the default 'save' action for modern research. Memora unlocks that trapped knowledge by making it searchable by meaning, and does it without permanently storing your images.",
      usersAndJobs: "Researchers, PMs, and founders who capture visual references and later can't find them.",
      solution: "An AI-native organizer: drop screenshots, and Google Gemini 1.5 Flash returns structured metadata that powers a categorized, content-searchable gallery.",
      architectureContent: "Drop screenshots → batch to Gemini 1.5 Flash (server route) → structured JSON metadata → safeJsonParse → categorized, content-searchable gallery",
      techStack: ["Next.js 14", "Google Gemini 1.5 Flash", "Tailwind CSS 4", "Vercel"],
      resultsAndMetrics: "A deployed, working product. Reliability comes from a safeJsonParse layer that tolerates markdown-wrapped model output, and from choosing Gemini 1.5 Flash to balance vision reasoning against near-instant latency. Batch size is capped at 20 images for API stability. A labeled precision/recall benchmark for categorization accuracy is the honest next step and hasn't been run yet.",
      keyTakeaways: [
        "Content-based image search powered by Gemini vision—no vector DB required",
        "Privacy-first by design: session-based analysis, no server-side image storage",
        "Reliability engineered at the parse layer (safeJsonParse) so model quirks don't break the UI",
      ],
      myRole: "Product Manager / Builder",
      roleBullets: [
        "Framed the 'screenshot hoarding' problem and the search-by-content UX bet",
        "Chose Gemini 1.5 Flash for the vision-reasoning vs. latency trade-off",
        "Designed the batch-to-JSON flow and the safeJsonParse reliability guard",
        "Made privacy a product principle: session-only, no persistent storage",
      ],
      futureImprovements: "Add a labeled set to benchmark categorization accuracy, then optional persistence and richer auto-clustering beyond the four default categories.",
      evaluation: {
        datasetSize: "Not yet benchmarked",
        method: "Qualitative validation via hands-on search on the live app; parse-reliability guarded by safeJsonParse.",
        primaryMetric: "Categorization accuracy and search relevance (formal benchmark planned).",
        status: "Deployed and usable; a labeled categorization benchmark is the honest next step.",
      },
    },
    {
      id: "sugarshield",
      title: "SugarShield",
      status: "Live",
      category: "System Design",
      shortProblem: "Food labels hide sugar under dozens of names—maltodextrin, dextrose, cane juice—and most apps won't tell you how confident they are.",
      shortSolution: "A GPT-4o ingredient scanner with a built-in eval dashboard that deliberately over-warns so it never misses hidden sugar.",
      outcome: "Eval-first product: 0 false negatives and an 87% trigger-match rate, with the evaluation surfaced as a live /eval page.",
      metric: "0 false negatives · 87% trigger match",
      githubUrl: "https://github.com/Ruthwik-Data/sugarshield",
      liveUrl: "https://sugarshield.vercel.app/",
      evalUrl: "https://sugarshield.vercel.app/eval",
      image: "/sugarshield_viz.jpg",
      galleryUrls: ["/sugarshield_viz.jpg", "/sugarshield.webp", "/sugarshield_diagram.jpg"],
      overview: [
        "Made the core PM call: a false negative (missing hidden sugar) is worse than a false positive—so the model over-warns by design",
        "0 false negatives and 87% trigger-match rate across a 15-case ground-truth set (scan, link, upload)",
        "Shipped the evaluation as a product feature: a live /eval dashboard with Strict vs. Lenient modes",
      ],
      problem: "Shoppers can't judge sugar quality at a glance—labels use dozens of names for sugar, and most scanners give a verdict without saying how confident they are or what mistakes they make.",
      whyThisMatters: "For a safety-first product, telling someone a product is safe when it isn't (a false negative) is the dangerous failure. That single judgment—optimize against false negatives—shaped every eval and product decision.",
      usersAndJobs: "Shoppers who want a fast, trustworthy buy/skip signal—and to understand why a product was flagged, not just that it was.",
      solution: "A GPT-4o-based ingredient classifier that returns an explainable buy/skip decision with a confidence level and the triggers that fired, backed by a ground-truth eval set exposed to users at /eval.",
      architectureContent: "Ingredient text (scan / link / upload) → GPT-4o classification → confidence + fired triggers → Strict/Lenient eval modes → explainable PASS / WARN",
      techStack: ["Next.js 14", "React 18", "GPT-4o", "Tailwind CSS", "Ground-truth evalSet.json"],
      resultsAndMetrics: "Evaluated against a 15-case ground-truth evalSet.json spanning scan, link, and upload inputs. Strict mode achieves 0 false negatives (intentional—the riskiest failure mode) and an 87% trigger-match rate. Conservative bias is an explicit, documented product decision: some products (e.g., diet soda, coconut water) are WARN'd on purpose because their sweeteners are nutritionally debated. The tradeoff is exposed to users via Strict vs. Lenient modes rather than hidden.",
      keyTakeaways: [
        "Eval-first: the /eval dashboard is a product feature, not a separate doc",
        "Conservative bias as a deliberate product decision—over-warn, never miss hidden sugar",
        "Failure-mode honesty: 0 false negatives by design, with known limitations surfaced in the UI",
      ],
      myRole: "Product Manager / Builder",
      roleBullets: [
        "Framed the core tradeoff—false negatives are worse than false positives for a safety product",
        "Built the ground-truth evalSet.json (15 cases across scan / link / upload)",
        "Designed Strict vs. Lenient eval modes to make the model's bias transparent",
        "Shipped confidence + trigger transparency and documented known limitations in-product",
      ],
      futureImprovements: "Expand the eval set beyond 15 cases, add OCR camera capture for labels, and tune the strict/lenient boundary from real user feedback.",
      evaluation: {
        datasetSize: "15 labeled cases (scan / link / upload)",
        method: "Ground-truth comparison via evalSet.json, exposed live at /eval in Strict and Lenient modes.",
        primaryMetric: "False negatives (primary) and trigger-match rate.",
        status: "Validated and live—evaluation is a first-class feature at sugarshield.vercel.app/eval.",
      },
    },
    {
      id: "hiring-os-cli",
      title: "Hiring OS CLI",
      status: "Open Source",
      category: "System Design",
      shortProblem: "Job search doesn't scale: ~20–30 min per application, most roles don't match, and auto-apply bots torch your reputation.",
      shortSolution: "A local CLI that discovers 250+ real jobs hourly and auto-applies only to roles that pass 6 mandatory quality gates.",
      outcome: "Applies at scale without unsafe automation—every application must clear a fit, ATS, and no-fabrication gate first.",
      metric: "6 quality gates · 250+ jobs/hr discovered",
      githubUrl: "https://github.com/Ruthwik-Data/hiring-os-cli",
      image: "/hiring-os-diagram.svg",
      galleryUrls: ["/hiring-os-diagram.svg"],
      overview: [
        "Discovers 250+ real jobs hourly from Adzuna plus 7 fallback sources (Greenhouse, Lever, YC, AngelList…)",
        "Gates every job on 6 scored checks before applying—Fit, ATS, Resume Truth, HM Appeal, Recruiter, and application strength",
        "Auto-tailors the resume per role and tracks all submissions locally—no LinkedIn bot abuse",
      ],
      problem: "Founders and PMs face 500+ potential matches but realistically apply to 5–10/week. Existing tools either auto-apply with no quality control (reputation risk) or require 20–30 minutes of manual tailoring per job (throughput problem).",
      whyThisMatters: "The interesting design question isn't 'can you automate applying'—it's 'how do you automate it safely.' Mandatory quality gates are evaluation applied to automation: nothing ships to a recruiter unless it clears an explicit bar, including a Resume Truth gate that blocks fabrication.",
      usersAndJobs: "Technical founders and PMs who want to explore 5–50 roles across many boards without manual busywork or risky bots.",
      solution: "A local CLI orchestrating three workflows—discovery, quality evaluation, and application—run hourly by an Autopilot loop, so applications go out only to roles that pass every gate.",
      architectureContent: "Autopilot (hourly) → discovery across 8 sources → 6 quality gates (Fit ≥80, ATS ≥90, Resume Truth ≥95, HM Appeal ≥85, Recruiter ≥85, SAD ≥80) → per-job resume tailoring → local application tracking",
      techStack: ["TypeScript", "Node CLI", "Adzuna API", "Greenhouse / Lever / YC", "LLM resume tailoring"],
      resultsAndMetrics: "The system discovers 250+ real jobs per hour and evaluates each against 6 scored gates before any application is sent. The Resume Truth gate (≥95%) explicitly blocks fabrication, and ATS (≥90%) enforces keyword/parse quality—turning 'apply at scale' into 'apply at scale, but only when it clears the bar.'",
      keyTakeaways: [
        "Quality gates are evaluation applied to automation—no application ships unless it passes every check",
        "A Resume Truth gate (≥95%) makes 'no fabrication' a hard, enforced constraint, not a hope",
        "Safe automation by design: quality-first throughput instead of reckless auto-apply",
      ],
      myRole: "Product Manager / Builder",
      roleBullets: [
        "Defined the 6 quality gates and their thresholds as the product's safety contract",
        "Designed the discovery → evaluate → apply pipeline and the hourly Autopilot loop",
        "Prioritized reputation safety (no LinkedIn abuse) as a first-class constraint",
        "Built resume tailoring that maximizes keyword overlap while passing the truth gate",
      ],
      futureImprovements: "Add outcome tracking (reply/interview rates per gate threshold) to tune the gates from real results, and expand source coverage.",
      evaluation: {
        datasetSize: "8 job sources · 6 quality gates",
        method: "Per-job scoring against 6 threshold gates before any submission.",
        primaryMetric: "Gate pass-rate and application quality (Fit, ATS, Resume Truth).",
        status: "Working local CLI; outcome-based tuning of gate thresholds is the next step.",
      },
    },
  ],
  aiLabs: [
    {
      name: "Rellos Experiment Hub",
      description: "A collection of AI experiments, product explorations, and learnings from tools and workflows I test. This hub acts as a personal lab notebook where I document experiments, notes, and insights from AI products I explore.",
      takeaway: "A living record of how I explore, evaluate, and learn from emerging AI tools and product patterns.",
      tags: ["Experiment Hub"],
      url: "https://rellos-experiment-hub.lovable.app",
      ctaLabel: "Explore Experiments",
    },
    {
      name: "GitScope",
      description: "An MCP-powered AI agent that scans a GitHub repo and returns a structured decision brief—health, PR quality, and risk signals—in under a minute.",
      takeaway: "Shows how I design agentic workflows: selective context beats full-repo dumps for sharper, cheaper output.",
      tags: ["Agents", "MCP", "Dev Tools"],
      url: "https://github.com/Ruthwik-Data/gitscope",
      ctaLabel: "View on GitHub",
    },
    {
      name: "TokenLeak",
      description: "A local CLI that analyzes LLM usage logs and shows where token budget leaked—expensive models, runaway agent loops, long prompts, and cost spikes.",
      takeaway: "Reflects how I think about unit economics: observability into cost is a first-class product constraint.",
      tags: ["LLMOps", "Cost", "CLI"],
      url: "https://github.com/Ruthwik-Data/tokenleak",
      ctaLabel: "View on GitHub",
    },
  ],
  concepts: [
    {
      title: "MechanicTrust",
      problem: "Auto repair is a high-anxiety, high-information-asymmetry category—drivers can't tell if a quote is fair or a shop is trustworthy.",
      concept: "An AI product case study for a mobile app that diagnoses car issues, shows fair price ranges (not false precision), and trust-ranks shops. Core PM stance: AI should inform, not overclaim.",
      tags: ["Case Study", "AI Product", "Trust & Pricing"],
      url: "https://github.com/Ruthwik-Data/mechanictrust",
    },
    {
      title: "MinuteMind",
      problem: "Journaling stalls because turning raw thoughts into something useful takes effort most people won't spend.",
      concept: "A privacy-first voice journal that turns an entry into a structured reflection—summary, emotional tone, themes, and one next step. Runs fully local (IndexedDB, optional Ollama); nothing leaves the device.",
      tags: ["Prototype", "Privacy-First", "Local LLMs"],
      url: "https://github.com/Ruthwik-Data/Minutemind",
    }
  ],
};

// Blog (/writing)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Writing | Ruthwik Arepelly",
    description: "Articles on Product Management, AI, and Socio-Technological trends.",
    image: identity.logo,
  },
  subtitle: "Product Stories & Insights",
};

// Open Source (/#open-source) — curated contributions to the RAG-evaluation ecosystem
export const openSourceContributions: OpenSourceContribution[] = [
  {
    repo: "confident-ai/deepeval",
    title: "Fix weighted precision score + RetrievedContextData source grouping",
    ref: "PR #2743",
    status: "Merged",
    url: "https://github.com/confident-ai/deepeval/pull/2743",
    summary: "Fixed a metric bug I first reported (#2594): ContextualPrecision over-penalized overlapping chunks in financial-document RAG. Merged into DeepEval.",
  },
  {
    repo: "run-llama/llama_index",
    title: "StructuralRoleNodeParser for heterogeneous RAG",
    ref: "PR #22054",
    status: "Open PR",
    url: "https://github.com/run-llama/llama_index/pull/22054",
    summary: "Annotates chunks with a structural_role so retrieval can route across mixed document types (tables, footnotes, prose) in filings.",
  },
  {
    repo: "mastra-ai/mastra",
    title: "RetrievalHopQualityScorer for multi-step RAG agents",
    ref: "PR #18258",
    status: "Open PR",
    url: "https://github.com/mastra-ai/mastra/pull/18258",
    summary: "Adds a scorer that measures per-hop retrieval quality in multi-step agent workflows, not just final-answer correctness.",
  },
  {
    repo: "Arize-ai/phoenix",
    title: "Multi-hop RAG context-quality drop detection example",
    ref: "PR #13407",
    status: "Open PR",
    url: "https://github.com/Arize-ai/phoenix/pull/13407",
    summary: "A worked example for surfacing where context quality degrades across a multi-hop retrieval chain in Phoenix observability.",
  },
  {
    repo: "langchain-ai/langsmith-sdk",
    title: "FeedbackLoop utility to automate the eval-to-action loop",
    ref: "PR #2929",
    status: "Open PR",
    url: "https://github.com/langchain-ai/langsmith-sdk/pull/2929",
    summary: "Closes the trace-to-action gap: programmatically turn eval feedback into changes without manual UI steps.",
  },
  {
    repo: "confident-ai/deepeval",
    title: "AgentLoopDetectionMetric for infinite loops & cyclical patterns",
    ref: "PR #2819",
    status: "Open PR",
    url: "https://github.com/confident-ai/deepeval/pull/2819",
    summary: "A metric that flags agents stuck in infinite loops or repeating cycles — a common, expensive failure mode.",
  },
  {
    repo: "mem0ai/memory-benchmarks",
    title: "Four mem0 failure-mode regression scenarios",
    ref: "PR #12",
    status: "Open PR",
    url: "https://github.com/mem0ai/memory-benchmarks/pull/12",
    summary: "Regression scenarios that pin down how agent memory fails — staleness, wrong recall, and importance weighting.",
  },
];

// Hiring status — shown as the "Open to Work" band near the top.
// EDIT the empty fields to make them appear; empty ones stay hidden (no placeholder ever renders).
export const hiringStatus = {
  open: true,
  headline: "Open to AI Product Manager roles",
  focus: "RAG · agents · eval-first LLM products — B2B SaaS & fintech",
  availability: "Available now",
  location: "Tampa, FL · Open to remote",
  resumeUrl: "/docs/ruthwik-arepelly-resume.pdf",
};

// Education — add entries to make the section appear (renders nothing while empty).
export const education: { degree: string; school: string; date?: string; detail?: string }[] = [
  { degree: "MS, Business Analytics", school: "Trine University" },
  { degree: "BS, Computer Science", school: "SR University" },
];

// Certifications — rendered as pills under Education (hidden while empty).
export const certifications: string[] = [
  "Project Management Professional (PMP), PMBOK7",
  "IBM Data Analytics (Coursera)",
];

export const skillCategories = [
  {
    title: "AI Product & Evals",
    skills: ["LLM Evaluation", "Guardrails & Quality Gates", "RAG Eval Metrics", "LLM-as-Judge", "Ground-Truth Datasets", "Hallucination Detection", "Prompt Engineering"],
  },
  {
    title: "AI Systems",
    skills: ["RAG Pipelines", "Agentic Workflows", "GPT-4o & Gemini Vision", "Semantic Search", "MCP Agents", "Local LLMs (Ollama)", "Vector Search (pgvector)"],
  },
  {
    title: "Product Strategy",
    skills: ["0→1 Product", "B2B SaaS Strategy", "PMF Discovery", "Unit Economics", "Experimentation", "User Research"],
  },
  {
    title: "Stack & Tooling",
    skills: ["TypeScript", "Python", "Next.js", "Supabase / pgvector", "DeepEval · Phoenix · LangSmith", "Vercel / GitHub Actions"],
  },
];
