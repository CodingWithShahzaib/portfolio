"use client";
import React, { useState, useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion, useInView } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AboutSection = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true);
  const [hasAnimatedEver, setHasAnimatedEver] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
  });

  // Check if we're on mobile and if we've already animated in this session
  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check animation state
    try {
      const hasAnimated =
        sessionStorage.getItem("aboutSectionAnimated") === "true";
      setHasAnimatedEver(hasAnimated);
    } catch (e) {
      console.error("Session storage not available:", e);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Track scroll direction with throttling for better performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > prevScrollY) {
            setScrollingDown(true);
          } else {
            setScrollingDown(false);
          }

          setPrevScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Add touch move event for mobile with throttling
    let touchTicking = false;
    const handleTouchMove = (e: TouchEvent) => {
      if (!touchTicking && e.touches && e.touches.length) {
        requestAnimationFrame(() => {
          const currentY = e.touches[0].clientY;
          if (currentY < prevScrollY) {
            setScrollingDown(true);
          } else {
            setScrollingDown(false);
          }
          setPrevScrollY(currentY);
          touchTicking = false;
        });

        touchTicking = true;
      }
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [prevScrollY]);

  // Trigger animation only once when scrolling down from hero section
  useEffect(() => {
    if (isInView && scrollingDown && !hasAnimatedEver) {
      setAnimationKey((prev) => prev + 1);
      setHasAnimatedEver(true);
      // Save animation state to session storage
      try {
        sessionStorage.setItem("aboutSectionAnimated", "true");
      } catch (e) {
        console.error("Session storage not available:", e);
      }
    }
  }, [isInView, scrollingDown, hasAnimatedEver]);

  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden"
    >
      {/* Aurora-like background effects transitioning from hero with optimized performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900/20 to-black"></div>

      {/* Aurora orbs with reduced movements for better scroll performance - constrained within viewport */}
      <motion.div
        className="absolute -top-20 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-green-400/30 via-blue-400/20 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
          scale: [1, 1.03, 1],
          opacity: [0.6, 0.7, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/5 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-tr from-blue-400/25 via-green-400/15 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, -10, 0],
          y: [0, 10, 0],
          scale: [1, 0.97, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gradient-to-tl from-emerald-400/20 via-cyan-400/15 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, 8, 0],
          y: [0, -5, 0],
          scale: [1, 1.01, 1],
          opacity: [0.5, 0.55, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Connecting gradient fade from aurora to section content */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>

      <div className="relative z-10 w-full">
        <ContainerScroll
          titleComponent={
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full px-4 md:px-8 mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
                My Journey
              </h2>
              <TextGenerateEffect
                key={animationKey}
                words="From curious beginner to senior engineer - discover the story behind the code, the passion that drives innovation, and the vision that shapes the future."
                className="font-normal text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-2xl md:max-w-4xl mx-auto leading-relaxed"
                filter={true}
                duration={isMobile ? 0.5 : 0.7}
              />
            </motion.div>
          }
          className="bg-transparent"
        >
          <BackgroundGradient
            className="w-full h-full rounded-[22px] p-4 md:p-6 bg-black/80 backdrop-blur-sm"
            containerClassName="w-full h-full"
          >
            <div className="w-full h-full overflow-hidden flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 space-y-8 sm:space-y-10 md:space-y-12">
              {/* Personal Insights */}
              <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 rounded-xl p-6 sm:p-8 border border-neutral-700 backdrop-blur-sm max-w-6xl mx-auto w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 text-center">
                  Beyond the Code 🚀
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl mb-4">🌱</div>
                    <h4 className="text-lg sm:text-xl font-medium text-white mb-3">
                      Growth Mindset
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      I believe every challenge is an opportunity to learn
                      something new and push boundaries.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl mb-4">🤝</div>
                    <h4 className="text-lg sm:text-xl font-medium text-white mb-3">
                      Team Player
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Great software is built by great teams. I thrive in
                      collaborative environments.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl mb-4">🎨</div>
                    <h4 className="text-lg sm:text-xl font-medium text-white mb-3">
                      Creative Problem Solver
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      I love finding innovative solutions that surprise and
                      delight users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default AboutSection;
