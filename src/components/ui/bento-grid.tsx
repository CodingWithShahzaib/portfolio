"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  hoverEffect = true,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  hoverEffect?: boolean;
}) => {
  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              scale: 1.02,
              transition: { duration: 0.2 },
            }
          : {}
      }
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-black/[0.15] backdrop-blur-sm border border-neutral-800 flex flex-col justify-between",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon && <div className="mb-2">{icon}</div>}
        {title && (
          <div className="font-bold text-neutral-200 mb-2 mt-2">{title}</div>
        )}
        {description && (
          <div className="text-sm text-neutral-400">{description}</div>
        )}
      </div>
    </motion.div>
  );
}; 