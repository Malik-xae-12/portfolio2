"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Briefcase,
  GraduationCap,
  Sparkles,
  Code2,
  Database,
  Cloud,
  CheckCircle2,
  Calendar,
  ExternalLink,
} from 'lucide-react';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToContact: () => void;
}

const EXPERIENCES = [
  {
    period: "2023 - PRESENT",
    role: "Lead Cloud & Data Architect",
    company: "Freelance & Enterprise Consulting",
    location: "Global / Remote",
    description:
      "Directing end-to-end cloud data architectures, Microsoft Fabric lakehouse migrations, and scalable enterprise full-stack platforms.",
    highlights: [
      "Engineered multi-terabyte Lakehouse solutions on Microsoft Fabric with OneLake, Delta Lake, and Direct Lake Power BI semantic models.",
      "Spearheaded automated CI/CD deployment pipelines using Azure DevOps, Terraform IaC, and Docker containers.",
      "Consulted for high-growth tech startups on reducing data warehouse compute costs by up to 38% using PySpark optimization.",
    ],
    skills: ["Microsoft Fabric", "Azure Synapse", "Databricks", "Terraform", "PySpark", "CI/CD"],
  },
  {
    period: "2021 - 2023",
    role: "Senior Data & Full-Stack Engineer",
    company: "Cloud Systems & Solutions",
    location: "Enterprise Scale",
    description:
      "Designed and deployed mission-critical data pipelines and customer-facing web applications with microservices architecture.",
    highlights: [
      "Architected reactive full-stack dashboards using React, Next.js, and FastAPI handling real-time analytical queries.",
      "Built resilient streaming and batch ETL ingestion jobs across Azure Event Hubs, ADF, and Databricks clusters.",
      "Established comprehensive SonarQube code review standards, unit test coverage (>85%), and automated security scans.",
    ],
    skills: ["Python", "FastAPI", "React", "Azure Data Factory", "Docker", "PostgreSQL"],
  },
  {
    period: "2019 - 2021",
    role: "Cloud DevOps & Backend Specialist",
    company: "Software Innovations Inc.",
    location: "Hybrid",
    description:
      "Managed multi-cloud Azure infrastructure, automated deployment workflows, and backend API performance optimization.",
    highlights: [
      "Provisioned highly available Kubernetes (AKS) clusters and managed secrets via Azure Key Vault.",
      "Tuned database queries and Redis caching layers to reduce API endpoint p99 latency from 680ms to 95ms.",
      "Created technical documentation, runbooks, and developer enablement workshops for engineering teams.",
    ],
    skills: ["Azure Kubernetes", "Redis", "Node.js", "REST APIs", "Git", "Security Auditing"],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Premier Technical University",
    year: "Graduated with First Class Honors",
    highlights: [
      "Core coursework in Distributed Systems, Cloud Architecture, Advanced Data Structures, and Database Management.",
      "Published capstone project on Distributed Data Processing with Apache Spark and containerized microservices.",
      "Recognized with Gold Award for Technical Innovation in campus hackathons.",
    ],
  },
  {
    degree: "Advanced Cloud & Data Specializations",
    institution: "Microsoft, Databricks & Google Cloud Official Academies",
    year: "Continuous Professional Excellence",
    highlights: [
      "Microsoft Certified: Fabric Data Engineer (DP-700 & DP-600)",
      "Microsoft Certified: Azure DevOps Engineer Expert (AZ-400)",
      "Databricks & Apache Spark Certified Associate",
    ],
  },
];

const SKILL_CATEGORIES = [
  {
    name: "Cloud & Data Engineering",
    icon: Database,
    color: "#059669",
    skills: [
      { name: "Microsoft Fabric", level: "Expert" },
      { name: "Azure Synapse", level: "Expert" },
      { name: "Databricks / PySpark", level: "Expert" },
      { name: "OneLake & Delta Lake", level: "Advanced" },
      { name: "Azure Data Factory (ADF)", level: "Expert" },
      { name: "SQL & Performance Indexing", level: "Expert" },
      { name: "Power BI / DAX (PL-300)", level: "Advanced" },
      { name: "Snowflake & Data Modeling", level: "Proficient" },
    ],
  },
  {
    name: "Full-Stack Web Development",
    icon: Code2,
    color: "#DC2626",
    skills: [
      { name: "Python / FastAPI / Flask", level: "Expert" },
      { name: "TypeScript / JavaScript", level: "Expert" },
      { name: "React / Next.js", level: "Expert" },
      { name: "Tailwind CSS & shadcn/ui", level: "Expert" },
      { name: "Node.js / Express", level: "Advanced" },
      { name: "RESTful & GraphQL APIs", level: "Expert" },
      { name: "PostgreSQL & MongoDB", level: "Advanced" },
      { name: "GSAP & Framer Motion", level: "Advanced" },
    ],
  },
  {
    name: "DevOps, Cloud & Architecture",
    icon: Cloud,
    color: "#0284C7",
    skills: [
      { name: "Azure Cloud Solutions (AZ-305)", level: "Expert" },
      { name: "Azure DevOps & GitHub Actions", level: "Expert" },
      { name: "Terraform & IaC", level: "Advanced" },
      { name: "Docker & Containerization", level: "Expert" },
      { name: "Kubernetes (AKS)", level: "Proficient" },
      { name: "Microservices Architecture", level: "Expert" },
      { name: "CI/CD Automated Pipelines", level: "Expert" },
      { name: "SonarQube & Security Audits", level: "Advanced" },
    ],
  },
];

export const ExperienceModal = ({
  isOpen,
  onClose,
  onScrollToContact,
}: ExperienceModalProps) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Side Drawer Content following light editorial theme */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="relative z-10 w-full max-w-4xl h-full bg-[#D9DDE0] text-[#0A0A0A] overflow-y-auto border-l border-black/10 shadow-2xl flex flex-col justify-between"
          >
            {/* Header with Close Action */}
            <div className="sticky top-0 z-20 bg-[#D9DDE0]/95 backdrop-blur-md px-6 sm:px-10 py-6 border-b border-black/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#777777] uppercase font-bold">
                  BIOGRAPHY &amp; CAREER PATH
                </span>
                <h3 className="font-condensed font-black text-2xl sm:text-3xl tracking-tight uppercase mt-0.5 text-[#0A0A0A]">
                  ABOUT ABDUL MALIK
                </h3>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 text-black flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 sm:px-10 py-8 space-y-14">
              {/* 1. Deep Bio Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                  <Sparkles className="w-4 h-4" />
                  <span>OVERVIEW &amp; PHILOSOPHY</span>
                </div>

                <h4 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A0A0A] leading-tight">
                  Architecting resilient data pipelines, scalable cloud foundations, and intuitive digital experiences.
                </h4>

                <p className="text-sm sm:text-base font-sans text-[#555555] leading-relaxed">
                  I am a passionate Cloud &amp; Data Engineer with extensive experience designing modern data platforms, Microsoft Fabric ecosystems, and distributed cloud systems. My work bridges the gap between deep infrastructure engineering—optimizing Lakehouses, PySpark workloads, and CI/CD pipelines—and high-performance application frontends.
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-black/10 shadow-sm space-y-1">
                    <span className="font-condensed font-black text-3xl sm:text-4xl text-[#0A0A0A]">8+</span>
                    <p className="text-xs font-mono text-[#777777]">Years Cloud Experience</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-black/10 shadow-sm space-y-1">
                    <span className="font-condensed font-black text-3xl sm:text-4xl text-emerald-600">6+</span>
                    <p className="text-xs font-mono text-[#777777]">Microsoft Certifications</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-black/10 shadow-sm space-y-1">
                    <span className="font-condensed font-black text-3xl sm:text-4xl text-sky-600">100%</span>
                    <p className="text-xs font-mono text-[#777777]">Project Delivery Rate</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-black/10 shadow-sm space-y-1">
                    <span className="font-condensed font-black text-3xl sm:text-4xl text-amber-600">TB+</span>
                    <p className="text-xs font-mono text-[#777777]">Data Lake Processed</p>
                  </div>
                </div>
              </div>

              {/* 2. Company Experience Vertical Timeline */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-700 border-b border-black/10 pb-3">
                  <Briefcase className="w-4 h-4" />
                  <span>COMPANY &amp; PROFESSIONAL EXPERIENCE</span>
                </div>

                <div className="relative pl-6 sm:pl-8 space-y-10 border-l-2 border-black/15">
                  {EXPERIENCES.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm space-y-4"
                    >
                      {/* Timeline Dot */}
                      <span className="absolute -left-[32px] sm:-left-[41px] top-7 w-3.5 h-3.5 rounded-full bg-black border-4 border-white ring-2 ring-black/20" />

                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div>
                          <h5 className="font-sans font-bold text-lg sm:text-xl text-[#0A0A0A]">
                            {exp.role}
                          </h5>
                          <p className="text-xs sm:text-sm font-sans text-emerald-700 font-semibold">
                            {exp.company} &bull; <span className="text-[#666666] font-normal">{exp.location}</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#777777] mt-1 sm:mt-0">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 pt-1">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#444444] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-black/5 border border-black/10 text-[11px] font-mono font-medium text-[#222222]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 3. Education Experience */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-700 border-b border-black/10 pb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>ACADEMIC FOUNDATION &amp; EDUCATION</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {EDUCATION.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-6 rounded-3xl bg-white border border-black/10 shadow-sm space-y-4"
                    >
                      <h5 className="font-sans font-bold text-base sm:text-lg text-[#0A0A0A]">
                        {edu.degree}
                      </h5>
                      <div className="text-xs font-mono text-[#666666] space-y-0.5">
                        <p className="text-purple-700 font-semibold">{edu.institution}</p>
                        <p>{edu.year}</p>
                      </div>
                      <ul className="space-y-2 pt-2 border-t border-black/5">
                        {edu.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-[#555555]">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 4. Categorized Skills Matrix */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 border-b border-black/10 pb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>SPECIALIZED SKILLS &amp; PROFICIENCY MATRIX</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {SKILL_CATEGORIES.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                      <div
                        key={idx}
                        className="p-6 rounded-3xl bg-white border border-black/10 shadow-sm space-y-4"
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                            style={{ backgroundColor: cat.color }}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <h5 className="font-sans font-bold text-sm text-[#0A0A0A]">
                            {cat.name}
                          </h5>
                        </div>

                        <div className="space-y-2.5 pt-2">
                          {cat.skills.map((skill, sIdx) => (
                            <div
                              key={sIdx}
                              className="flex items-center justify-between text-xs font-sans py-1 border-b border-black/5 last:border-0"
                            >
                              <span className="text-[#333333] font-medium">{skill.name}</span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 text-black font-semibold border border-black/5">
                                {skill.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sticky Bottom Call to Action */}
            <div className="sticky bottom-0 bg-[#D9DDE0]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-xs font-mono text-[#777777] font-bold">READY TO COLLABORATE?</p>
                <p className="text-sm font-sans font-bold text-[#0A0A0A]">Let&apos;s build something impactful together.</p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onScrollToContact();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-sans font-bold text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors cursor-pointer shadow-lg"
              >
                <span>Inquire About A Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
