"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Cpu,
  Terminal,
  Layers,
  Code,
  Zap,
  Cloud,
  Database,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { StackedCards } from '@/components/ui/glass-cards';

const ALL_SERVICES = [
  {
    id: 'leadership',
    title: 'Technical Leadership & Architecture',
    price: '$35/hr',
    icon: Cpu,
    color: '#4ECDC4',
    description:
      'Leading development teams, conducting code reviews, and ensuring efficient collaboration with high coding standards.',
    features: [
      'System design & enterprise scalability roadmap',
      'Architecture planning & cloud migrations',
      'Engineering best practices & code quality gates',
      'Team workflow optimization & mentorship',
      'Comprehensive technical documentation & RFCs',
    ],
  },
  {
    id: 'fabric-data',
    title: 'Microsoft Fabric & Data Engineering',
    price: '$35/hr',
    icon: Database,
    color: '#F9C74F',
    description:
      'Designing and migrating enterprise data platforms to Microsoft Fabric, OneLake, and Delta Lakehouse architectures.',
    features: [
      'Microsoft Fabric OneLake lakehouse architecture',
      'Delta Lake table optimization & PySpark jobs',
      'Direct Lake Power BI semantic models',
      'Azure Data Factory & Synapse pipeline migration',
      'Cost reduction through serverless compute tuning',
    ],
  },
  {
    id: 'azure-devops',
    title: 'Cloud Infrastructure & Azure DevOps',
    price: '$30/hr',
    icon: Layers,
    color: '#45B7D1',
    description:
      'End-to-end DevOps automation using Azure DevOps for continuous integration, IaC, and seamless zero-downtime deployments.',
    features: [
      'Multi-stage CI/CD pipelines (YAML & GitHub Actions)',
      'Infrastructure as Code (Terraform & ARM/Bicep)',
      'Automated testing & SonarQube quality gates',
      'Git repository branch policies & environment locks',
      'Real-time observability, App Insights & telemetry',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Application Development',
    price: '$25/hr',
    icon: Code,
    color: '#FF6B6B',
    description:
      'Building performant, accessible web applications and dashboards using React, Next.js, and TypeScript with modern styling.',
    features: [
      'Responsive React / Next.js application architecture',
      'Interactive Framer Motion & Tailwind animations',
      'State management (Zustand, TanStack Query, Redux)',
      'Accessible UI with shadcn/ui & Radix primitives',
      'Edge deployment & server-side rendering (SSR)',
    ],
  },
  {
    id: 'python-backend',
    title: 'Python & Backend Engineering',
    price: '$25/hr',
    icon: Terminal,
    color: '#A06CD5',
    description:
      'Backend development, scripting, and automation using Python (FastAPI, Flask) for high-performance distributed applications.',
    features: [
      'High-throughput RESTful & asynchronous APIs',
      'Data processing, analytics & ETL pipelines',
      'Database integration (PostgreSQL, MongoDB, Redis)',
      'Background task queues (Celery, Redis Queue)',
      'Containerized deployment with Docker & Kubernetes',
    ],
  },
  {
    id: 'azure-cloud',
    title: 'Microsoft Azure Cloud Solutions',
    price: '$30/hr',
    icon: Cloud,
    color: '#45B7D1',
    description:
      'Architecture design, cost governance, and security implementation for enterprise cloud infrastructures.',
    features: [
      'Azure App Services, Container Apps & Functions',
      'Cosmos DB, Azure SQL & Blob Storage provisioning',
      'Entra ID (Azure AD) authentication & RBAC security',
      'Virtual Network (VNet) peering & private endpoints',
      'Azure Key Vault secret & certificate management',
    ],
  },
  {
    id: 'performance',
    title: 'Performance & Core Web Vitals',
    price: '$15/hr',
    icon: Zap,
    color: '#F9C74F',
    description:
      'Analyzing and optimizing web apps and backend services to achieve sub-second load times and 95+ Lighthouse scores.',
    features: [
      'Core Web Vitals auditing (LCP, FID/INP, CLS)',
      'Database indexing & query execution plan tuning',
      'Asset optimization, tree-shaking & code splitting',
      'HTTP caching headers & CDN edge distribution',
      'Memory leak profiling & bundle size reduction',
    ],
  },
  {
    id: 'code-review',
    title: 'Code Review & Security Audits',
    price: '$15/hr',
    icon: CheckCircle2,
    color: '#4ECDC4',
    description:
      'Thorough peer reviews, vulnerability assessments, and refactoring recommendations to keep codebases clean and secure.',
    features: [
      'Static code analysis & SonarQube rules enforcement',
      'OWASP Top 10 security vulnerability checks',
      'Clean Code, SOLID & Design Pattern refactoring',
      'Automated linting & formatting configs (ESLint, Oxlint)',
      'Comprehensive actionable code review reports',
    ],
  },
];

export const ServicesSection = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  // Lock body scroll when catalog drawer is open
  useEffect(() => {
    if (isCatalogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCatalogOpen]);

  const handleSelectService = (_serviceTitle: string) => {
    setIsCatalogOpen(false);
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Stacking Glass Cards with GSAP ScrollTrigger (DevOps, Fabric, Power BI, Web Dev, Web Design) */}
      <StackedCards
        onExploreServices={() => setIsCatalogOpen(true)}
        onInquireService={handleSelectService}
      />

      {/* 2. Full Services Catalog Modal Drawer */}
      <AnimatePresence>
        {isCatalogOpen && (
          <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsCatalogOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="relative z-10 w-full max-w-5xl h-full bg-[#D9DDE0] text-[#0A0A0A] overflow-y-auto shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="sticky top-0 z-20 bg-[#D9DDE0]/95 backdrop-blur-md px-6 sm:px-10 py-6 border-b border-black/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase">
                    FREELANCE CATALOG &bull; 8 SPECIALIZATIONS
                  </span>
                  <h3 className="font-condensed font-black text-2xl sm:text-3xl tracking-tight uppercase mt-0.5">
                    ALL FREELANCE SERVICES
                  </h3>
                </div>

                <button
                  onClick={() => setIsCatalogOpen(false)}
                  className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 text-black flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Service Cards Grid */}
              <div className="px-6 sm:px-10 py-8 space-y-8">
                <div className="flex items-center gap-2 text-xs font-mono text-[#555555]">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Available on hourly consulting or fixed-scope sprint contracts</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ALL_SERVICES.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.id}
                        className="bg-white rounded-3xl p-7 border border-black/10 shadow-sm flex flex-col justify-between space-y-6 group hover:shadow-md transition-shadow"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                              style={{ backgroundColor: service.color }}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="px-3.5 py-1 rounded-full bg-black/5 text-xs font-mono font-bold text-[#0A0A0A]">
                              {service.price}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-sans font-bold text-lg text-[#0A0A0A]">
                              {service.title}
                            </h4>
                            <p className="mt-1.5 text-xs sm:text-sm font-sans text-[#666666] leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          <div className="space-y-2 pt-2 border-t border-black/5">
                            {service.features.map((feature, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-start gap-2 text-xs text-[#444444]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => handleSelectService(service.title)}
                            className="text-xs font-sans font-bold tracking-wider uppercase text-[#0A0A0A] group-hover:underline flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>Inquire About This Service</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>
                          <span className="text-[10px] font-mono text-[#888888]">
                            0{idx + 1} / 08
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="sticky bottom-0 bg-[#D9DDE0]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-t border-black/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#666666]">
                  Need a custom scope or technical advisory?
                </span>
                <button
                  onClick={() => {
                    setIsCatalogOpen(false);
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-black text-white font-sans font-bold text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Start Project Inquiry
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
