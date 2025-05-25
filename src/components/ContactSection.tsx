"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const contactCards = [
    {
      id: 1,
      content: (
        <div className="text-white p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800/50 rounded-xl flex items-center justify-center border border-neutral-700">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Email</h3>
            </div>
            <p className="text-neutral-300 mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg leading-relaxed">Let&apos;s discuss your project via email</p>
            <a 
              href="mailto:shahzaibrehman40@gmail.com"
              className="text-blue-400 hover:text-blue-300 font-medium text-base sm:text-lg transition-colors break-all"
            >
              shahzaibrehman40@gmail.com
            </a>
          </div>
          <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Usually responds within 24h</span>
          </div>
        </div>
      ),
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 2,
      content: (
        <div className="text-white p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800/50 rounded-xl flex items-center justify-center border border-neutral-700">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Phone</h3>
            </div>
            <p className="text-neutral-300 mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg leading-relaxed">Call me for immediate discussion</p>
            <a 
              href="tel:+923134766457"
              className="text-cyan-400 hover:text-cyan-300 font-medium text-base sm:text-lg transition-colors"
            >
              +92 313 476 6457
            </a>
          </div>
          <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
            <span>Available Mon-Fri, 9 AM - 6 PM PKT</span>
          </div>
        </div>
      ),
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      content: (
        <div className="text-white p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800/50 rounded-xl flex items-center justify-center border border-neutral-700">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">GitHub</h3>
            </div>
            <p className="text-neutral-300 mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg leading-relaxed">Explore my code and projects</p>
            <a 
              href="https://github.com/CodingWithShahzaib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 font-medium text-base sm:text-lg transition-colors"
            >
              @CodingWithShahzaib
            </a>
          </div>
          <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
            <span>50+ repositories • 500+ contributions</span>
          </div>
        </div>
      ),
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 4,
      content: (
        <div className="text-white p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800/50 rounded-xl flex items-center justify-center border border-neutral-700">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">LinkedIn</h3>
        </div>
            <p className="text-neutral-300 mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg leading-relaxed">Let&apos;s connect professionally</p>
            <a 
              href="https://www.linkedin.com/in/shahzaib-rehman-1246591a6/"
                        target="_blank" 
                        rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 font-medium text-base sm:text-lg transition-colors"
            >
              /in/shahzaib-rehman
            </a>
                    </div>
          <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <span>500+ connections • Tech Industry</span>
          </div>
        </div>
      ),
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      content: (
        <div className="text-white p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800/50 rounded-xl flex items-center justify-center border border-neutral-700">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Message</h3>
            </div>
            <p className="text-neutral-300 mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg leading-relaxed">Send me a detailed project inquiry</p>
            <button 
              onClick={() => {
                const email = "shahzaibrehman40@gmail.com";
                const subject = "Project Inquiry - Let's Work Together";
                const body = "Hi Shahzaib,\n\nI'm interested in working with you on a project. Here are the details:\n\n• Project Type: \n• Timeline: \n• Budget Range: \n• Key Requirements: \n\nLooking forward to hearing from you!\n\nBest regards,";
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
              className="text-green-400 hover:text-green-300 font-medium text-base sm:text-lg transition-colors"
            >
              Start Conversation →
            </button>
          </div>
          <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
            <span>Pre-filled template • Easy to customize</span>
          </div>
        </div>
      ),
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 6,
      content: (
        <div className="text-white p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800/50 rounded-xl flex items-center justify-center border border-neutral-700">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Quick Info</h3>
            </div>
            <p className="text-neutral-300 mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg leading-relaxed">Current availability & status</p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium text-sm sm:text-base">Available for new projects</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-300 text-sm sm:text-base">Response time: 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-300 text-sm sm:text-base">Open to remote work</span>
              </div>
            </div>
          </div>
        </div>
      ),
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black">
      {/* Aurora-like background transitioning to grid with optimized performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/15 to-black"></div>
      
      {/* Connecting gradient from SkillsSection */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-cyan-900/10 via-slate-900/10 to-transparent"></div>
      
      {/* Final aurora orbs with subtle colors and reduced movement */}
      <motion.div 
        className="absolute top-20 left-1/3 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-slate-500/25 via-neutral-500/15 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, 10, 0],
          y: [0, -8, 0],
          scale: [1, 1.02, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-44 sm:w-56 md:w-72 h-44 sm:h-56 md:h-72 bg-gradient-to-tl from-gray-500/20 via-slate-500/10 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, -9, 0],
          y: [0, 6, 0],
          scale: [1, 0.98, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
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
          whileInView={{ opacity: 1, y: 0 }}
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
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 mb-16 sm:mb-20 md:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {contactCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 rounded-xl min-h-[280px] sm:min-h-[320px] hover:border-neutral-700/70 transition-all duration-300"
              >
                {card.content}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer/Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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