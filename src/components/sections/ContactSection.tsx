import { useState } from 'react';
import { Mail, Send, Check, Calendar, Briefcase, Layers, Smartphone, Shirt, Home } from 'lucide-react';
import { FluidDropdown, type Category } from '@/components/ui/fluid-dropdown';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const serviceCategories: Category[] = [
  { id: "all", label: "Select Service / All", icon: Layers, color: "#A06CD5" },
  { id: "arch", label: "Technical Leadership & Architecture", icon: Briefcase, color: "#4ECDC4" },
  { id: "cloud", label: "Cloud & DevOps (Azure/GCP)", icon: Smartphone, color: "#45B7D1" },
  { id: "fullstack", label: "Full-Stack Development (React/Next)", icon: Shirt, color: "#FF6B6B" },
  { id: "data", label: "Data Engineering & Microsoft Fabric", icon: Home, color: "#F9C74F" },
];

const budgetCategories: Category[] = [
  { id: "b-all", label: "All / Hourly ($25 - $35/hr)", icon: Layers, color: "#A06CD5" },
  { id: "b-1", label: "$1,000 - $5,000 (MVP / Sprint)", icon: Briefcase, color: "#4ECDC4" },
  { id: "b-2", label: "< $1,000 (Small Task / Advisory)", icon: Shirt, color: "#FF6B6B" },
  { id: "b-3", label: "$5,000 - $15,000 (Complete Platform)", icon: Smartphone, color: "#45B7D1" },
  { id: "b-4", label: "$15,000+ (Enterprise Architecture)", icon: Home, color: "#F9C74F" },
];

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Technical Leadership & Architecture',
    budget: '$1,000 - $5,000 (MVP / Sprint)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: 'Technical Leadership & Architecture',
        budget: '$1,000 - $5,000 (MVP / Sprint)',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative w-full pt-8 sm:pt-12 pb-24 sm:pb-32 px-6 sm:px-12 md:px-20 bg-[#D9DDE0] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase">
              START A PROJECT
            </span>
            <h2 className="font-condensed font-black text-6xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.85] text-[#0A0A0A] mt-2">
              LET&apos;S WORK TOGETHER
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-sans text-[#555555] leading-relaxed">
            Have a project, freelance inquiry, or need architecture consultation? Send a message and let&apos;s build something exceptional.
          </p>
        </div>

        {/* Two-Column Grid: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-black/10 shadow-sm space-y-6">
              <h3 className="font-sans font-bold text-2xl text-[#0A0A0A]">
                Available for Freelance &amp; Consulting
              </h3>
              <p className="text-sm font-sans text-[#666666] leading-relaxed">
                Accepting new projects, technical leadership advisory roles, and full-stack cloud engineering contracts.
              </p>

              <div className="space-y-4 pt-4 border-t border-black/5">
                <a
                  href="mailto:malikxae12@gmail.com"
                  className="flex items-center gap-3 text-sm font-sans font-medium text-[#222222] hover:text-black transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-black" />
                  </div>
                  <span>malikxae12@gmail.com</span>
                </a>

                <a
                  href="https://github.com/Malik-xae-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-sans font-medium text-[#222222] hover:text-black transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                    <GithubIcon className="w-4 h-4 text-black" />
                  </div>
                  <span>github.com/Malik-xae-12</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/abdulmalikmohammed786/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-sans font-medium text-[#222222] hover:text-black transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                    <LinkedinIcon className="w-4 h-4 text-black" />
                  </div>
                  <span>linkedin.com/in/abdulmalikmohammed786</span>
                </a>
              </div>
            </div>

            {/* Consultation Card */}
            <div className="bg-[#0A0A0A] text-white rounded-3xl p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Calendar className="w-4 h-4" />
                <span>DIRECT BOOKING</span>
              </div>
              <h4 className="font-sans font-bold text-xl">
                Schedule a 30-Min Architecture Discovery
              </h4>
              <p className="text-xs sm:text-sm font-sans text-[#AAAAAA] leading-relaxed">
                Review your current stack, discuss scaling bottlenecks, or plan a complete cloud migration.
              </p>
              <a
                href="mailto:malikxae12@gmail.com?subject=30-Min%20Architecture%20Discovery%20Call"
                className="w-full inline-block text-center mt-2 py-3 rounded-xl bg-white text-black font-sans font-bold text-xs tracking-wider uppercase hover:bg-[#D9DDE0] transition-colors shadow-sm"
              >
                Book Consultation Call
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 border border-black/10 shadow-sm space-y-6">
              <h3 className="font-sans font-bold text-2xl text-[#0A0A0A]">
                Send a Project Inquiry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-[#555555] uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#F6F6F6] border border-black/10 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#555555] uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F6F6F6] border border-black/10 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative z-30">
                  <label className="block text-xs font-mono text-[#555555] uppercase tracking-wider mb-2">
                    Service Needed
                  </label>
                  <FluidDropdown
                    categories={serviceCategories}
                    value={formData.service}
                    onChange={(cat) => setFormData({ ...formData, service: cat.label })}
                  />
                </div>

                <div className="relative z-20">
                  <label className="block text-xs font-mono text-[#555555] uppercase tracking-wider mb-2">
                    Estimated Budget
                  </label>
                  <FluidDropdown
                    categories={budgetCategories}
                    value={formData.budget}
                    onChange={(cat) => setFormData({ ...formData, budget: cat.label })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#555555] uppercase tracking-wider mb-2">
                  Project Brief &amp; Objectives
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your goals, timelines, and technical challenges..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F6F6F6] border border-black/10 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-4 rounded-xl bg-[#0A0A0A] text-white font-sans font-bold text-sm tracking-wider uppercase hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-lg active:scale-95 cursor-pointer"
              >
                {submitted ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Inquiry Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Project Brief</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
