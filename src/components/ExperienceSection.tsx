import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

const experienceItems = [
  {
    title: "2024",
    content: (
      <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-neutral-800">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Infaque (Senior Software Engineer)</h3>
        <p className="text-neutral-300 mb-4 text-sm sm:text-base leading-relaxed">
          Integrated Stripe, PayPal, Paygood; built dashboards, automated donation tracking, and multi-channel outreach.
        </p>
        <span className="text-neutral-400 text-xs sm:text-sm">Feb 2024 – Present (1.5 Years)</span>
      </div>
    ),
  },
  {
    title: "2023 - 2024",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-neutral-800">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Artmetrica (Consulted by Infaque)</h3>
          <p className="text-neutral-300 mb-4 text-sm sm:text-base leading-relaxed">
            Integrated APIs (Eventbrite, Xero, Mailchimp, QuickBooks, Google, Meta); built backend services, automated KPI reporting, and secure user management.
          </p>
          <span className="text-neutral-400 text-xs sm:text-sm">Feb 2024 – Present (1.5 Years)</span>
        </div>
        <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-neutral-800">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Aiworks.ai (Software Engineer)</h3>
          <p className="text-neutral-300 mb-4 text-sm sm:text-base leading-relaxed">
            Developed Sharove (E-Commerce) with Next.js, integrated LLMs, built PoC for marketplace, and autonomous agents.
          </p>
          <span className="text-neutral-400 text-xs sm:text-sm">June 2023 – May 2024 (1 Year)</span>
        </div>
      </div>
    ),
  },
  {
    title: "2022 - 2023",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-neutral-800">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">NexAgent.ai (Subsidiary of Aiworks)</h3>
          <p className="text-neutral-300 mb-4 text-sm sm:text-base leading-relaxed">
            Engineered agent-based UIs, dynamic routing, RAG agent for e-commerce, LLM fine-tuning, prompt engineering, and CI/CD.
          </p>
          <span className="text-neutral-400 text-xs sm:text-sm">June 2023 – May 2024 (1 Year)</span>
        </div>
        <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-neutral-800">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Cybernest (Software Engineer)</h3>
          <p className="text-neutral-300 mb-4 text-sm sm:text-base leading-relaxed">
            Refined HRM, built NFT marketplace, DEX, Hyperledger Fabric wallet, and contributed to YouSound.
          </p>
          <span className="text-neutral-400 text-xs sm:text-sm">Dec 2022 – May 2023 (6 Months)</span>
        </div>
      </div>
    ),
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden min-h-screen">
      {/* Transitional aurora-like background effects with performance optimization */}
      <div className="absolute inset-0 bg-gradient-to-bl from-black via-purple-900/15 to-black"></div>
      
      {/* Connecting gradient from AboutSection */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-green-900/10 via-purple-900/10 to-transparent"></div>
      
      {/* Aurora orbs transitioning colors with will-change for performance - constrained movements */}
      <motion.div 
        className="absolute top-20 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-purple-500/40 via-orange-500/25 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/5 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-tl from-orange-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, 18, 0],
          y: [0, -12, 0],
          scale: [1, 0.95, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/3 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gradient-to-br from-pink-500/25 via-purple-500/15 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, 10, 0],
          y: [0, 8, 0],
          scale: [1, 1.03, 1],
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      {/* Bottom gradient connecting to SkillsSection */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      <div className="relative z-10">
        <Timeline data={experienceItems} />
      </div>
    </section>
  );
};

export default ExperienceSection; 