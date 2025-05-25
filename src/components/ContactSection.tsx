"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { EvervaultCard } from "@/components/ui/evervault-card";

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
      icon: "📧",
      description: "Let's discuss your project via email",
      contact: "shahzaibrehman40@gmail.com",
      href: "mailto:shahzaibrehman40@gmail.com",
      status: "Usually responds within 24h",
      color: "text-blue-400 hover:text-blue-300",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 2,
      title: "Phone",
      icon: "📞",
      description: "Call me for immediate discussion",
      contact: "+92 313 476 6457",
      href: "tel:+923134766457",
      status: "Available Mon-Fri, 9 AM - 6 PM PKT",
      color: "text-cyan-400 hover:text-cyan-300",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "GitHub",
      icon: "🐙",
      description: "Explore my code and projects",
      contact: "@CodingWithShahzaib",
      href: "https://github.com/CodingWithShahzaib",
      status: "50+ repositories • 500+ contributions",
      color: "text-purple-400 hover:text-purple-300",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 4,
      title: "LinkedIn",
      icon: "💼",
      description: "Let's connect professionally",
      contact: "/in/shahzaib-rehman",
      href: "https://www.linkedin.com/in/shahzaib-rehman-1246591a6/",
      status: "500+ connections • Tech Industry",
      color: "text-blue-400 hover:text-blue-300",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      title: "Message",
      icon: "💬",
      description: "Send me a detailed project inquiry",
      contact: "Start Conversation →",
      href: "mailto:shahzaibrehman40@gmail.com?subject=Project%20Inquiry%20-%20Let's%20Work%20Together&body=Hi%20Shahzaib,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%20Here%20are%20the%20details:%0A%0A•%20Project%20Type:%20%0A•%20Timeline:%20%0A•%20Budget%20Range:%20%0A•%20Key%20Requirements:%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20regards,",
      status: "Pre-filled template • Easy to customize",
      color: "text-green-400 hover:text-green-300",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 6,
      title: "Status",
      icon: "⚡",
      description: "Current availability & status",
      contact: "Available for new projects",
      href: "#",
      status: "Response time: 24h • Open to remote work",
      color: "text-emerald-400 hover:text-emerald-300",
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section ref={ref} id="contact" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black">
      {/* Aurora-like background transitioning to grid with optimized performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/15 to-black"></div>
      
      {/* Connecting gradient from SkillsSection */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-cyan-900/10 via-slate-900/10 to-transparent"></div>
      
      {/* Final aurora orbs with subtle colors and reduced movement - only animate once */}
      <motion.div 
        className="absolute top-20 left-1/3 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-slate-500/25 via-neutral-500/15 to-transparent rounded-full blur-3xl will-change-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={hasAnimated ? {
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.02, 1],
          x: [0, 10, 0],
          y: [0, -8, 0],
        } : { opacity: 0, scale: 0.8 }}
        transition={{
          duration: 16,
          repeat: hasAnimated ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-44 sm:w-56 md:w-72 h-44 sm:h-56 md:h-72 bg-gradient-to-tl from-gray-500/20 via-slate-500/10 to-transparent rounded-full blur-3xl will-change-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={hasAnimated ? {
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 0.98, 1],
          x: [0, -9, 0],
          y: [0, 6, 0],
        } : { opacity: 0, scale: 0.8 }}
        transition={{
          duration: 18,
          repeat: hasAnimated ? Infinity : 0,
          ease: "easeInOut",
          delay: hasAnimated ? 3 : 0
        }}
      />
      
      {/* Traditional grid background fading in with optimized opacity */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Choose your preferred way to connect with me.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 mb-16 sm:mb-20 md:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {contactCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
                animate={hasAnimated ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotateX: 0 
                } : { 
                  opacity: 0, 
                  scale: 0.9, 
                  rotateX: 15 
                }}
                transition={{ 
                  duration: 0.7, 
                  delay: hasAnimated ? index * 0.08 + 0.3 : 0,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="min-h-[280px] sm:min-h-[320px]"
              >
                <div className="relative h-full group">
                  <EvervaultCard text={card.icon} className="h-full" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-20 pointer-events-none">
                    <div>
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{card.title}</h3>
                      </div>
                      <p className="text-neutral-200 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                        {card.description}
                      </p>
                      <a 
                        href={card.href}
                        target={card.href.startsWith('http') ? "_blank" : undefined}
                        rel={card.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`${card.color} font-medium text-base sm:text-lg transition-colors pointer-events-auto hover:underline`}
                      >
                        {card.contact}
                      </a>
                    </div>
                    <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>{card.status}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer/Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center pt-6 sm:pt-8 border-t border-neutral-800/50 max-w-4xl mx-auto px-4"
        >
          <p className="text-neutral-500 text-sm mb-2 sm:mb-3">
            © 2024 Shahzaib Rehman. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs">
            Let&apos;s build something amazing together 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 