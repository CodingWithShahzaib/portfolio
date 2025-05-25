"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface ImageData {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ExpandableCarouselProps {
  images: ImageData[];
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: {
  type: string;
  title: string;
  handleClick: () => void;
}) => {
  return (
    <button
      className={`w-8 h-8 flex items-center mx-1 justify-center bg-neutral-200 dark:bg-neutral-800 border-2 border-transparent rounded-full focus:border-cyan-400 focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200 w-4 h-4" />
    </button>
  );
};

export function ExpandableCarousel({ images }: ExpandableCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState<ImageData | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? images.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === images.length ? 0 : next);
  };

  const handleImageClick = (image: ImageData) => {
    setActive(image);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
      // Hide navbar when image is opened
      const navbar = document.querySelector('div[class*="fixed"][class*="top-"][class*="z-50"]') as HTMLElement;
      if (navbar) {
        navbar.style.display = "none";
      }
    } else {
      document.body.style.overflow = "auto";
      // Show navbar when image is closed
      const navbar = document.querySelector('div[class*="fixed"][class*="top-"][class*="z-50"]') as HTMLElement;
      if (navbar) {
        navbar.style.display = "block";
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      // Ensure navbar is visible when component unmounts
      document.body.style.overflow = "auto";
      const navbar = document.querySelector('div[class*="fixed"][class*="top-"][class*="z-50"]') as HTMLElement;
      if (navbar) {
        navbar.style.display = "block";
      }
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Expandable Modal */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-10 w-10 z-[110] hover:bg-gray-100 transition-colors"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative max-w-[95vw] max-h-[95vh] flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="flex-1">
                <img
                  src={active.src}
                  alt={active.alt}
                  className="w-full h-full object-contain rounded-t-2xl"
                  style={{ maxHeight: '80vh', maxWidth: '90vw' }}
                />
              </motion.div>

              <div className="p-4 bg-neutral-900/95 backdrop-blur-sm">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-lg text-white mb-2"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-neutral-300 text-sm leading-relaxed"
                >
                  {active.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Carousel */}
      <div className="relative w-full">
        {/* Main carousel container */}
        <div className="relative overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={`carousel-${image.title}-${index}`}
                className="w-full flex-shrink-0"
              >
                <motion.div
                  layoutId={`card-${image.title}-${id}`}
                  onClick={() => handleImageClick(image)}
                  className="cursor-pointer group relative"
                >
                  <motion.div layoutId={`image-${image.title}-${id}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-transform duration-200 group-hover:scale-105"
                    />
                  </motion.div>
                  
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-end">
                    <div className="p-4 w-full">
                      <motion.h4
                        layoutId={`title-${image.title}-${id}`}
                        className="text-white text-sm md:text-base font-semibold"
                      >
                        {image.title}
                      </motion.h4>
                      <p className="text-neutral-300 text-xs md:text-sm mt-1 line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          <CarouselControl
            type="previous"
            title="Go to previous image"
            handleClick={handlePreviousClick}
          />
          
          {/* Dots indicator */}
          <div className="flex space-x-2 mx-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  current === index 
                    ? 'bg-cyan-400' 
                    : 'bg-neutral-600 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <CarouselControl
            type="next"
            title="Go to next image"
            handleClick={handleNextClick}
          />
        </div>

        {/* Image counter */}
        <div className="text-center mt-2">
          <span className="text-neutral-400 text-xs">
            {current + 1} / {images.length}
          </span>
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
}; 