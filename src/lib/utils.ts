import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface GlassCardItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  color: string;
  skills: string[];
  rate: string;
  badge: string;
  category: string;
  image: string;
  whatWeCover: string[];
}

export const cardData: GlassCardItem[] = [
  {
    id: 1,
    title: "DevOps & Cloud Infrastructure",
    tagline: "CI/CD Automation & Terraform IaC",
    description:
      "End-to-end automated multi-stage CI/CD pipelines, Terraform infrastructure as code, Kubernetes cluster orchestration, and zero-downtime blue/green deployments on Azure.",
    color: "rgba(69, 183, 209, 0.8)",
    skills: ["Azure DevOps (YAML)", "Terraform & Bicep", "Docker & Kubernetes (AKS)", "SonarQube & Security", "Telemetry & App Insights"],
    rate: "$30 / hour",
    badge: "AZ-400 Certified",
    category: "DEVOPS",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=900&q=80",
    whatWeCover: [
      "Multi-stage automated CI/CD pipelines (YAML)",
      "Infrastructure as Code with Terraform & Bicep",
      "Container deployment on Kubernetes (AKS) & Docker",
      "Git branch policies, code quality gates & SonarQube",
      "Zero-downtime releases & real-time telemetry",
    ],
  },
  {
    id: 2,
    title: "Microsoft Fabric & Lakehouse",
    tagline: "OneLake, Delta Lake & PySpark Workloads",
    description:
      "Unified enterprise analytics architecture leveraging Microsoft Fabric OneLake, Delta Lakehouse structures, PySpark distributed jobs, and seamless Synapse data pipeline migrations.",
    color: "rgba(249, 199, 79, 0.8)",
    skills: ["Microsoft Fabric (DP-700)", "Delta Lake Architecture", "PySpark Distributed Jobs", "Azure Data Factory (ADF)", "Direct Lake Semantic Models"],
    rate: "$35 / hour",
    badge: "DP-700 & DP-600 Certified",
    category: "MICROSOFT FABRIC",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    whatWeCover: [
      "OneLake lakehouse architecture & Medallion design (Bronze/Silver/Gold)",
      "Delta Lake table optimization & distributed PySpark workloads",
      "Azure Data Factory (ADF) & Synapse pipeline migration",
      "Direct Lake Power BI semantic models with zero latency",
      "Compute cost governance & serverless capacity tuning",
    ],
  },
  {
    id: 3,
    title: "Power BI & Enterprise Analytics",
    tagline: "Semantic Modeling & Direct Lake Dashboards",
    description:
      "High-impact enterprise reporting with complex DAX measures, star schema dimensional modeling, Direct Lake mode over Fabric OneLake, and real-time executive KPI scorecards.",
    color: "rgba(160, 108, 213, 0.8)",
    skills: ["Power BI Service & Desktop", "Advanced DAX Measures", "Direct Lake Semantic Models", "Dataflows Gen2", "Executive KPI Scorecards"],
    rate: "$25 / hour",
    badge: "PL-300 Certified",
    category: "POWER BI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    whatWeCover: [
      "Star schema & dimensional data modeling",
      "Advanced DAX calculations, KPIs & time-intelligence",
      "Direct Lake mode over Microsoft Fabric OneLake",
      "Automated scheduled refresh & Dataflows Gen2",
      "Role-Based Row-Level Security (RLS) implementation",
    ],
  },
  {
    id: 4,
    title: "Full-Stack Web Development",
    tagline: "React, Next.js, TypeScript & Python APIs",
    description:
      "Engineering responsive, high-performance web applications and analytics platforms using React 19, Next.js, Python FastAPI backends, and robust PostgreSQL/NoSQL data layers.",
    color: "rgba(255, 107, 107, 0.8)",
    skills: ["React 19 & Next.js (SSR)", "TypeScript & Tailwind CSS", "FastAPI & Python AsyncIO", "PostgreSQL & Cosmos DB", "RESTful & GraphQL APIs"],
    rate: "$25 / hour",
    badge: "Enterprise Web Stack",
    category: "WEB DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    whatWeCover: [
      "Custom responsive web applications with React 19 & Next.js",
      "High-throughput RESTful & asynchronous APIs with FastAPI / Node",
      "Relational & NoSQL database architecture (PostgreSQL, MongoDB)",
      "Secure OAuth2, JWT & Entra ID user authentication",
      "State management, caching layers & sub-second response times",
    ],
  },
  {
    id: 5,
    title: "Web Designing & UI/UX Experience",
    tagline: "Editorial Luxury Design & GSAP Animations",
    description:
      "Crafting bespoke, award-winning visual experiences with dark luxury aesthetics, micro-interactions, container queries, fluid typography, and pixel-perfect design systems.",
    color: "rgba(78, 205, 196, 0.8)",
    skills: ["Figma to Production Code", "GSAP & Framer Motion", "Design Systems (shadcn/ui)", "Kinetic Typography", "Responsive Layouts"],
    rate: "$20 / hour",
    badge: "Award-Grade Aesthetic",
    category: "WEB DESIGNING",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    whatWeCover: [
      "Modern editorial UI design & interactive prototypes in Figma",
      "Bespoke component engineering using Tailwind CSS & shadcn/ui",
      "Advanced GSAP ScrollTrigger & Framer Motion micro-interactions",
      "Mobile-first responsive layouts with container queries (cqw)",
      "Core Web Vitals optimization & 95+ Google Lighthouse scores",
    ],
  },
];
