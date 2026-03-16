"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Code2, Mail } from "lucide-react";

const navItems = [
  { name: "Home", link: "/#home", icon: Home },
  { name: "About", link: "/#about", icon: User },
  { name: "Experience", link: "/#experience", icon: Briefcase },
  { name: "Skills", link: "/#skills", icon: Code2 },
  { name: "Contact", link: "/#contact", icon: Mail },
];

function DockIcon({
  mouseX,
  item,
  isActive,
  onClick,
}: {
  mouseX: MotionValue<number>;
  item: (typeof navItems)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 56, 40]);
  const heightSync = useTransform(distance, [-150, 0, 150], [40, 56, 40]);
  const iconSizeSync = useTransform(distance, [-150, 0, 150], [18, 26, 18]);

  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });
  const iconSize = useSpring(iconSizeSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Icon = item.icon;

  return (
    <a href={item.link} onClick={onClick}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        className={cn(
          "relative flex items-center justify-center rounded-xl transition-colors duration-200 group cursor-pointer",
          isActive
            ? "bg-white/[0.12] border border-white/[0.2]"
            : "hover:bg-white/[0.08] border border-transparent"
        )}
      >
        <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
          <Icon
            className={cn(
              "w-full h-full transition-colors duration-200",
              isActive ? "text-cyan-400" : "text-neutral-400 group-hover:text-white"
            )}
            strokeWidth={1.5}
          />
        </motion.div>

        {isActive && (
          <motion.div
            layoutId="dock-active-dot"
            className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-cyan-400"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-neutral-900 border border-white/10 text-[10px] text-neutral-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {item.name}
        </div>
      </motion.div>
    </a>
  );
}

const Navbar = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const handleItemClick = useCallback((itemName: string) => {
    setActiveItem(itemName);
    setMobileMenuOpen(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 100 }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed bottom-6 inset-x-0 mx-auto z-50 flex justify-center",
          className
        )}
      >
        {/* Desktop Dock */}
        <motion.nav
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="hidden md:flex items-end gap-1.5 px-3 py-2 rounded-2xl glass glow-cyan"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <DockIcon
              key={item.name}
              mouseX={mouseX}
              item={item}
              isActive={activeItem === item.name}
              onClick={() => handleItemClick(item.name)}
            />
          ))}
        </motion.nav>

        {/* Mobile Bottom Bar */}
        <motion.nav
          className="flex md:hidden items-center gap-1 px-3 py-2 rounded-2xl glass glow-cyan mx-4 w-full max-w-sm justify-around"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleItemClick(item.name)}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all duration-200",
                  activeItem === item.name
                    ? "text-cyan-400"
                    : "text-neutral-500 hover:text-white"
                )}
              >
                <Icon size={18} strokeWidth={1.5} />
                <span className="text-[9px] font-medium">{item.name}</span>
                {activeItem === item.name && (
                  <motion.div
                    layoutId="mobile-active-dot"
                    className="w-1 h-1 rounded-full bg-cyan-400 -mt-0.5"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </motion.nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
