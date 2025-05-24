"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const Boxes = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const rows = 5;
  const cols = 10;

  const generateRandomColor = () => {
    const colors = [
      "rgb(255, 255, 255, 0.01)",
      "rgb(255, 255, 255, 0.02)",
      "rgb(255, 255, 255, 0.03)",
      "rgb(255, 255, 255, 0.04)",
      "rgb(255, 255, 255, 0.05)",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full bg-neutral-950 flex items-center justify-center",
        className
      )}
      {...props}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: "100%",
          height: "100%",
          gap: "1px",
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-neutral-900 h-full w-full rounded-lg"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              backgroundColor: generateRandomColor(),
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              repeatDelay: Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}; 