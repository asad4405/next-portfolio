"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export const delays: Record<number, string> = {
  0: "delay-0",
  100: "delay-100",
  200: "delay-200",
  300: "delay-300",
  400: "delay-400",
  500: "delay-500",
};

export interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none ${
        delays[delay] ?? ""
      } ${
        shown
          ? "translate-y-0 opacity-100 blur-none"
          : "translate-y-7 opacity-0 blur-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
