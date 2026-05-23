"use client";

import {
  Search,
  FileText,
  Send,
  RefreshCcw,
  BadgeCheck,
  Globe,
  ArrowUpRight,
} from "lucide-react";

import { motion, Variants } from "framer-motion";

const processSteps = [
  {
    icon: <Search size={26} strokeWidth={1.7} />,
    title: "Initial Consultation",
    desc: "Assess your eligibility and discuss your career goals.",
  },

  {
    icon: <FileText size={26} strokeWidth={1.7} />,
    title: "Document Preparation",
    desc: "Gather and prepare all required documents.",
  },

  {
    icon: <Send size={26} strokeWidth={1.7} />,
    title: "Application Submission",
    desc: "Submit your work visa application to immigration authorities.",
  },

  {
    icon: <RefreshCcw size={26} strokeWidth={1.7} />,
    title: "Follow-up & Updates",
    desc: "Track application status and provide regular updates.",
  },

  {
    icon: <BadgeCheck size={26} strokeWidth={1.7} />,
    title: "Visa Approval",
    desc: "Receive your work visa and prepare for departure.",
  },

  {
    icon: <Globe size={26} strokeWidth={1.7} />,
    title: "Global Opportunities",
    desc: "Explore international career opportunities with expert visa guidance.",
  },
];

/* ANIMATION VARIANTS */
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

export default function WorkVisaProcess() {
  return (
    <section className="bg-[#F8FAFC]  px-4 py-16 sm:px-6 lg:px-16">

      <div className="mx-auto max-w-[1450px]">

        {/* TOP */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center sm:mb-14"
        >

          <p
            className="mb-2 text-[10px] uppercase tracking-[0.35em] text-[#2563EB] sm:text-[12px]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Process
          </p>

          <h2
            className="text-[38px] leading-[0.9] text-[#0A0F1C] sm:text-[52px] md:text-[68px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Our Work Visa{" "}
            <span className="text-[#2563EB]">
              Process
            </span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-[720px] text-[14px] leading-7 text-[#6B7280] sm:text-[15px] sm:leading-8"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            A streamlined 5-step process designed to make
            your work visa application smooth, efficient,
            and stress-free.
          </p>

        </motion.div>

        {/* GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >

          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-[4px] border border-[#ECE9DF] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#2563EB] hover:bg-[#2563EB] sm:p-7"
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