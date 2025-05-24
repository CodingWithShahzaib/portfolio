"use client";

import { cn } from "@/utils/cn";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const Marquee = ({
  children,
  className,
  pauseOnHover = false,
  reverse = false,
  fade = true,
  speed = 1,
}: {
  children?: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  speed?: number;
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number | null>(null);

  const checkOverflow = () => {
    if (marqueeRef.current) {
      const isOverflowing =
        marqueeRef.current.scrollWidth > marqueeRef.current.clientWidth;
      setHasOverflow(isOverflowing);
    }
  };

  const handleResize = () => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth);
      checkOverflow();
    }
  };

  // Initial setup
  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth);
      setRendered(true);
      checkOverflow();
    }

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation effect
  useEffect(() => {
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      if (elapsed > 16) { // Limit to ~60fps
        lastTimestamp = timestamp;
        
        if (marqueeRef.current && hasOverflow && !isPaused) {
          const moveSpeed = speed * 0.5; // Increased speed multiplier
          const newTranslateX = reverse
            ? translateX + moveSpeed
            : translateX - moveSpeed;
          
          if (Math.abs(newTranslateX) > marqueeWidth / 2) {
            setTranslateX(0);
          } else {
            setTranslateX(newTranslateX);
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup animation
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasOverflow, isPaused, reverse, speed, translateX, marqueeWidth]);

  return (
    <div
      ref={marqueeRef}
      className={cn("relative flex overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {fade && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent"></div>
        </>
      )}
      
      <div
        className="flex items-center gap-4 animate-none min-w-full"
        style={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        {children}
        {children}
        {children} {/* Add extra children to ensure continuous scrolling */}
      </div>
    </div>
  );
};

export const MarqueeItem = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex-shrink-0", className)}>
    {children}
  </div>
);

export const MarqueeGroup = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex flex-col gap-10 [perspective:1000px] [transform-style:preserve-3d]",
      className
    )}
  >
    {children}
  </div>
); 
