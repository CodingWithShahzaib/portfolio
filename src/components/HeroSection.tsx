"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { FlipWords } from "@/components/ui/flip-words";
import { AuroraBackground } from "@/components/ui/aurora-background";

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }[] = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const count = Math.min(Math.floor(window.innerWidth * 0.06), 80);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.3 + 0.05,
        hue: Math.random() > 0.5 ? 190 : 260,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const dxM = mouseX - p.x;
        const dyM = mouseY - p.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        const influence = distM < 180 ? 1 - distM / 180 : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + influence * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.opacity + influence * 0.4})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${p.hue}, 50%, 55%, ${(1 - dist / 100) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    resize();
    createParticles();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
}

function BeamLine({ delay, duration, x }: { delay: number; duration: number; x: string }) {
  return (
    <motion.div
      className="absolute top-0 h-full w-px"
      style={{ left: x }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
        style={{ height: "25%" }}
        initial={{ top: "-25%" }}
        animate={{ top: "125%" }}
        transition={{ delay: delay + 0.5, duration, repeat: Infinity, repeatDelay: duration * 0.7, ease: "linear" }}
      />
      <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
    </motion.div>
  );
}

const roles = [
  "Senior Software Engineer",
  "Full-Stack Developer",
  "AI Agent Developer",
];

const navLinks = [
  { label: "HOME", href: "/#home" },
  { label: "ABOUT", href: "/#about" },
  { label: "EXPERIENCE", href: "/#experience" },
  { label: "SKILLS", href: "/#skills" },
  { label: "CONTACT", href: "/#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/CodingWithShahzaib" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shahzaib-rehman-1246591a6/" },
  { icon: Mail, href: "mailto:shahzaibrehman40@gmail.com" },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 150]), { stiffness: 100, damping: 30 });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-black p-6 sm:p-8 md:p-12"
    >
      {/* 21st.dev-style aurora background */}
      <AuroraBackground variant="cyan-purple" showDotGrid showLineGrid />

      {/* Grid floor */}
      <div className="absolute inset-0 bg-grid-white/[0.015] [mask-image:linear-gradient(to_bottom,transparent_10%,black_40%,transparent_90%)]" />

      {/* Beam lines */}
      <BeamLine delay={0.5} duration={4.5} x="12%" />
      <BeamLine delay={1.4} duration={5.5} x="38%" />
      <BeamLine delay={0.9} duration={3.8} x="62%" />
      <BeamLine delay={2.2} duration={6} x="85%" />

      {/* Particles */}
      <ParticleField />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] top-[-5%] left-[15%]"
        animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] bg-purple-500/8 rounded-full blur-[120px] bottom-[10%] right-[10%]"
        animate={{ y: [0, 15, 0], x: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* --- HEADER NAV --- */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-lg font-bold tracking-wider text-white"
        >
          <span className="gradient-text">SR</span>
          <span className="text-neutral-500">.</span>
        </motion.div>
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.2em] text-neutral-500 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <motion.a
          href="/Shahzaib Rehman.pdf"
          download="Shahzaib_Rehman_Resume.pdf"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-neutral-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] backdrop-blur-sm transition-all duration-300"
        >
          <Download size={13} />
          Resume
        </motion.a>
      </header>

      {/* --- MAIN CONTENT: Centered vertical stack --- */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 flex w-full max-w-2xl flex-grow flex-col items-center justify-center text-center"
      >
        {/* Name first */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-extrabold leading-[1.1] tracking-tight"
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-600">
            Shahzaib
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-gradient-x bg-[length:200%_auto]">
              Rehman
            </span>
            <span
              className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 blur-2xl opacity-25 animate-gradient-x bg-[length:200%_auto] pointer-events-none"
              aria-hidden="true"
            >
              Rehman
            </span>
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 flex items-center justify-center gap-3"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/40" />
          <FlipWords
            words={roles}
            className="font-heading text-sm sm:text-base font-medium text-neutral-500"
            duration={3500}
          />
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500/40" />
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute inset-0 -m-4 rounded-full opacity-80"
              style={{
                background: "conic-gradient(from 180deg, rgba(6,182,212,0.4), rgba(139,92,246,0.4), rgba(59,130,246,0.4), rgba(6,182,212,0.4))",
              }}
            />
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 overflow-hidden rounded-full border-2 border-black">
              <img
                src="/profile.png"
                alt="Shahzaib Rehman"
                className="h-full w-full object-cover object-[center_top]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/400x600/0a0a0a/38bdf8?text=SR";
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Bio + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 space-y-6"
        >
          <p className="text-sm sm:text-base leading-relaxed text-neutral-400 max-w-md mx-auto">
            Passionate about building efficient, scalable web applications and
            AI-powered solutions. From full-stack apps to autonomous agents —
            delivering impactful results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#about"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              Read More
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/15 bg-cyan-500/[0.04] text-xs font-medium text-cyan-400/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Available for opportunities
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* --- FOOTER --- */}
      <footer className="relative z-30 flex w-full max-w-7xl items-center justify-between py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex items-center gap-6"
        >
          {socialLinks.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <div className="flex items-center gap-3 group">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-500 group-hover:text-neutral-300 transition-colors">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center w-5 h-8 rounded-full border border-neutral-700 group-hover:border-neutral-500 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-0.5 h-1.5 rounded-full bg-cyan-500/60"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-neutral-500"
        >
          <MapPin size={14} strokeWidth={1.5} />
          Pakistan
        </motion.div>
      </footer>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Horizon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
