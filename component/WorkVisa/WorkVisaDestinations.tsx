"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const destinations = [
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    visa: "H-1B, L-1, O-1, TN",
    processing: "3-8 months",
  },
  {
    name: "United States",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2070&auto=format&fit=crop",
    visa: "H-1B, L-1, O-1, TN",
    processing: "3-8 months",
  },
  {
    name: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    visa: "Skilled Worker, Global Talent",
    processing: "3-8 weeks",
  },
  {
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2070&auto=format&fit=crop",
    visa: "LMIA, TFWP, IMP",
    processing: "2-6 months",
  },
];

/* ── Letter Animation ── */
const AnimatedLetters = ({
  text,
  delay = 0,
  className = "",
  style = {},
}: {
  text: string;
  delay?: number;
  className?: string;
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
      className={className}
      style={{
        display: "inline-block",
        perspective: "600px",
        ...style,
      }}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
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

/* ── Fade Up ── */
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

const WorkVisaDestinations = () => {
  return (
    <section className="bg-[#F8FAFC] px-4 py-14 sm:px-6 md:px-8 lg:px-16 lg:py-20">

      <div className="mx-auto max-w-[1400px]">

        {/* HEADING */}
        <div className="text-center">

          {/* SMALL TITLE */}
          <FadeUp delay={0}>
            <p
              className="mb-2 text-[10px] uppercase tracking-[0.38em] text-[#2563EB] sm:text-[11px] md:text-[12px]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Gateway to Your
            </p>
          </FadeUp>

          {/* TITLE */}
          <h2
            className="text-[38px] leading-[0.95] text-[#0A0F1C] sm:text-[52px] md:text-[68px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",

              textShadow:
                "0px 1px 0px rgba(255,255,255,0.6), 0px 8px 30px rgba(10,15,28,0.08)",
            }}
          >

            <span className="text-[#0A0F1C]">

              <AnimatedLetters
                text="Popular Work Visa"
                delay={0.15}
              />

            </span>{" "}

            <span className="text-[#2563EB]">

              <AnimatedLetters
                text="Destinations"
                delay={0.45}
              />

            </span>

          </h2>

          {/* DESCRIPTION */}
          <FadeUp delay={0.8}>
            <p
              className="mx-auto mt-4 max-w-[760px] px-2 text-[14px] leading-7 text-gray-500 sm:text-[15px] md:text-[16px] md:leading-8"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              We assist with work visa applications for major
              destinations worldwide, each with specific
              requirements and opportunities.
            </p>
          </FadeUp>

        </div>

        {/* CARDS */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 md:mt-14">

          {destinations.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.16)]"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="h-[380px] w-full object-cover transition-transform duration-[4000ms] ease-linear group-hover:scale-105 sm:h-[420px] md:h-[480px]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071019] via-[#071019]/50 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">

                {/* TITLE */}
                <motion.h3
                  initial={{
                    opacity: 0,
                    x: -16,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="text-[28px] leading-none text-white sm:text-[32px] md:text-[34px]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {item.name}
                </motion.h3>

                {/* VISA */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1 + 0.32,
                  }}
                  viewport={{ once: true }}
                  className="mt-2 text-[11px] leading-6 text-white/80 sm:text-[12px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Visa Types: {item.visa}
                </motion.p>

                {/* INFO */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1 + 0.44,
                  }}
                  viewport={{ once: true }}
                  className="mt-3 flex items-center justify-between border-b border-white/15 pb-4"
                >

                  <div>

                    <p
                      className="text-[12px] text-white/60"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Processing
                    </p>

                    <p
                      className="mt-1 text-[13px] text-white sm:text-[14px]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {item.processing}
                    </p>

                  </div>

                  <div className="text-right">

                    <p
                      className="text-[12px] text-white/60"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Category
                    </p>

                    <p
                      className="mt-1 text-[13px] text-white sm:text-[14px]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Work Visa
                    </p>

                  </div>

                </motion.div>

                {/* BUTTON */}
                <motion.button
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + 0.55,
                  }}
                  viewport={{ once: true }}
                  className="mt-4 w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[14px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0A0F1C] sm:py-4 sm:text-[15px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Learn More
                </motion.button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WorkVisaDestinations;