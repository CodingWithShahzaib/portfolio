"use client";
import React, { useRef, useCallback } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Mail, Phone, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";

const contactCards = [
  {
    title: "Email",
    icon: Mail,
    description: "Let's discuss your project",
    contact: "shahzaibrehman40@gmail.com",
    href: "mailto:shahzaibrehman40@gmail.com",
    status: "Responds within 24h",
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    borderHover: "hover:border-blue-500/30",
    glowHover: "hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]",
  },
  {
    title: "Phone",
    icon: Phone,
    description: "Call for immediate discussion",
    contact: "+92 313 476 6457",
    href: "tel:+923134766457",
    status: "Mon-Fri, 9 AM - 6 PM PKT",
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    borderHover: "hover:border-cyan-500/30",
    glowHover: "hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]",
  },
  {
    title: "GitHub",
    icon: Github,
    description: "Explore my code & projects",
    contact: "@CodingWithShahzaib",
    href: "https://github.com/CodingWithShahzaib",
    status: "50+ repositories",
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    borderHover: "hover:border-purple-500/30",
    glowHover: "hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]",
  },
  {
    title: "LinkedIn",
    icon: Linkedin,
    description: "Let's connect professionally",
    contact: "/in/shahzaib-rehman",
    href: "https://www.linkedin.com/in/shahzaib-rehman-1246591a6/",
    status: "500+ connections",
    gradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    borderHover: "hover:border-indigo-500/30",
    glowHover: "hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]",
  },
];

function MagneticCard({
  card,
  index,
  isInView,
}: {
  card: (typeof contactCards)[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXRaw = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateYRaw = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useSpring(rotateXRaw, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const Icon = card.icon;
  const isExternal = card.href.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12 + 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <a
        href={card.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <motion.div
          ref={cardRef}
          style={{ rotateX, rotateY, transformPerspective: 800 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-7 sm:p-8 transition-all duration-700 cursor-pointer overflow-hidden",
            card.borderHover,
            card.glowHover
          )}
        >
          {/* Hover gradient */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
              card.gradient
            )}
          />
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <div
                className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                  card.iconColor,
                  card.iconBg
                )}
              >
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <ArrowUpRight
                size={18}
                className="text-neutral-700 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </div>

            <h3 className="font-heading text-xl font-semibold text-white mb-1.5">
              {card.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-5">{card.description}</p>

            <p
              className={cn(
                "text-sm font-medium mb-5 transition-colors duration-300",
                card.iconColor
              )}
            >
              {card.contact}
            </p>

            <div className="flex items-center gap-2.5 pt-4 border-t border-white/[0.04]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
              </span>
              <span className="text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors">
                {card.status}
              </span>
            </div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen bg-black overflow-hidden flex flex-col"
    >
      {/* 21st.dev-style aurora background */}
      <AuroraBackground variant="indigo-cyan" showDotGrid showLineGrid />

      {/* Horizontal accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent z-10" />

      <div className="relative z-10 flex-1 flex flex-col justify-center py-28 sm:py-36">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-14 sm:mb-18"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.05] text-xs font-medium text-cyan-300/80 mb-8">
              <MessageCircle size={12} />
              Let&apos;s Connect
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-600">
                Get In Touch
              </span>
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Ready to start your next project? Choose your preferred way to
              connect.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {contactCards.map((card, index) => (
              <MagneticCard
                key={card.title}
                card={card}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            <p className="text-xs text-neutral-600 font-medium">
              &copy; {new Date().getFullYear()} Shahzaib Rehman
            </p>
          </div>
          <div className="flex items-center gap-5">
            {[
              { icon: Github, href: "https://github.com/CodingWithShahzaib" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shahzaib-rehman-1246591a6/" },
              { icon: Mail, href: "mailto:shahzaibrehman40@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-neutral-700 hover:text-white transition-colors duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
