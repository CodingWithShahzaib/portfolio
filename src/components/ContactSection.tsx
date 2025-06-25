"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  MessageCircle, 
  Zap 
} from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const contactCards = [
    {
      id: 1,
      title: "Email",
      icon: Mail,
      description: "Let's discuss your project via email",
      contact: "shahzaibrehman40@gmail.com",
      href: "mailto:shahzaibrehman40@gmail.com",
      status: "Usually responds within 24h",
      color: "text-blue-400 hover:text-blue-300",
      iconColor: "text-blue-400 group-hover:text-blue-300",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 2,
      title: "Phone",
      icon: Phone,
      description: "Call me for immediate discussion",
      contact: "+92 313 476 6457",
      href: "tel:+923134766457",
      status: "Available Mon-Fri, 9 AM - 6 PM PKT",
      color: "text-cyan-400 hover:text-cyan-300",
      iconColor: "text-cyan-400 group-hover:text-cyan-300",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "GitHub",
      icon: Github,
      description: "Explore my code and projects",
      contact: "@CodingWithShahzaib",
      href: "https://github.com/CodingWithShahzaib",
      status: "50+ repositories • 500+ contributions",
      color: "text-purple-400 hover:text-purple-300",
      iconColor: "text-purple-400 group-hover:text-purple-300",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 4,
      title: "LinkedIn",
      icon: Linkedin,
      description: "Let's connect professionally",
      contact: "/in/shahzaib-rehman",
      href: "https://www.linkedin.com/in/shahzaib-rehman-1246591a6/",
      status: "500+ connections • Tech Industry",
      color: "text-blue-400 hover:text-blue-300",
      iconColor: "text-blue-400 group-hover:text-blue-300",
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section ref={ref} id="contact" className="h-screen relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black flex flex-col">
      {/* Enhanced aurora-like background for glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-cyan-900/10 to-indigo-900/20"></div>
      
      {/* Connecting gradient from SkillsSection */}
      <div className="absolute top-0 left-0 right-0 h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-cyan-900/10 via-slate-900/10 to-transparent"></div>
      
      {/* Enhanced aurora orbs for glassmorphism background */}
      <motion.div 
        className="absolute top-12 left-1/3 w-16 sm:w-24 md:w-32 lg:w-48 xl:w-64 2xl:w-80 h-16 sm:h-24 md:h-32 lg:h-48 xl:h-64 2xl:h-80 bg-gradient-to-br from-violet-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl will-change-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={hasAnimated ? {
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.05, 1],
          x: [0, 15, 0],
          y: [0, -10, 0],
        } : { opacity: 0, scale: 0.8 }}
        transition={{
          duration: 16,
          repeat: hasAnimated ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/5 right-1/4 w-14 sm:w-20 md:w-28 lg:w-40 xl:w-56 2xl:w-72 h-14 sm:h-20 md:h-28 lg:h-40 xl:h-56 2xl:h-72 bg-gradient-to-tl from-indigo-500/25 via-purple-500/15 to-transparent rounded-full blur-3xl will-change-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={hasAnimated ? {
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 0.95, 1],
          x: [0, -12, 0],
          y: [0, 8, 0],
        } : { opacity: 0, scale: 0.8 }}
        transition={{
          duration: 18,
          repeat: hasAnimated ? Infinity : 0,
          ease: "easeInOut",
          delay: hasAnimated ? 3 : 0
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/6 w-12 sm:w-16 md:w-24 lg:w-32 xl:w-40 2xl:w-48 h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40 2xl:h-48 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-2xl will-change-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={hasAnimated ? {
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.08, 1],
          x: [0, 8, 0],
          y: [0, -6, 0],
        } : { opacity: 0, scale: 0.8 }}
        transition={{
          duration: 14,
          repeat: hasAnimated ? Infinity : 0,
          ease: "easeInOut",
          delay: hasAnimated ? 1.5 : 0
        }}
      />
      
      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10 md:opacity-15">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12 px-3 sm:px-4 flex-shrink-0"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-neutral-300 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Choose your preferred way to connect with me.
          </p>
        </motion.div>

        {/* Glassmorphism Contact Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex items-center justify-center px-2 sm:px-3 md:px-4"
        >
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
              {contactCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={hasAnimated ? { 
                      opacity: 1, 
                      scale: 1, 
                      y: 0 
                    } : { 
                      opacity: 0, 
                      scale: 0.9, 
                      y: 50 
                    }}
                    transition={{ 
                      duration: 0.7, 
                      delay: hasAnimated ? index * 0.1 + 0.3 : 0,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="group"
                  >
                    <div className="relative h-full">
                      {/* Glassmorphism Card */}
                      <div className="relative h-full p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 rounded-lg sm:rounded-xl md:rounded-2xl backdrop-blur-xl bg-white/[0.05] border border-white/[0.1] shadow-2xl transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.2] group-hover:shadow-3xl group-hover:scale-[1.02] min-h-[140px] sm:min-h-[160px] md:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px]">
                        
                        {/* Gradient overlay for depth */}
                        <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-white/[0.1] via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                        
                        {/* Subtle inner glow */}
                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div>
                            {/* Icon and Title */}
                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                              <div className={`${card.iconColor} transition-all duration-300 group-hover:scale-110`}>
                                <IconComponent size={24} strokeWidth={1.5} className="sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
                              </div>
                              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white group-hover:text-white transition-colors">
                                {card.title}
                              </h3>
                            </div>
                            
                            {/* Description */}
                            <p className="text-neutral-200 mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                              {card.description}
                            </p>
                            
                            {/* Contact Link */}
                            <a 
                              href={card.href}
                              target={card.href.startsWith('http') ? "_blank" : undefined}
                              rel={card.href.startsWith('http') ? "noopener noreferrer" : undefined}
                              className={`${card.color} font-medium text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 hover:underline hover:scale-105 inline-block`}
                            >
                              {card.contact}
                            </a>
                          </div>
                          
                          {/* Status */}
                          <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 flex items-center gap-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                            <span className="text-xs sm:text-sm text-neutral-300 group-hover:text-neutral-200 transition-colors">
                              {card.status}
                            </span>
                          </div>
                        </div>
                        
                        {/* Hover highlight effect */}
                        <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Footer/Copyright Section with glassmorphism */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center pt-1 sm:pt-2 md:pt-3 lg:pt-4 xl:pt-6 max-w-4xl mx-auto px-3 sm:px-4 flex-shrink-0"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 