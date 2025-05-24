"use client";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const SkillsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  // Track if animations have run in this session
  useEffect(() => {
    try {
      const hasAnimatedBefore = sessionStorage.getItem('skillsSectionAnimated') === 'true';
      setHasAnimated(hasAnimatedBefore);
    } catch (e) {
      console.error("Session storage not available:", e);
    }
  }, []);

  // Trigger animations only once when in view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      try {
        sessionStorage.setItem('skillsSectionAnimated', 'true');
      } catch (e) {
        console.error("Session storage not available:", e);
      }
    }
  }, [isInView, hasAnimated]);

const skillCategories = [
  {
      id: 1,
      title: "Frontend Development",
      icon: "💻",
      titleColor: "text-cyan-400",
      progressColor: "bg-cyan-400",
      accentColor: "text-cyan-400",
    description: "Building responsive, interactive user interfaces with modern frameworks",
      technologies: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript ES6+", level: 93 }
      ],
      projects: "Sharove E-Commerce, Agent-based UIs, Payment Dashboards"
    },
    {
      id: 2,
      title: "Backend Architecture",
      icon: "⚙️",
      titleColor: "text-green-400",
      progressColor: "bg-green-400",
      accentColor: "text-green-400",
      description: "Designing scalable server-side solutions and robust APIs",
      technologies: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Firebase", level: 92 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 60 },
        { name: "Microservices", level: 80 }
      ],
      projects: "Cloud Functions, Payment Processing, API Integration"
    },
    {
      id: 3,
      title: "Database & Cloud",
      icon: "🗄️",
      titleColor: "text-blue-400",
      progressColor: "bg-blue-400",
      accentColor: "text-blue-400",
      description: "Managing data storage and cloud infrastructure solutions",
      technologies: [
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 88 },
        { name: "AWS", level: 68 },
        { name: "Azure", level: 70 },
        { name: "Redis", level: 70 },
        { name: "Prisma ORM", level: 85 }
      ],
      projects: "Cloud Architecture, Data Synchronization, Multi-API Systems"
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      icon: "🤖",
      titleColor: "text-purple-400",
      progressColor: "bg-purple-400",
      accentColor: "text-purple-400",
      description: "Integrating AI/ML solutions and large language models",
      technologies: [
        { name: "Large Language Models", level: 88 },
        { name: "RAG Systems", level: 75 },
        { name: "Model Fine-tuning", level: 60 },
        { name: "Vector Databases", level: 60 },
        { name: "Python", level: 80 },

      ],
      projects: "E-commerce RAG Agent, Autonomous Agents, AI Integrations"
    },
    {
      id: 5,
      title: "DevOps & Tools",
      icon: "🔧",
      titleColor: "text-orange-400",
      progressColor: "bg-orange-400",
      accentColor: "text-orange-400",
      description: "Streamlining development workflows and deployment processes",
      technologies: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 50 },
        { name: "CI/CD Pipelines", level: 60 },
        { name: "Git/GitHub", level: 70 },
      ],
      projects: "Automated Deployments, Container Orchestration, Pipeline Setup"
    },
    {
      id: 6,
      title: "Leadership & Soft Skills",
      icon: "👥",
      titleColor: "text-pink-400",
      progressColor: "bg-pink-400",
      accentColor: "text-pink-400",
      description: "Leading teams and driving technical excellence",
      technologies: [
        { name: "Team Leadership", level: 90 },
        { name: "Technical Mentoring", level: 88 },
        { name: "Project Management", level: 85 },
        { name: "Problem Solving", level: 92 },
        { name: "Communication", level: 90 },
        { name: "Code Review", level: 93 }
      ],
      projects: "Team Development, Technical Documentation, Knowledge Sharing"
    }
  ];

  const currentTechStack = [
    "React.js", "Next.js", "TypeScript", "Node.js", "Firebase", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "AI/ML", "Tailwind CSS", "Express.js"
  ];

  return (
    <section ref={ref} id="skills" className="relative w-full bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Aurora-like background effects transitioning from Experience with optimized performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-black"></div>
      
      {/* Connecting gradient from ExperienceSection */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-purple-900/10 via-cyan-900/15 to-transparent"></div>
      
      {/* Aurora orbs with cyan/blue theme - reduced movement for better scroll performance */}
      <motion.div 
        className="absolute top-32 right-1/4 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-gradient-to-br from-cyan-500/35 via-blue-500/25 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, -15, 0],
          y: [0, 10, 0],
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/5 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-tl from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, 12, 0],
          y: [0, -9, 0],
          scale: [1, 0.97, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 sm:w-56 md:w-72 h-44 sm:h-56 md:h-72 bg-gradient-to-r from-teal-500/25 via-cyan-500/15 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, 8, 0],
          y: [0, -6, 0],
          scale: [1, 1.03, 1],
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Bottom gradient connecting to ContactSection */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Title Section */}
        <motion.div
          initial={!hasAnimated ? { opacity: 0.5, y: 60 } : { opacity: 1, y: 0 }}
          animate={hasAnimated || isInView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 60 }}
          transition={{
            delay: hasAnimated ? 0 : 0.1,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="bg-gradient-to-br from-neutral-200 to-neutral-500 bg-clip-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-transparent mb-4 sm:mb-6 md:mb-8">
          Skills & Expertise
        </h2>

          <motion.p
            initial={!hasAnimated ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={hasAnimated || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              delay: hasAnimated ? 0 : 0.2,
              duration: 0.3,
              ease: "easeOut",
            }}
            className="text-neutral-300 text-center max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed"
          >
            Comprehensive technical expertise across full-stack development, AI/ML integration, and cloud infrastructure.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={!hasAnimated ? { opacity: 0, y: 60 } : { opacity: 1, y: 0 }}
          animate={hasAnimated || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            delay: hasAnimated ? 0 : 0.3,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="w-full mb-16 sm:mb-20 md:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={!hasAnimated ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
                animate={hasAnimated || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                  duration: 0.3, 
                  delay: hasAnimated ? 0 : 0.4 + index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-4 sm:p-6 md:p-8 hover:border-neutral-700/70 transition-all duration-300 min-h-[400px] sm:min-h-[450px] flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="text-xl sm:text-2xl">{category.icon}</div>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${category.titleColor}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-neutral-300 mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Technologies with Progress Bars */}
                <div className="flex-1 space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-1 sm:space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-xs sm:text-sm font-medium">{tech.name}</span>
                        <span className="text-neutral-400 text-xs">{tech.level}%</span>
                  </div>
                      <div className="w-full bg-neutral-800 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={(hasAnimated || isInView) ? { width: `${tech.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: hasAnimated ? 0 : 0.6 + techIndex * 0.05,
                            ease: "easeOut"
                          }}
                          className={`${category.progressColor} h-1.5 sm:h-2 rounded-full`}
              />
            </div>
                    </div>
                  ))}
                </div>

                {/* Projects */}
                <div className="mt-auto pt-4 sm:pt-6 border-t border-neutral-800">
                  <p className="text-xs leading-relaxed text-neutral-400">
                    <span className={`${category.accentColor} font-semibold`}>Recent Projects:</span> {category.projects}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Highlights */}
          <motion.div 
          initial={!hasAnimated ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
          animate={hasAnimated || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            delay: hasAnimated ? 0 : 0.8,
            duration: 0.3,
            ease: "easeOut",
          }}
          className="w-full mb-12 sm:mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-neutral-800 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 md:mb-12 text-center">
              Professional Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-3 sm:mb-4 group-hover:text-cyan-300 transition-colors">3+</div>
                <div className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3">Years Experience</div>
                <div className="text-neutral-400 leading-relaxed text-sm sm:text-base">Building scalable applications across multiple industries</div>
              </motion.div>
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-3 sm:mb-4 group-hover:text-green-300 transition-colors">15+</div>
                <div className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3">Technologies</div>
                <div className="text-neutral-400 leading-relaxed text-sm sm:text-base">Mastered across full-stack development and AI/ML</div>
              </motion.div>
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors">50+</div>
                <div className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3">Projects Delivered</div>
                <div className="text-neutral-400 leading-relaxed text-sm sm:text-base">From startups to enterprise-level solutions</div>
              </motion.div>
            </div>
          </div>
          </motion.div>

        {/* Current Tech Stack */}
        <motion.div
          initial={!hasAnimated ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={hasAnimated || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            delay: hasAnimated ? 0 : 0.9,
            duration: 0.3,
            ease: "easeOut",
          }}
          className="w-full"
        >
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-10 text-center">
            Currently Working With
          </h4>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto">
            {currentTechStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={!hasAnimated ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                animate={hasAnimated || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{
                  delay: hasAnimated ? 0 : 1.0 + index * 0.03,
                  duration: 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 sm:px-4 py-2 sm:py-3 bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium hover:bg-neutral-700/50 hover:border-neutral-600 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
                  </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 