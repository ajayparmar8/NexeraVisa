"use client";

import {
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion";

import {
  ChevronDown,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question:
      "How early should I apply for a tourist visa?",

    answer:
      "We recommend applying at least 3–4 weeks before your planned travel date to allow for processing time and possible delays.",
  },

  {
    question:
      "Can I extend my tourist visa while abroad?",

    answer:
      "Extension policies vary by country. Some destinations allow extensions, while others require you to leave and reapply.",
  },

  {
    question:
      "What if my visa application is rejected?",

    answer:
      "We provide detailed analysis of rejection reasons and help you reapply with stronger documentation and improved applications.",
  },

  {
    question:
      "Do I need travel insurance for tourist visa?",

    answer:
      "Many countries require travel insurance as part of the tourist visa process. We help you choose the right coverage.",
  },
];

/* ───────────────── TEXT ANIMATION ───────────────── */

const letterContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const AnimatedText = ({
  text,
}: {
  text: string;
}) => {
  return (
    <motion.span
      variants={letterContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function TouristFAQ() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <section className="bg-[#F8FAFC] px-4 py-10 sm:px-6 sm:py-14 lg:px-16 lg:py-20">

      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

        {/* ───────── LEFT SIDE ───────── */}
        <div className="flex flex-col justify-center">

          {/* LABEL */}
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
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="mb-3 text-[10px] uppercase tracking-[0.4em] text-[#2563EB]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            FAQ
          </motion.p>

          {/* HEADING */}
          <h2
            className="max-w-[560px] text-[32px] leading-[1] text-[#0A0F1C] sm:text-[46px] md:text-[58px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
            }}
          >

            <span className="text-[#0A0F1C]">

              <AnimatedText text="Frequently Asked" />

            </span>

            <br />

            <span className="text-[#2563EB]">

              <AnimatedText text="Questions" />

            </span>

          </h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mt-5 max-w-[500px] text-[14px] leading-7 text-[#6B7280] sm:text-[15px]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Get quick answers to common tourist visa
            questions and understand the application
            process with ease.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            viewport={{ once: true }}
          >

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center border border-[#0A0F1C] px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-[#0A0F1C] transition-all duration-300 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Contact Us
            </Link>

          </motion.div>

        </div>

        {/* ───────── FAQ RIGHT ───────── */}
        <div className="space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                layout
                className="overflow-hidden rounded-[4px] border border-[#EEF2FF] bg-white transition-all duration-500 hover:border-[#2563EB]/20 hover:shadow-[0_12px_30px_rgba(37,99,235,0.06)]"
              >

                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className={`flex w-full items-center gap-4 px-4 py-4 text-left transition-all duration-500 sm:px-5 ${
                    isOpen
                      ? "bg-[#EFF6FF]"
                      : "bg-white hover:bg-[#F8FAFC]"
                  }`}
                >

                  {/* ICON */}
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="flex h-9 w-9 min-w-[36px] items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB]"
                  >

                    <ChevronDown size={16} />

                  </motion.div>

                  {/* TITLE */}
                  <h3
                    className="text-[17px] leading-[1.45] text-[#0A0F1C] sm:text-[19px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {faq.question}
                  </h3>

                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>

                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >

                      <motion.div
                        initial={{
                          y: -8,
                          opacity: 0,
                        }}
                        animate={{
                          y: 0,
                          opacity: 1,
                        }}
                        exit={{
                          y: -8,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="px-5 pb-5 pt-1"
                      >

                        <p
                          className="max-w-[650px] text-[14px] leading-7 text-[#6B7280] sm:text-[15px]"
                          style={{
                            fontFamily:
                              "'Inter', sans-serif",
                          }}
                        >
                          {faq.answer}
                        </p>

                      </motion.div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}   