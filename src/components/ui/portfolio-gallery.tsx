"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface PortfolioGalleryProps {
  title?: string;
  archiveButton?: {
    text: string;
    href: string;
  };
  images?: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  className?: string;
  maxHeight?: number;
  spacing?: string;
  onImageClick?: (index: number) => void;
  /**
   * Whether to pause marquee animation on hover (mobile only)
   * @default true
   */
  pauseOnHover?: boolean;
  /**
   * Number of times to repeat the content in marquee (mobile only)
   * @default 4
   */
  marqueeRepeat?: number;
}

export function PortfolioGallery({
  title = "Browse my library",
  archiveButton = {
    text: "View gallery",
    href: "/work"
  },
  images: customImages,
  className = "",
  maxHeight = 120,
  spacing = "-space-x-72 md:-space-x-80",
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 4
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const defaultImages = [
    {
      src: "https://cdn.21st.dev/assets/mirror/d7/d7b4f814ea6a53c734011ba07290c57cd90c7fcbbdc6d733c58bb96e1974c35d.jpg",
      alt: "SaaS Dashboard Design",
      title: "SaaS Enterprise Analytics",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/07/0771aea1a63bf4c0f86a50a671a2a8c0def8d6dfaed9d4059094144dfae128b2.jpg",
      alt: "Web Development",
      title: "Full Stack Cloud Platform",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/06/06a56789c12bfaff3d8ca3cdaf4b6c904afb6dffa29ef229b1710e79efe74605.jpg",
      alt: "E-Commerce Platform",
      title: "Global E-Commerce Engine",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/d9/d9518d4aa10cfcbe33ddac518bdc215a2a8056166d66428ecfd9a9f93a27d77f.jpg",
      alt: "Mobile App Design",
      title: "FinTech Mobile Suite",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/4e/4e73d3917d198eb3f4d198d415a5184f4a41713f5f549675e2ec7682bab28770.jpg",
      alt: "Brand Identity",
      title: "Azure DevOps CI/CD Portal",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/74/74761eb7d8ecb048e423824fb405469ab51993b5b90bb414d05748a01a4e3c35.jpg",
      alt: "Marketing Campaign",
      title: "AI Automation Workflow",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/07/07ab48b81e987c96630c5f2ad3ab6fcc5f4d687fb5bc3b74b9fad9b4a95648c0.jpg",
      alt: "Product Photography",
      title: "Microsoft Fabric Data Lake",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/14/14c4658d8b0861da748c9de43992f51952457956291385417d6fd3983c2361a0.jpg",
      alt: "Packaging Design",
      title: "High Performance Web App",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/06/06a56789c12bfaff3d8ca3cdaf4b6c904afb6dffa29ef229b1710e79efe74605.jpg",
      alt: "Tech Innovation",
      title: "API Integration Hub",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/4e/4e73d3917d198eb3f4d198d415a5184f4a41713f5f549675e2ec7682bab28770.jpg",
      alt: "Future Vision",
      title: "Scalable Architecture",
    },
  ]
  
  const images = customImages || defaultImages

  return (
    <section
      aria-label={title}
      className={`relative min-h-screen py-20 px-4 ${className}`}
      id="work"
    >
      <div className="max-w-7xl mx-auto bg-background/50 backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
        {/* Header Section */}
        <div className="relative z-10 text-center pt-16 pb-8 px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-balance">{title}</h2>

          <Link
            href={archiveButton.href}
            className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors group mb-20"
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop 3D overlapping layout - hidden on mobile */}
        <div className="hidden md:block relative overflow-hidden h-[400px] -mb-[200px]">
          <div className={`flex ${spacing} pb-8 pt-40 items-end justify-center`}>
            {images.map((image, index) => {
              // Calculate stagger height - peak in middle, descending to edges
              const totalImages = images.length
              const middle = Math.floor(totalImages / 2)
              const distanceFromMiddle = Math.abs(index - middle)
              const staggerOffset = maxHeight - distanceFromMiddle * 20

              const zIndex = totalImages - index

              const isHovered = hoveredIndex === index
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index

              // When hovering: hovered card moves to consistent top position, others move to baseline
              const yOffset = isHovered ? -120 : isOtherHovered ? 0 : -staggerOffset

              return (
                <motion.div
                  key={index}
                  className="group cursor-pointer flex-shrink-0"
                  style={{
                    zIndex: zIndex,
                  }}
                  initial={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(200px)`,
                    opacity: 0,
                  }}
                  animate={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2, // Much faster hover animation
                    delay: index * 0.05, // Faster entrance stagger
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-video w-64 md:w-80 lg:w-96 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    style={{
                      boxShadow: `
                        rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                        rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                        rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                        rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                      `,
                    }}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover object-left-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile marquee layout */}
        <div className="block md:hidden relative pb-8">
          <div
            className={cn(
              "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
              "flex-row"
            )}
          >
            {Array(marqueeRepeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex shrink-0 justify-around [gap:var(--gap)]",
                    "animate-marquee flex-row",
                    {
                      "group-hover:[animation-play-state:paused]": pauseOnHover,
                    }
                  )}
                >
                  {images.map((image, index) => (
                    <div
                      key={`${i}-${index}`}
                      className="group cursor-pointer flex-shrink-0"
                      onClick={() => onImageClick?.(index)}
                    >
                      <div
                        className="relative aspect-video w-64 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                        style={{
                          boxShadow: `
                            rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                            rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                            rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                            rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                          `,
                        }}
                      >
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-full object-cover object-left-top"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

