export interface Project {
  slug: string;
  name: string;
  category: string;
  url: string;
  tagline: string;
  description: string;
  client: string;
  clientBackground: string;
  challenge: string;
  solution: string;
  results: string[];
  skills: string[];
  stack: string[];
  images: string[];   // filenames under /public/portfolio/<slug>/
  accentColor: string;
  index: string;
}

export const projects: Project[] = [
  {
    slug: "get-retirement-ready",
    name: "Get Retirement Ready",
    category: "Revenue Infrastructure",
    url: "https://www.getretirementready.com/",
    tagline: "An end-to-end revenue funnel — from content to conversion with zero manual intervention.",
    description: "Designed and built an automated revenue system that qualifies prospects, scores intent, and routes them to the right offer — all without a single manual follow-up.",
    client: "Get Retirement Ready",
    clientBackground: "A financial education brand helping pre-retirees navigate the transition out of work. The team had strong content but no scalable system to convert that audience into paying clients.",
    challenge: "Leads were coming in through content but dropping off before converting. The team was manually following up with every prospect, creating bottlenecks and inconsistent results.",
    solution: "Built a full-funnel system using ScoreApp for intent scoring, Thinkific for course delivery, ThriveCart for payment processing, and Zapier to connect every piece. Leads now move through the funnel automatically based on their score — no manual touchpoint required.",
    results: [
      "Lead-to-enrolment conversion improved significantly after removing manual follow-up bottlenecks",
      "Client admin workload reduced by ~40% through automation",
      "Consistent purchase experience across all lead segments",
    ],
    skills: ["Funnel Architecture", "Automation Design", "CRM Integration", "Payment Systems", "Product Launch"],
    stack: ["Thinkific", "Zapier", "ThriveCart", "ScoreApp", "Mailchimp"],
    images: ["1.jpg", "2.jpg", "3.jpg"],
    accentColor: "#ffbba6",
    index: "01",
  },
  {
    slug: "shinar-wellness",
    name: "Shinar Wellness Beauty",
    category: "E-Commerce Architecture",
    url: "https://www.shinarwellnessbeauty.com/",
    tagline: "High-end hair and body wellness e-commerce built for the US market.",
    description: "Designed and developed a complete Shopify store for a premium wellness brand — from product taxonomy to post-purchase flow.",
    client: "Shinar Wellness Beauty",
    clientBackground: "A USA-founded hair and body wellness brand expanding into the US retail market. High-quality products but no digital presence capable of reflecting the premium positioning.",
    challenge: "The brand needed a store that could compete with established US wellness brands — one that felt premium, loaded fast, and converted visitors who had no prior brand awareness.",
    solution: "Built a custom Shopify store with a structured product taxonomy, streamlined checkout logic, upsell flow, and post-purchase sequence. Every UX decision was made to reduce friction for a cold US audience.",
    results: [
      "Full e-commerce infrastructure live and transacting in the US market",
      "Product pages structured to support SEO and paid traffic from launch",
      "Post-purchase flow built to drive repeat purchase from first-time buyers",
    ],
    skills: ["E-Commerce Architecture", "Shopify Development", "UX Design", "Conversion Optimisation", "Product Taxonomy"],
    stack: ["Shopify", "Custom CSS", "Liquid"],
    images: ["1.jpg", "2.jpg", "3.jpg"],
    accentColor: "#ff8c6b",
    index: "02",
  },
  {
    slug: "lobster-beach-club",
    name: "Lobster Beach Club",
    category: "Hospitality Web Presence",
    url: "https://lobsterbeachclub.com/",
    tagline: "A brand-led digital presence for a boutique beach resort in Nigeria.",
    description: "Built a WordPress site that matched the physical luxury of the resort — every design decision built to convert browsers into reservations.",
    client: "Lobster Beach Club",
    clientBackground: "A boutique beach resort on the Nigerian coast offering a premium hospitality experience. The existing web presence didn't match the quality of the physical product.",
    challenge: "Visitors couldn't get an accurate sense of the experience from the website — leading to low enquiry rates and friction in the booking journey.",
    solution: "Rebuilt the site with brand-first design principles: immersive photography layout, clear service hierarchy, and a streamlined enquiry flow. Every page was written and designed to evoke the atmosphere of the resort.",
    results: [
      "Website rebuilt to match brand positioning and physical experience",
      "Clear enquiry pathway reduced friction in the booking process",
      "Content structure built to support future direct booking integration",
    ],
    skills: ["WordPress Development", "Brand-Led Design", "UX Writing", "Responsive Design", "Performance Optimisation"],
    stack: ["WordPress", "Custom CSS", "PHP"],
    images: ["1.jpg", "2.jpg", "3.jpg"],
    accentColor: "#ffbba6",
    index: "03",
  },
  {
    slug: "trusted-advisor-os",
    name: "Trusted Advisor OS",
    category: "Knowledge Business Infrastructure",
    url: "https://www.trustedadvisor.systems/courses/The-Trusted-Advisor-OS",
    tagline: "A complete digital sales infrastructure for a high-ticket knowledge business.",
    description: "Designed the entire operational layer — course architecture, payment logic, community structure, and the automation stack that keeps it running.",
    client: "Trusted Advisor Systems",
    clientBackground: "A consulting and coaching business selling a high-ticket programme to professional advisors. Strong methodology but no scalable digital infrastructure to deliver and sell it.",
    challenge: "Sales were happening manually, delivery was inconsistent, and the team had no way to scale the programme without adding headcount.",
    solution: "Architected the full digital layer on Thinkific: programme structure, pricing tiers, community access logic, and automated onboarding. The system now runs without manual coordination for each new client.",
    results: [
      "Scalable programme delivery infrastructure operational from launch",
      "Onboarding fully automated — no manual handoff required",
      "Platform built to support multiple cohorts simultaneously",
    ],
    skills: ["Product Architecture", "Platform Configuration", "Automation Design", "Sales Funnel", "Onboarding Systems"],
    stack: ["Thinkific", "Zapier", "Stripe"],
    images: ["1.jpg", "2.jpg", "3.jpg"],
    accentColor: "#ff8c6b",
    index: "04",
  },
  {
    slug: "armada-university",
    name: "Armada University",
    category: "Platform Migration",
    url: "https://armada-university.thinkific.com/",
    tagline: "Full course library migration to Thinkific — zero data loss, improved learner experience.",
    description: "Migrated an entire course catalogue to Thinkific, restructuring the curriculum and reconfiguring the student journey from the ground up.",
    client: "Armada University",
    clientBackground: "An online education platform with an established course library that had outgrown its original platform. The team needed a migration that preserved learner data while improving the student experience.",
    challenge: "Platform migrations at scale carry serious risk — data loss, broken enrolments, and disrupted learner journeys. The team had no internal technical resource to manage the transition.",
    solution: "Planned and executed a structured migration: audited all existing content, rebuilt the course taxonomy, migrated learner data, and reconfigured the student dashboard. Zero downtime, zero data loss.",
    results: [
      "Complete course library migrated with all learner data intact",
      "Improved student experience and navigation on new platform",
      "Migration completed within agreed timeline with zero enrolment disruption",
    ],
    skills: ["Platform Migration", "Data Architecture", "LMS Configuration", "Project Management", "QA Testing"],
    stack: ["Thinkific", "CSV Data Migration", "Zapier"],
    images: ["1.jpg", "2.jpg", "3.jpg"],
    accentColor: "#ffbba6",
    index: "05",
  },
  {
    slug: "allison-kimmey",
    name: "Allison Kimmey — Empowered Girls",
    category: "Author Brand & Book Launch",
    url: "https://allison-kimmey-2.showit.site/",
    tagline: "A Showit site for a bestselling author's book launch — warm, inclusive, and conversion-focused.",
    description: "Designed a Showit site for bestselling author Allison Kimmey's Empowered Girls book launch. A site I loved building — the design brief was to make every visitor feel seen.",
    client: "Allison Kimmey",
    clientBackground: "A New York Times bestselling author and body-positive advocate launching a book for young girls. The campaign needed a digital home that reflected the book's inclusive, empowering message.",
    challenge: "The site needed to work for two distinct audiences simultaneously — parents making a purchasing decision, and young girls connecting with the message. Most book sites fail one of them.",
    solution: "Designed a Showit site with a dual-audience content hierarchy. Visual storytelling led the experience, with the purchase CTA positioned after emotional connection was made, not before.",
    results: [
      "Dual-audience design successfully serving parents and young readers",
      "Brand-aligned visual language built around the book's message",
      "Designed for launch campaign traffic with clear conversion flow",
    ],
    skills: ["Showit Development", "UX Design", "Copywriting", "Visual Design", "Conversion Architecture"],
    stack: ["Showit", "Custom CSS"],
    images: ["1.jpg", "2.jpg", "3.jpg"],
    accentColor: "#ffbba6",
    index: "06",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
