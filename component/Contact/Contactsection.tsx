"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

/* ── LETTER ANIMATION ── */
const AnimatedLetters = ({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      style={{ display: "inline-block" }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-16 lg:py-15">
      {/* LIGHT TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#2563EB_1px,transparent_0)] bg-[size:22px_22px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* TOP TEXT */}
        <div className="text-center">
          <p
            className="mb-2 text-[11px] uppercase tracking-[0.45em] text-[#2563EB]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Contact Us
          </p>

          <h2
            className="mx-auto mt-2 max-w-[900px] text-center text-[32px] leading-[1.1] text-[#0A0F1C] sm:text-[48px] md:text-[68px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              textShadow:
                "0px 1px 0px rgba(255,255,255,0.6), 0px 8px 30px rgba(10,15,28,0.08)",
            }}
          >
            <AnimatedLetters
              text="Get In Touch"
              delay={0}
            />{" "}
            <span className="text-[#2563EB]">
              <AnimatedLetters
                text="With Our Immigration Experts"
                delay={0.3}
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-[640px] text-center text-[15px] leading-8 text-gray-500 sm:text-[16px]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Ready to start your immigration journey?
            Contact our team for personalized
            consultation and expert guidance.
          </motion.p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <div className="grid w-full max-w-5xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12">

            {/* LEFT SIDE */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative flex flex-col justify-center pr-0 text-center md:pr-10 md:text-left"
            >
              {/* VERTICAL LINE */}
              <div className="absolute right-0 top-1/2 hidden h-[90%] w-px -translate-y-1/2 bg-[#DCE7FF] md:block" />

              {/* EMAIL */}
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <p
                  className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#2563EB]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Email
                </p>

                <p
                  className="text-[15px] leading-[2] text-gray-500 sm:text-[16px]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  info@nexeraconsultancy.in
                  <br />
                  support@nexeraconsultancy.in
                </p>
              </motion.div>

              {/* PHONE */}
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <p
                  className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#2563EB]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Phone
                </p>

                <p
                  className="text-[15px] leading-[2] text-gray-500 sm:text-[16px]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  +91 9898938186
                </p>
              </motion.div>

              {/* ADDRESS */}
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <p
                  className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#2563EB]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Address
                </p>

                <p
                  className="mx-auto max-w-[320px] text-[15px] leading-[1.8] text-gray-500 sm:text-[16px] md:mx-0"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Ganesh Glory 1313, 13th Floor,
                  Jagatpur Road, Gota, SG Highway,
                  Ahmedabad, Gujarat 382470
                </p>
              </motion.div>

              {/* BUSINESS HOURS */}
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <p
                  className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#2563EB]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Business Hours
                </p>

                <p
                  className="text-[15px] leading-[2] text-gray-500 sm:text-[16px]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start lg:pl-6"
            >
              <form className="w-full max-w-full space-y-5">

                <input
                  type="text"
                  placeholder="FULL NAME"
                  className="h-[50px] w-full border border-[#E5EDFF] bg-[#F8FAFC] px-5 text-[12px] uppercase tracking-[0.18em] text-[#0A0F1C] outline-none transition-all duration-300 placeholder:text-[#94A3B8] focus:border-[#2563EB] sm:h-[52px]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                />

                <input
                  type="text"
                  placeholder="PHONE NUMBER"
                  className="h-[50px] w-full border border-[#E5EDFF] bg-[#F8FAFC] px-5 text-[12px] uppercase tracking-[0.18em] text-[#0A0F1C] outline-none transition-all duration-300 placeholder:text-[#94A3B8] focus:border-[#2563EB] sm:h-[52px]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                />

                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="h-[50px] w-full border border-[#E5EDFF] bg-[#F8FAFC] px-5 text-[12px] uppercase tracking-[0.18em] text-[#0A0F1C] outline-none transition-all duration-300 placeholder:text-[#94A3B8] focus:border-[#2563EB] sm:h-[52px]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                />

                <textarea
                  rows={5}
                  placeholder="TELL US ABOUT YOUR IMMIGRATION NEEDS..."
                  className="w-full border border-[#E5EDFF] bg-[#F8FAFC] px-5 py-4 text-[12px] uppercase tracking-[0.18em] text-[#0A0F1C] outline-none transition-all duration-300 placeholder:text-[#94A3B8] focus:border-[#2563EB]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                />

                <button
                  type="submit"
                  className="w-full rounded-[3px] border border-[#2563EB] bg-[#2563EB] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-white hover:text-[#2563EB] sm:w-auto"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Send Message
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}