"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./ui/resizable-navbar";
const logo = "</Dev>";
// Custom NavbarLogo component
const NavbarLogo = () => {
  return (
    <a
      href="#home"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
    >
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        {logo}
      </span>
    </a>
  );
};

const navItems = [
  { name: "Home", link: "/#home" },
  { name: "About", link: "/#about" },
  { name: "Experience", link: "/#experience" },
  { name: "Skills", link: "/#skills" },
  { name: "Contact", link: "/#contact" },
];

const Navbar = ({ className }: { className?: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile and adjust accordingly
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 mx-auto z-50 px-4 py-2 md:top-5 md:px-6",
        mobileMenuOpen && "bg-black/90 h-screen",
        className
      )}
    >
      <ResizableNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="relative z-20 flex items-center">
            <NavbarButton href="/#contact" variant="dark" className="ml-auto">
              Contact Me
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu}>
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={closeMobileMenu}
                className="w-full px-4 py-3 text-lg font-medium text-black hover:bg-gray-100 rounded-md dark:text-white dark:hover:bg-neutral-800 touch-manipulation"
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              href="/#contact"
              variant="primary"
              className="mt-6 w-full py-3"
            >
              Contact Me
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
};

export default Navbar;
