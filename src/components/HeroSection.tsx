"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Animated name component with futuristic glitch effects
const GlitchName = () => {
  return (
    <div className="relative">
      <h1 
        className={`${inter.className} text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 md:mb-8 relative z-10`}
      >
        Shahzaib Rehman
      </h1>
      
      {/* Red glitch layer */}
      <h1 
        className={`${inter.className} text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-red-500 mb-6 md:mb-8 absolute top-0 left-0 animate-pulse opacity-75`}
        style={{
          animation: 'glitch-red 2s infinite linear',
          clipPath: 'inset(0 0 0 0)',
          transform: 'translateX(2px)'
        }}
      >
        Shahzaib Rehman
      </h1>
      
      {/* Cyan glitch layer */}
      <h1 
        className={`${inter.className} text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-400 mb-6 md:mb-8 absolute top-0 left-0 animate-pulse opacity-75`}
        style={{
          animation: 'glitch-cyan 2.5s infinite linear',
          clipPath: 'inset(0 0 0 0)',
          transform: 'translateX(-2px)'
        }}
      >
        Shahzaib Rehman
      </h1>
      
      <style jsx global>{`
        @keyframes glitch-red {
          0%, 100% { clip-path: inset(0 0 0 0); opacity: 0; }
          5% { clip-path: inset(40% 0 30% 0); opacity: 0.8; }
          10% { clip-path: inset(92% 0 1% 0); opacity: 0; }
          15% { clip-path: inset(43% 0 1% 0); opacity: 0.9; }
          20% { clip-path: inset(25% 0 58% 0); opacity: 0; }
          25% { clip-path: inset(54% 0 7% 0); opacity: 0.7; }
          30% { clip-path: inset(58% 0 43% 0); opacity: 0; }
          35% { clip-path: inset(54% 0 18% 0); opacity: 0.8; }
          40% { clip-path: inset(22% 0 67% 0); opacity: 0; }
          45% { clip-path: inset(78% 0 14% 0); opacity: 0.9; }
          50% { clip-path: inset(15% 0 62% 0); opacity: 0; }
          55% { clip-path: inset(10% 0 85% 0); opacity: 0.6; }
          60% { clip-path: inset(0 0 0 0); opacity: 0; }
        }
        
        @keyframes glitch-cyan {
          0%, 100% { clip-path: inset(0 0 0 0); opacity: 0; }
          8% { clip-path: inset(25% 0 58% 0); opacity: 0.7; }
          16% { clip-path: inset(54% 0 7% 0); opacity: 0; }
          24% { clip-path: inset(78% 0 14% 0); opacity: 0.8; }
          32% { clip-path: inset(92% 0 1% 0); opacity: 0; }
          40% { clip-path: inset(43% 0 1% 0); opacity: 0.9; }
          48% { clip-path: inset(25% 0 58% 0); opacity: 0; }
          56% { clip-path: inset(54% 0 18% 0); opacity: 0.6; }
          64% { clip-path: inset(40% 0 30% 0); opacity: 0; }
          72% { clip-path: inset(22% 0 67% 0); opacity: 0.8; }
          80% { clip-path: inset(15% 0 62% 0); opacity: 0; }
          88% { clip-path: inset(10% 0 85% 0); opacity: 0.7; }
          96% { clip-path: inset(0 0 0 0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const HeroSection = () => {
  const roles = [
    "Senior Software Engineer",
    "Full-Stack Developer",
    "AI Agent Developer",
  ];

  return (
    <section id="home" className="w-full overflow-hidden">
      <AuroraBackground className="h-screen">
        
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center justify-center h-full w-full relative z-10 text-center px-4 sm:px-6"
        >
          {/* Animated name with futuristic glitch effects */}
          <GlitchName />

          <div className="mt-4 h-8 sm:h-10 flex items-center justify-center">
            <FlipWords 
              words={roles} 
              className={`${inter.className} text-base sm:text-lg md:text-2xl font-medium text-blue-400`}
              duration={3500}
            />
          </div>
          <div className="mt-4 sm:mt-6 max-w-sm sm:max-w-lg mx-auto">
            <TextGenerateEffect
              words="I'm a passionate software engineer with a focus on building efficient, scalable web applications and smart, AI-powered solutions. Whether working on full-stack apps or AI agents, I aim to deliver impactful results."
              className={`${inter.className} font-normal text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed`}
            />
          </div>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-md sm:max-w-2xl">
            {/* LinkedIn Button */}
            <a href="https://www.linkedin.com/in/shahzaib-rehman-1246591a6/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                borderRadius="1.75rem"
                className="bg-black text-white border border-neutral-800 hover:bg-black/90 hover:border-neutral-700 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                <div className={`${inter.className} flex items-center justify-center gap-2`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-sm sm:text-base font-medium">LinkedIn</span>
                </div>
              </Button>
            </a>
            
            {/* GitHub Button */}
            <a href="https://github.com/CodingWithShahzaib" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                borderRadius="1.75rem"
                className="bg-black text-white border border-neutral-800 hover:bg-black/90 hover:border-neutral-700 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                <div className={`${inter.className} flex items-center justify-center gap-2`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm sm:text-base font-medium">GitHub</span>
                </div>
              </Button>
            </a>

            {/* Resume Button */}
            <a href="/Shahzaib Rehman.pdf" download="Shahzaib_Rehman_Resume.pdf" className="w-full sm:w-auto">
              <Button
                borderRadius="1.75rem"
                className="bg-black text-white border border-neutral-800 hover:bg-black/90 hover:border-neutral-700 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                <div className={`${inter.className} flex items-center justify-center gap-2`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-sm sm:text-base font-medium">Resume</span>
                </div>
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Scroll Down Indicator - positioned relative to full screen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center cursor-pointer z-20"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          <div className="flex flex-col items-center gap-2 group">
            <span className={`${inter.className} text-neutral-400 text-xs sm:text-sm font-medium group-hover:text-neutral-200 transition-colors`}>
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center p-2 rounded-full border border-neutral-600 group-hover:border-neutral-400 transition-colors w-10 h-10"
            >
              <svg
                className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default HeroSection;
