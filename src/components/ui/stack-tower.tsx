"use client";

/**
 * Renders repeated words as a vertically rotating typographic tower.
 * Hovering a row increases its scale while the stack continues cycling.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  motionValue,
  useAnimationFrame,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";

const DEFAULT_WORDS = ["DO NOT MISS", "A CHANCE"] as const;
const DEFAULT_ROW_COUNT = 16;
const SECONDS_PER_CYCLE = 5;
const AMPLITUDE_PX = 16;
const HOVER_SCALE_BOOST = 0.12;
const HOVER_EASE_RATE = 10;

type RowProps = {
  text: string;
  rowIndex: number;
  phase: MotionValue<number>;
  hover: MotionValue<number>;
  fg: string;
  dim: string;
  accent: string;
  fontSize: string;
  onEnter: (i: number) => void;
  onLeave: (i: number) => void;
};

function TowerRow({
  text,
  rowIndex,
  phase,
  hover,
  fg,
  dim,
  accent,
  fontSize,
  onEnter,
  onLeave,
}: RowProps) {
  const rowOffset = rowIndex * 0.35;

  const transform = useTransform([phase, hover], ([p, h]) => {
    const local = (p as number) * Math.PI * 2 + rowOffset;
    const scaleX = 0.55 + 0.45 * Math.cos(local);
    const shiftX = Math.sin(local) * AMPLITUDE_PX;
    const skewX = Math.sin(local) * 4;
    const boost = 1 + (h as number) * HOVER_SCALE_BOOST;
    return `translateX(${shiftX}px) skewX(${skewX}deg) scale(${
      Math.max(0.08, scaleX) * boost
    }, ${boost})`;
  });

  const color = useTransform([phase, hover], ([p, h]) => {
    const local = (p as number) * Math.PI * 2 + rowOffset;
    const tt = (Math.cos(local) + 1) / 2;
    const base = mix(dim, fg, tt);
    const hv = h as number;
    if (hv < 0.002) return base;
    return mix(base, accent, hv);
  });

  return (
    <div
      onPointerEnter={() => onEnter(rowIndex)}
      onPointerLeave={() => onLeave(rowIndex)}
      onPointerDown={() => onEnter(rowIndex)}
      onPointerUp={() => onLeave(rowIndex)}
      onPointerCancel={() => onLeave(rowIndex)}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        touchAction: "none",
      }}
    >
      <motion.div
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
          fontWeight: 900,
          fontSize,
          lineHeight: 0.92,
          letterSpacing: "-0.03em",
          textAlign: "center",
          transformOrigin: "center center",
          whiteSpace: "nowrap",
          transform,
          color,
          willChange: "transform, color",
          userSelect: "none",
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

function mix(a: string, b: string, t: number): string {
  const normalize = (hex: string) => {
    let clean = hex.replace("#", "");
    if (clean.length === 3) {
      clean = clean
        .split("")
        .map((c) => c + c)
        .join("");
    }
    return clean;
  };
  const pa = parseInt(normalize(a), 16);
  const pb = parseInt(normalize(b), 16);
  const ar = (pa >> 16) & 0xff;
  const ag = (pa >> 8) & 0xff;
  const ab = pa & 0xff;
  const br = (pb >> 16) & 0xff;
  const bg = (pb >> 8) & 0xff;
  const bb = pb & 0xff;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `#${((r << 16) | (g << 8) | bl).toString(16).padStart(6, "0")}`;
}

export interface StackTowerProps {
  words?: readonly string[] | string[];
  className?: string;
  accentColor?: string;
  fontSize?: string;
  rowCount?: number;
}

export default function StackTower({
  words = DEFAULT_WORDS,
  className = "",
  accentColor = "#F16D14", // Vibrant orange on hover
  fontSize = "clamp(1.4rem, 3.2vw, 2.65rem)", // Balanced legible font size
  rowCount = DEFAULT_ROW_COUNT,
}: StackTowerProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  // Directly dark theme: transparent/black background, pure white text, dim gray depth, orange hover
  const fg = "#FFFFFF";
  const dim = "#3A3936";
  const accent = accentColor;
  const fadeTop = "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0) 100%)";
  const fadeBot = "linear-gradient(to top, #000000 0%, rgba(0,0,0,0) 100%)";

  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const hoveredIndexRef = useRef<number | null>(null);

  const phases = useMemo<MotionValue<number>[]>(
    () => Array.from({ length: rowCount }, () => motionValue(0)),
    [rowCount],
  );

  const hovers = useMemo<MotionValue<number>[]>(
    () => Array.from({ length: rowCount }, () => motionValue(0)),
    [rowCount],
  );

  const hoverEased = useRef<number[]>(Array(rowCount).fill(0));
  useEffect(() => {
    hoverEased.current = Array(rowCount).fill(0);
  }, [rowCount]);

  const prevTs = useRef<number | null>(null);

  useAnimationFrame((t) => {
    if (reducedMotion) {
      phases.forEach((p, i) => p.set(0.2 + i * 0.03));
      return;
    }
    const last = prevTs.current;
    prevTs.current = t;
    if (last == null) return;

    const dtSec = (t - last) / 1000;
    const phaseDt = dtSec / SECONDS_PER_CYCLE;
    const alpha = 1 - Math.exp(-HOVER_EASE_RATE * dtSec);

    const hov = hoveredIndexRef.current;
    for (let i = 0; i < rowCount; i++) {
      phases[i]?.set(phases[i].get() + phaseDt);

      const target = i === hov ? 1 : 0;
      const cur = hoverEased.current[i] ?? 0;
      const next = cur + (target - cur) * alpha;
      hoverEased.current[i] = next;
      hovers[i]?.set(next);
    }
  });

  const handleEnter = (i: number) => {
    hoveredIndexRef.current = i;
  };
  const handleLeave = (i: number) => {
    if (hoveredIndexRef.current === i) hoveredIndexRef.current = null;
  };

  const rows = Array.from(
    { length: rowCount },
    (_, i) => words[i % words.length],
  );

  return (
    <div
      ref={rootRef}
      className={`flex h-full min-h-[460px] lg:min-h-[520px] w-full items-center justify-center overflow-hidden relative select-none bg-transparent ${className}`}
    >
      <div
        className="relative flex flex-col items-center justify-center w-full py-4"
        style={{ maxWidth: "100%" }}
      >
        {rows.map((word, i) => (
          <TowerRow
            key={i}
            text={word}
            rowIndex={i}
            phase={phases[i]}
            hover={hovers[i]}
            fg={fg}
            dim={dim}
            accent={accent}
            fontSize={fontSize}
            onEnter={handleEnter}
            onLeave={handleLeave}
          />
        ))}

        {/* Top Fade Mask */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "22%",
            background: fadeTop,
            pointerEvents: "none",
          }}
        />
        {/* Bottom Fade Mask */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "22%",
            background: fadeBot,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
