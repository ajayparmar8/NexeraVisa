"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

// ── Variants ──────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function StudyVisaHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(400px, 60vw, 550px)" }}
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="study1.png"
        alt="Study Visa"
        className="absolute inset-0 h-[550px] w-full object-cover object-center"
      />

      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT — perfectly centered with equal top/bottom space */}
      {/* CONTENT */}
<div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6 pt-16">

        {/* LABEL */}
        <motion.p
          custom={0.05}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-[10px] uppercase tracking-[0.35em] text-[#60A5FA] sm:text-[11px] md:text-[12px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Immigration Services
        </motion.p>

        {/* HEADING */}
        <motion.h1
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Study Visa Services
        </motion.h1>

        {/* BREADCRUMB */}
        <motion.div
          custom={0.35}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mt-3 flex items-center justify-center gap-2 text-[13px] sm:text-[14px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Link
            href="/"
            className="text-[#60A5FA] transition-colors duration-300 hover:text-white"
          >
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-200">Study Visa</span>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-3 max-w-[90%] text-[13px] leading-7 text-gray-300 sm:max-w-[520px] sm:text-[14px] md:max-w-[600px] md:text-[15px] md:leading-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
         Complete guidance for securing study visas and pursuing international education opportunities
        </motion.p>
      </div>
    </section>
  );
}