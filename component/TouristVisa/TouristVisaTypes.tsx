"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  Camera,
  Plane,
  Palmtree,
  Globe2,
} from "lucide-react";

const visaTypes = [
  {
    icon: (
      <Camera
        size={28}
        strokeWidth={1.8}
      />
    ),

    name: "Tourist Visa",

    duration: "Usually 1-6 months",

    requirements: [
      "Sightseeing trips",
      "Vacation travel",
      "Leisure activities",
      "Short-term stays",
    ],
  },

  {
    icon: (
      <Plane
        size={28}
        strokeWidth={1.8}
      />
    ),

    name: "Adventure Travel Visa",

    duration: "Usually 1-3 months",

    requirements: [
      "Mountain tours",
      "Safari experiences",
      "Nature exploration",
      "Outdoor activities",
    ],
  },

  {
    icon: (
      <Palmtree
        size={28}
        strokeWidth={1.8}
      />
    ),

    name: "Holiday Visa",

    duration: "Usually 1-6 months",

    requirements: [
      "Beach vacations",
      "Cruise travel",
      "Resort stays",
      "Relaxation tours",
    ],
  },

  {
    icon: (
      <Globe2
        size={28}
        strokeWidth={1.8}
      />
    ),

    name: "Cultural Visit Visa",

    duration: "Flexible duration",

    requirements: [
      "Cultural events",
      "Festival visits",
      "Heritage tours",
      "Local experiences",
    ],
  },
];

/* ── LETTER ANIMATION ── */
const AnimatedLetters = ({
  text,
  delay = 0,
  style = {},
}: {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
}) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  const container = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(4px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      style={{
        display: "inline-block",
        ...style,
      }}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {text.split("").map((char: string, i: number) => (
        <motion.span
          key={i}
          variants={letter as any}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ── FADE UP ── */
const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(6px)",
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

/* ── FLIP ICON ── */
const FlipIcon = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className="group/icon mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-[#DCE7FF] bg-transparent text-[#2563EB]"
      style={{
        perspective: "1000px",
      }}
      whileHover={{
        scale: 1.06,
      }}
      transition={{
        duration: 0.4,
      }}
    >

      <motion.div
        className="flex h-full w-full items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          rotateY: 180,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>

    </motion.div>
  );
};

const TouristVisaTypes = () => {
  return (
    <section className="bg-[#F8FAFC] px-4 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-16 lg:py-14">

      <div className="mx-auto max-w-[1400px]">

        {/* HEADING */}
        <div className="mb-10 text-center sm:mb-14">

          <FadeUp delay={0}>
            <p
              className="mb-2 text-[10px] uppercase tracking-[0.42em] text-[#2563EB] sm:text-[11px]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Travel & Tourism
            </p>
          </FadeUp>

          <h2
            className="text-[36px] leading-[1] text-[#0A0F1C] sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",

              textShadow:
                "0px 1px 0px rgba(255,255,255,0.6), 0px 8px 30px rgba(10,15,28,0.08)",
            }}
          >

            <span className="text-[#0A0F1C]">

              <AnimatedLetters
                text="Types of Tourist"
                delay={0.15}
              />

            </span>{" "}

            <span className="text-[#2563EB]">

              <AnimatedLetters
                text="Visas"
                delay={0.45}
              />

            </span>

          </h2>

          <FadeUp delay={0.8}>
            <p
              className="mx-auto mt-4 max-w-[720px] text-[14px] leading-7 text-gray-500 sm:text-[15px] md:text-[16px]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              We assist travelers with multiple tourist visa
              categories for vacations, leisure travel, and
              cultural exploration worldwide.
            </p>
          </FadeUp>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {visaTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="group flex flex-col items-center rounded-[3px] border border-[#DCE7FF] bg-transparent p-6 text-center transition-all duration-500 hover:border-[#2563EB] sm:p-7"
            >

              {/* ICON */}
              <FlipIcon>

                {item.icon}

              </FlipIcon>

              {/* NAME */}
              <h3
                className="text-center text-[22px] leading-snug text-[#0A0F1C] sm:text-[24px] md:text-[26px]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",

                  fontWeight: 600,
                }}
              >
                {item.name}
              </h3>

              {/* DURATION */}
              <p
                className="mt-2 text-center text-[13px] text-[#2563EB] sm:text-[14px]"
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                }}
              >
                {item.duration}
              </p>

              {/* DIVIDER */}
              <div className="my-5 h-[1px] w-full bg-[#E5E7EB]" />

              {/* REQUIREMENTS */}
              <ul className="flex flex-col items-center space-y-3">

                {item.requirements.map((req, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-3 text-center text-[13px] leading-6 text-gray-500 sm:text-[14px]"
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                    }}
                  >

                    <span className="h-[5px] w-[5px] min-w-[5px] rounded-full bg-[#2563EB]" />

                    {req}

                  </li>
                ))}

              </ul>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
export default TouristVisaTypes;