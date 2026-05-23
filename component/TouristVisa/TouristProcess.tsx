"use client";

import {
  Search,
  FileText,
  Send,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

import { motion, Variants } from "framer-motion";

const processSteps = [
  {
    icon: <Search size={26} strokeWidth={1.7} />,
    title: "Travel Consultation",
    desc: "Discuss your travel plans, destination, and tourist visa requirements.",
  },

  {
    icon: <FileText size={26} strokeWidth={1.7} />,
    title: "Document Preparation",
    desc: "Prepare passports, financial proofs, travel itinerary, and required documents.",
  },

  {
    icon: <Send size={26} strokeWidth={1.7} />,
    title: "Visa Application",
    desc: "Submit your tourist visa application and schedule embassy appointments.",
  },

  {
    icon: <BadgeCheck size={26} strokeWidth={1.7} />,
    title: "Visa Approval",
    desc: "Receive your tourist visa approval and get ready for your trip abroad.",
  },
];

/* ───────────────── ANIMATION ───────────────── */

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TouristProcess() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-16 lg:py-20">

      <div className="mx-auto max-w-[1450px]">

        {/* ───────── TOP ───────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center sm:mb-14"
        >

          {/* SMALL LABEL */}
          <p
            className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#2563EB] sm:text-[11px]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Process
          </p>

          {/* HEADING */}
          <h2
            className="text-[34px] leading-[0.95] text-[#0A0F1C] sm:text-[50px] md:text-[64px] lg:text-[68px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",

              textShadow:
                "0px 1px 0px rgba(255,255,255,0.7), 0px 8px 30px rgba(10,15,28,0.08)",
            }}
          >
            Simple 4-Step{" "}
            <span className="text-[#2563EB]">
              Process
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="mx-auto mt-5 max-w-[760px] text-[14px] leading-7 text-[#6B7280] sm:text-[15px] sm:leading-8"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            We've streamlined the tourist visa application
            process to make it simple, fast, and stress-free.
          </p>

        </motion.div>

        {/* ───────── GRID ───────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >

          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[4px] border border-[#ECE9DF] bg-white p-6 transition-all duration-500 hover:border-[#2563EB] hover:bg-[#2563EB] sm:p-7"
            >

              {/* ARROW */}
              <div className="absolute right-0 top-0 flex h-16 w-16 items-start justify-end rounded-bl-full bg-[#F8F8F2] p-4 transition-all duration-500 group-hover:bg-white">

                <ArrowUpRight
                  size={20}
                  className="text-[#0A0F1C] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </div>

              {/* ICON */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ECE9DF] bg-[#F8F8F2] text-[#1D3A52] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3
                className="mt-5 pr-10 text-[28px] leading-[1] text-[#0A0F1C] transition-colors duration-500 group-hover:text-white sm:text-[32px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="mt-4 max-w-[320px] text-[14px] leading-7 text-[#6B7280] transition-colors duration-500 group-hover:text-white/80"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.desc}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}