"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Monitor, Server, Database, Brain, Wrench, Users, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "cyan",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript ES6+"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "green",
    technologies: ["Node.js", "Express.js", "Firebase", "RESTful APIs", "GraphQL", "Microservices"],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "blue",
    technologies: ["PostgreSQL", "MongoDB", "AWS", "Azure", "Redis", "Prisma ORM"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    color: "purple",
    technologies: ["Large Language Models", "RAG Systems", "Model Fine-tuning", "Vector Databases", "Python"],
  },
  {
    title: "DevOps",
    icon: Wrench,
    color: "orange",
    technologies: ["Docker", "Kubernetes", "CI/CD Pipelines", "Git/GitHub"],
  },
  {
    title: "Leadership",
    icon: Users,
    color: "pink",
    technologies: ["Team Leadership", "Technical Mentoring", "Project Management", "Code Review"],
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; iconBg: string; glow: string }> = {
  cyan: { text: "text-cyan-400", bg: "from-cyan-500/15 to-cyan-500/5", border: "group-hover:border-cyan-500/30", iconBg: "bg-cyan-500/10", glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]" },
  green: { text: "text-emerald-400", bg: "from-emerald-500/15 to-emerald-500/5", border: "group-hover:border-emerald-500/30", iconBg: "bg-emerald-500/10", glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]" },
  blue: { text: "text-blue-400", bg: "from-blue-500/15 to-blue-500/5", border: "group-hover:border-blue-500/30", iconBg: "bg-blue-500/10", glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]" },
  purple: { text: "text-purple-400", bg: "from-purple-500/15 to-purple-500/5", border: "group-hover:border-purple-500/30", iconBg: "bg-purple-500/10", glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]" },
  orange: { text: "text-orange-400", bg: "from-orange-500/15 to-orange-500/5", border: "group-hover:border-orange-500/30", iconBg: "bg-orange-500/10", glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.08)]" },
  pink: { text: "text-pink-400", bg: "from-pink-500/15 to-pink-500/5", border: "group-hover:border-pink-500/30", iconBg: "bg-pink-500/10", glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.08)]" },
};

const highlights = [
  { value: 4, suffix: "+", label: "Years Experience", color: "text-cyan-400", glowColor: "shadow-cyan-500/20" },
  { value: 15, suffix: "+", label: "Technologies", color: "text-emerald-400", glowColor: "shadow-emerald-500/20" },
  { value: 50, suffix: "+", label: "Projects Delivered", color: "text-purple-400", glowColor: "shadow-purple-500/20" },
];

const marqueeItems = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Firebase", "PostgreSQL",
  "MongoDB", "AWS", "Docker", "AI/ML", "Tailwind CSS", "Express.js",
  "Python", "Kubernetes", "Azure", "Redis", "GraphQL", "Prisma",
];

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = Math.ceil(1500 / value);
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);
  return <span>{count}{suffix}</span>;
}

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="skills" ref={containerRef} className="relative w-full py-28 sm:py-36 bg-black overflow-hidden">
      {/* 21st.dev-style aurora background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AuroraBackground variant="violet-blue" showDotGrid showLineGrid />
      </motion.div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.05] text-xs font-medium text-cyan-300/80 mb-8">
            <Zap size={12} />
            Technical Expertise
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-600">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Comprehensive expertise across full-stack development,
            AI/ML integration, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Highlights with glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-3 gap-6 sm:gap-10 mb-20"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              whileHover={{ y: -4 }}
              className="text-center group"
            >
              <div className={cn("font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-3 transition-all duration-300 drop-shadow-lg", h.color)}>
                <AnimatedCounter value={h.value} suffix={h.suffix} isInView={isInView} />
              </div>
              <div className="text-neutral-500 text-xs sm:text-sm font-medium tracking-wide uppercase">{h.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                className={cn(
                  "group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition-all duration-700 overflow-hidden",
                  colors.border,
                  colors.glow
                )}
              >
                <div className={cn("absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700", colors.bg)} />
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3", colors.text, colors.iconBg)}>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs text-neutral-500 font-medium group-hover:text-neutral-300 group-hover:border-white/[0.1] group-hover:bg-white/[0.05] transition-all duration-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h4 className="font-heading text-sm font-medium text-neutral-600 text-center mb-6 tracking-[0.15em] uppercase">
            Currently Working With
          </h4>
          <div className="relative overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
            <div
              className="flex gap-4 animate-marquee"
              style={{ "--gap": "1rem", "--duration": "25s" } as React.CSSProperties}
            >
              {[...marqueeItems, ...marqueeItems].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="shrink-0 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm text-neutral-500 font-medium whitespace-nowrap hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/[0.05] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
