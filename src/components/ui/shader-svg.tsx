"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export interface MeshGradientSVGProps {
  colors?: string[];
  className?: string;
  speed?: number;
}

export function MeshGradientSVG({
  colors = [
    "#4A90E2", // Electric Azure
    "#87CEEB", // Sky cyan
    "#F16D14", // Portfolio accent orange
    "#2C3E50", // Slate blue-gray
    "#0A0A0A", // Obsidian black
  ],
  className = "",
  speed = 1,
}: MeshGradientSVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (mousePosition.x - centerX) * 0.08;
      const deltaY = (mousePosition.y - centerY) * 0.08;

      const maxOffset = 14;
      setEyeOffset({
        x: Math.max(-maxOffset, Math.min(maxOffset, deltaX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, deltaY)),
      });
    }
  }, [mousePosition]);

  return (
    <motion.div
      className={`relative w-full max-w-sm mx-auto p-4 flex items-center justify-center select-none ${className}`}
      animate={{
        y: [0, -10, 0],
        scaleY: [1, 1.04, 1],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      style={{ transformOrigin: "top center" }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="231"
        height="289"
        viewBox="0 0 231 289"
        className="w-full h-auto max-w-[240px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
      >
        <defs>
          <clipPath id="shapeClip">
            <path d="M230.809 115.385V249.411C230.809 269.923 214.985 287.282 194.495 288.411C184.544 288.949 175.364 285.718 168.26 280C159.746 273.154 147.769 273.461 139.178 280.23C132.638 285.384 124.381 288.462 115.379 288.462C106.377 288.462 98.1451 285.384 91.6055 280.23C82.912 273.385 70.9353 273.385 62.2415 280.23C55.7532 285.334 47.598 288.411 38.7246 288.462C17.4132 288.615 0 270.667 0 249.359V115.385C0 51.6667 51.6756 0 115.404 0C179.134 0 230.809 51.6667 230.809 115.385Z" />
          </clipPath>
        </defs>

        <foreignObject width="231" height="289" clipPath="url(#shapeClip)">
          <div className="w-full h-full">
            <MeshGradient colors={colors} className="w-full h-full" speed={speed} />
          </div>
        </foreignObject>

        {/* Left Eye with animated pupil & blink */}
        <motion.ellipse
          rx="18"
          ry="28"
          fill="#FFFFFF"
          animate={{
            cx: 80 + eyeOffset.x,
            cy: 120 + eyeOffset.y,
            scaleY: [1, 1, 0.1, 1, 1],
          }}
          transition={{
            cx: { type: "spring", stiffness: 180, damping: 18 },
            cy: { type: "spring", stiffness: 180, damping: 18 },
            scaleY: {
              duration: 3.2,
              repeat: Number.POSITIVE_INFINITY,
              times: [0, 0.85, 0.9, 0.95, 1],
              ease: "easeInOut",
            },
          }}
          style={{ transformOrigin: "80px 120px" }}
        />

        {/* Right Eye with animated pupil & blink */}
        <motion.ellipse
          rx="18"
          ry="28"
          fill="#FFFFFF"
          animate={{
            cx: 150 + eyeOffset.x,
            cy: 120 + eyeOffset.y,
            scaleY: [1, 1, 0.1, 1, 1],
          }}
          transition={{
            cx: { type: "spring", stiffness: 180, damping: 18 },
            cy: { type: "spring", stiffness: 180, damping: 18 },
            scaleY: {
              duration: 3.2,
              repeat: Number.POSITIVE_INFINITY,
              times: [0, 0.85, 0.9, 0.95, 1],
              ease: "easeInOut",
            },
          }}
          style={{ transformOrigin: "150px 120px" }}
        />
      </svg>
    </motion.div>
  );
}

export default MeshGradientSVG;

