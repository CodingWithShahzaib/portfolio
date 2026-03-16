"use client";

import React from "react";
import { cn } from "@/lib/utils";

type AuroraVariant = "cyan-purple" | "emerald-teal" | "violet-blue" | "amber-rose" | "indigo-cyan";

const variantStyles: Record<
  AuroraVariant,
  { gradient: string; dotColor?: string; gridMask?: string }
> = {
  "cyan-purple": {
    gradient:
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6, 182, 212, 0.22), transparent 50%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(139, 92, 246, 0.14), transparent 50%), radial-gradient(ellipse 50% 30% at 0% 80%, rgba(59, 130, 246, 0.1), transparent 50%)",
    dotColor: "rgba(255,255,255)",
    gridMask: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
  },
  "emerald-teal": {
    gradient:
      "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16, 185, 129, 0.16), transparent 50%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(6, 182, 212, 0.1), transparent 50%), radial-gradient(ellipse 40% 30% at 20% 50%, rgba(34, 197, 94, 0.06), transparent 50%)",
    dotColor: "rgba(255,255,255)",
    gridMask: "radial-gradient(ellipse 80% 70% at 50% 50%, black 25%, transparent 100%)",
  },
  "violet-blue": {
    gradient:
      "radial-gradient(ellipse 80% 50% at 70% 20%, rgba(139, 92, 246, 0.18), transparent 50%), radial-gradient(ellipse 60% 40% at 30% 80%, rgba(59, 130, 246, 0.12), transparent 50%), radial-gradient(ellipse 50% 35% at 50% 50%, rgba(99, 102, 241, 0.06), transparent 50%)",
    dotColor: "rgba(255,255,255)",
    gridMask: "radial-gradient(ellipse 75% 55% at 50% 45%, black 30%, transparent 100%)",
  },
  "amber-rose": {
    gradient:
      "radial-gradient(ellipse 70% 50% at 30% 30%, rgba(245, 158, 11, 0.1), transparent 50%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(244, 63, 94, 0.08), transparent 50%), radial-gradient(ellipse 45% 35% at 50% 50%, rgba(251, 146, 60, 0.05), transparent 50%)",
    dotColor: "rgba(255,255,255)",
    gridMask: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
  },
  "indigo-cyan": {
    gradient:
      "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(99, 102, 241, 0.1), transparent 50%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(6, 182, 212, 0.08), transparent 50%), radial-gradient(ellipse 50% 35% at 80% 20%, rgba(139, 92, 246, 0.06), transparent 50%)",
    dotColor: "rgba(255,255,255)",
    gridMask: "radial-gradient(ellipse 65% 55% at 50% 50%, black 25%, transparent 100%)",
  },
};

interface AuroraBackgroundProps {
  variant?: AuroraVariant;
  className?: string;
  animated?: boolean;
  showDotGrid?: boolean;
  showLineGrid?: boolean;
  children?: React.ReactNode;
}

export function AuroraBackground({
  variant = "cyan-purple",
  className,
  animated = true,
  showDotGrid = true,
  showLineGrid = true,
  children,
}: AuroraBackgroundProps) {
  const style = variantStyles[variant];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Animated aurora mesh - 21st.dev hero style */}
      <div
        className={cn("absolute inset-0", animated && "aurora-mesh")}
        style={{
          background: style.gradient,
          backgroundSize: animated ? "200% 200%" : "100% 100%",
        }}
      />
      {/* Dot grid pattern */}
      {showDotGrid && (
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${style.dotColor} 1px, transparent 0)`,
            backgroundSize: "24px 24px",
            maskImage: style.gridMask,
            WebkitMaskImage: style.gridMask,
          }}
        />
      )}
      {/* Line grid */}
      {showLineGrid && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage: style.gridMask,
            WebkitMaskImage: style.gridMask,
          }}
        />
      )}
    </div>
  );
}
