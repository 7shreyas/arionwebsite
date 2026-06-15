"use client";

import { motion, useReducedMotion } from "framer-motion";

interface OrbitalMotifProps {
  size?: number;
  className?: string;
}

export default function OrbitalMotif({ size = 480, className = "" }: OrbitalMotifProps) {
  const shouldReduceMotion = useReducedMotion();
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.44;
  const middleR = size * 0.30;
  const innerR = size * 0.16;

  const spinOuter = shouldReduceMotion
    ? {}
    : { rotate: 360 };
  const spinInner = shouldReduceMotion
    ? {}
    : { rotate: -360 };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Static outer glow ring */}
      <circle
        cx={cx}
        cy={cy}
        r={outerR + size * 0.04}
        stroke="#FF6B2B"
        strokeWidth="1"
        opacity="0.08"
      />

      {/* Outer dashed ring — spins clockwise */}
      <motion.g
        style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: "fill-box" }}
        animate={spinOuter}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx={cx}
          cy={cy}
          r={outerR}
          stroke="#FF6B2B"
          strokeWidth="1.5"
          strokeDasharray="10 7"
          opacity="0.55"
        />
        {/* Accent dots on outer ring */}
        <circle cx={cx} cy={cy - outerR} r={size * 0.012} fill="#FF6B2B" opacity="0.9" />
        <circle cx={cx + outerR} cy={cy} r={size * 0.008} fill="#FF6B2B" opacity="0.6" />
        <circle cx={cx} cy={cy + outerR} r={size * 0.010} fill="#FF6B2B" opacity="0.7" />
      </motion.g>

      {/* Middle dashed ring — spins counter-clockwise */}
      <motion.g
        style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: "fill-box" }}
        animate={spinInner}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx={cx}
          cy={cy}
          r={middleR}
          stroke="#FF6B2B"
          strokeWidth="1"
          strokeDasharray="4 10"
          opacity="0.35"
        />
        <circle cx={cx - middleR} cy={cy} r={size * 0.007} fill="#FF6B2B" opacity="0.5" />
      </motion.g>

      {/* Inner static ring */}
      <circle
        cx={cx}
        cy={cy}
        r={innerR}
        stroke="#FF6B2B"
        strokeWidth="1"
        strokeDasharray="2 6"
        opacity="0.20"
      />

      {/* Center dot */}
      <circle cx={cx} cy={cy} r={size * 0.014} fill="#FF6B2B" opacity="0.4" />
    </svg>
  );
}
