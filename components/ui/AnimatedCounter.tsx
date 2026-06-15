"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, useMotionValue, useSpring, useMotionValueEvent, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ to, prefix = "", suffix = "", className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 55, damping: 22 });
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(springValue, "change", (v) => {
    setDisplay(Math.round(v));
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(to);
      return;
    }
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, to, motionValue, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}
