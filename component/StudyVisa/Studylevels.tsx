"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const levels = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    name: "Undergraduate",
    duration: "3-4 years",
    requirements: ["High school diploma", "English proficiency", "SAT/ACT scores"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    name: "Graduate",
    duration: "1-2 years",
    requirements: ["Bachelor's degree", "GRE/GMAT scores", "Letters of recommendation"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    name: "Doctorate",
    duration: "3-7 years",
    requirements: ["Master's degree", "Research proposal", "Academic references"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    name: "Language Courses",
    duration: "3-12 months",
    requirements: ["Basic education", "Motivation letter", "Financial proof"],
  },
];

/* ── Letter-by-letter animated heading ── */
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
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03, delayChildren: delay } },
  };

  const letter = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      ref={ref}
      style={{ display: "inline-block", ...style }}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      aria-label={text}
    >
      {text.split("").map((char: string, i: number) => (
        <motion.span
          key={i}
          variants={letter as any}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ── Fade-up ── */
const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ── Flip Icon on hover ── */
const FlipIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
      style={{ background: "#EFF6FF", perspective: "600px" }}
      whileHover={{
        rotateY: 180,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {children}
    </motion.div>
  );
};

const StudyLevels = () => {
  return (
    <section className="bg-[#F8FAFC] px-4 pt-16 pb-10 sm:px-6 sm:pt-20 md:px-10 lg:px-16 lg:pt-24 lg:pb-20">
      <div className="mx-auto max-w-[1400px]">

        {/* ── HEADING ── */}
        <div className="mb-12 text-center sm:mb-16">

          <FadeUp delay={0}>
            <p
              className="mb-2 text-[11px] uppercase tracking-[0.45em] text-[#2563EB]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Academic Pathways
            </p>
          </FadeUp>

          <h2
            className="text-4xl leading-[1] text-[#0A0F1C] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              textShadow: "0px 1px 0px rgba(255,255,255,0.6), 0px 8px 30px rgba(10,15,28,0.08)",
            }}
          >
            <span className="text-[#0A0F1C]">
              <AnimatedLetters text="Study Levels" delay={0.15} />
            </span>{" "}
            <span className="text-[#2563EB]">
              <AnimatedLetters text="We Support" delay={0.45} />
            </span>
          </h2>

          <FadeUp delay={0.8}>
            <p
              className="mx-auto mt-4 max-w-[640px] text-[14px] leading-7 text-gray-500 sm:text-[15px] md:text-[16px] md:leading-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              From undergraduate programs to doctoral research, we assist
              students at all academic levels.
            </p>
          </FadeUp>
        </div>

        {/* ── ITEMS ── */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {levels.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center rounded-2xl border border-gray-200 p-6"
            >
              {/* Flip Icon */}
              <FlipIcon>{item.icon}</FlipIcon>

              {/* Name */}
              <h3
                className="text-[20px] leading-snug text-[#0A0F1C] sm:text-[22px]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                {item.name}
              </h3>

              {/* Duration */}
              <p
                className="mt-1 text-[13px] text-gray-400"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Duration: {item.duration}
              </p>

              {/* Divider */}
              <div className="my-3 w-full border-t border-gray-200" />

              {/* Requirements */}
              <ul className="flex flex-col items-center gap-[7px]">
                {item.requirements.map((req, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[13px] text-gray-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span
                      className="h-[5px] w-[5px] flex-shrink-0 rounded-full"
                      style={{ background: "#2563EB" }}
                    />
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
};

export default StudyLevels;