"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Sparkles, Users, Lightbulb, Target, Rocket, Heart } from "lucide-react";

const bentoItems = [
  {
    title: "Growth Mindset",
    description:
      "Every challenge is an opportunity to learn something new and push boundaries further.",
    icon: Rocket,
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    border: "group-hover:border-cyan-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Team Player",
    description:
      "Great software is built by great teams. I thrive in collaborative environments.",
    icon: Users,
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    border: "group-hover:border-purple-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Creative Problem Solver",
    description:
      "Finding innovative solutions that surprise and delight users.",
    icon: Lightbulb,
    gradient: "from-amber-500/15 via-amber-500/5 to-transparent",
    border: "group-hover:border-amber-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Detail Oriented",
    description:
      "Pixel-perfect UI, clean architecture, and thoughtful code reviews.",
    icon: Target,
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    border: "group-hover:border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Passionate Builder",
    description:
      "Driven by the joy of creating software that makes a real difference in the world.",
    icon: Heart,
    gradient: "from-rose-500/20 via-rose-500/5 to-transparent",
    border: "group-hover:border-rose-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.1)]",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    className: "md:col-span-2 md:row-span-1",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-28 sm:py-36 bg-black overflow-hidden"
    >
      {/* 21st.dev-style aurora background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AuroraBackground variant="emerald-teal" showDotGrid showLineGrid />
      </motion.div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.05] text-xs font-medium text-cyan-300/80 mb-8"
          >
            <Sparkles size={12} />
            Beyond the Code
          </motion.div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-600">
              My Journey
            </span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From curious beginner to senior engineer — the passion that drives
            innovation and shapes the future.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 auto-rows-auto">
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={
                  isInView ? { opacity: 1, y: 0, scale: 1 } : {}
                }
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className={cn(
                  "group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8 transition-all duration-700 cursor-default overflow-hidden",
                  item.border,
                  item.glow,
                  item.className
                )}
              >
                {/* Hover gradient */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                    item.gradient
                  )}
                />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                      item.iconColor,
                      item.iconBg
                    )}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
