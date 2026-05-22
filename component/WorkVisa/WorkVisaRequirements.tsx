"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const leftRequirements = [
  "Valid passport with at least 6 months validity",
  "Educational qualification certificates",
  "English language proficiency test results",
  "Police clearance certificates",
];

const rightRequirements = [
  "Job offer letter from employer",
  "Work experience certificates",
  "Medical examination reports",
  "Financial proof documents",
];

/* ── Animated Letters ── */
const AnimatedLetters = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
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
      y: 20,
      rotateX: -40,
      filter: "blur(4px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
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
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{
        display: "inline-block",
        perspective: "600px",
      }}
    >
      {text.split("").map((char, i) => (
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

export default function WorkVisaRequirements() {
  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <img
          src="F1.png"
          alt="Background"
          className="h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/35" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-4 py-14 sm:px-6 md:px-8 md:py-16 lg:px-16 lg:py-20">

        {/* HEADING */}
        <div className="text-center">

          {/* SMALL TITLE */}
          <p
            className="mb-2 text-[9px] uppercase tracking-[0.42em] text-[#2563EB] sm:text-[10px] md:text-[12px]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Documentation Guide
          </p>

          {/* TITLE */}
          <h2
            className="text-[34px] leading-[0.95] text-[#0A0F1C] sm:text-[48px] md:text-[68px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              textShadow:
                "0px 1px 0px rgba(255,255,255,0.6), 0px 8px 30px rgba(10,15,28,0.08)",
            }}
          >

            <span className="text-[#0A0F1C]">

              <AnimatedLetters
                text="Work Visa"
                delay={0.15}
              />

            </span>{" "}

            <span className="text-[#2563EB]">

              <AnimatedLetters
                text="Requirements"
                delay={0.45}
              />

            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="mx-auto mt-4 max-w-[720px] px-2 text-[13px] leading-7 text-[#374151] sm:text-[14px] md:text-[15px]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            While requirements vary by country and visa type,
            here are the common documents and criteria needed
            for successful international work visa applications.
          </p>

        </div>

        {/* REQUIREMENTS */}
        <div className="mx-auto mt-12 max-w-[1300px] md:mt-14">

          {/* MOBILE */}
          <div className="space-y-5 md:hidden">

            {[...leftRequirements, ...rightRequirements].map(
              (item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="text-center"
                >

                  <p
                    className="text-[20px] leading-[1.25] text-[#0A0F1C]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {item}
                  </p>

                </motion.div>
              )
            )}

          </div>

          {/* DESKTOP */}
          <div className="relative hidden items-start md:grid md:grid-cols-2 md:gap-x-24">

            {/* CENTER LINE */}
            <div className="absolute left-1/2 top-1 h-[88%] w-[1px] -translate-x-1/2 bg-[#0A0F1C]/10" />

            {/* LEFT SIDE */}
            <div className="space-y-6 text-right">

              {leftRequirements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end"
                >

                  <p
                    className="whitespace-nowrap text-[24px] leading-none text-[#0A0F1C] lg:text-[26px]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {item}
                  </p>

                </motion.div>
              ))}

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6 text-left">

              {rightRequirements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="flex justify-start"
                >

                  <p
                    className="whitespace-nowrap text-[24px] leading-none text-[#0A0F1C] lg:text-[26px]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {item}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}