"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "bg-neutral-900 rounded-lg p-4 relative cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-20">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-neutral-100">{text}</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute top-0"
        >
          <h3 className="text-2xl font-bold text-indigo-500">{revealText}</h3>
        </motion.div>
      </div>

      <div className="mt-4">{children}</div>

      <div
        className={cn(
          "absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-900/[0.2] via-transparent to-transparent rounded-lg z-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}; 