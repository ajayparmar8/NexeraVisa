"use client";

import { motion, Variants } from "framer-motion";
import { Clock3, BadgeCheck, ShieldCheck, HeartHandshake } from "lucide-react";

const tips = [
  {
    icon: <Clock3 size={24} strokeWidth={1.8} />,
    title: "Apply Early",
    desc: "Submit your application at least 3–4 weeks before travel.",
  },
  {
    icon: <BadgeCheck size={24} strokeWidth={1.8} />,
    title: "Complete Documentation",
    desc: "Ensure all required documents are accurate and complete.",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.8} />,
    title: "Financial Proof",
    desc: "Show sufficient funds to cover your entire trip.",
  },
  {
    icon: <HeartHandshake size={24} strokeWidth={1.8} />,
    title: "Travel Insurance",
    desc: "Purchase comprehensive travel insurance for your destination.",
  },
];

/* ───────────────── ANIMATION ───────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const letterContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ───────────────── TEXT ANIMATION ───────────────── */

const AnimatedText = ({ text }: { text: string }) => (
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

/* ───────────────── MAIN COMPONENT ───────────────── */

export default function TouristVisaTips() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-10 sm:px-6 sm:py-14 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1450px]">

        {/* ───────────── HEADER ───────────── */}
        <div className="text-center px-2">

          {/* EYEBROW */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-3 text-[10px] uppercase tracking-[0.42em] text-[#2563EB] sm:text-[11px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tourist Visa Guidance
          </motion.p>

          {/* HEADING */}
          <h2
            className="text-[30px] leading-[1.05] text-[#0A0F1C] xs:text-[36px] sm:text-[50px] md:text-[60px] lg:text-[72px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              textShadow:
                "0px 1px 0px rgba(255,255,255,0.7), 0px 8px 30px rgba(10,15,28,0.08)",
            }}
          >
            <span className="text-[#0A0F1C]">
              <AnimatedText text="Tourist Visa" />
            </span>{" "}
            <span className="text-[#2563EB]">
              <AnimatedText text="Success Tips" />
            </span>
          </h2>

          {/* SUBTITLE */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-[680px] text-[13px] leading-7 text-[#6B7280] sm:mt-5 sm:text-[15px] sm:leading-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Follow these expert tips to maximize your chances of visa approval
            and ensure a smooth application process.
          </motion.p>
        </div>

        {/* ───────────── TIPS GRID ───────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:mt-12"
        >
          {tips.map((item, index) => {
            /*
             * Border logic per breakpoint:
             *  mobile  (1-col): border-bottom on all except last
             *  sm      (2-col): right border on col 0; bottom border on row 0 (index 0 & 1)
             *  lg      (4-col): right border on all except last
             */
            const borderClasses = [
              // mobile: bottom divider for all except last
              index !== tips.length - 1 ? "border-b border-[#DCE7FF]" : "",
              // sm 2-col: right border for left column (even index); bottom border for top row
              index % 2 === 0 ? "sm:border-r sm:border-[#DCE7FF]" : "sm:border-r-0",
              index < 2 ? "sm:border-b sm:border-[#DCE7FF]" : "sm:border-b-0",
              // lg 4-col: right border for all except last; remove all bottom borders
              index !== tips.length - 1 ? "lg:border-r lg:border-[#DCE7FF]" : "lg:border-r-0",
              "lg:border-b-0",
            ].join(" ");

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`
                  group relative flex flex-col items-center
                  px-6 py-8
                  sm:px-7 sm:py-9
                  lg:px-8 lg:py-10
                  transition-colors duration-500
                  hover:bg-[#F0F5FF]
                  ${borderClasses}
                `}
              >
                {/* ICON */}
                <div className="mb-5 sm:mb-6">
                  <div className="
                    flex h-14 w-14 items-center justify-center rounded-full
                    border border-[#DCE7FF] bg-white text-[#2563EB]
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:border-[#2563EB]
                    group-hover:bg-[#EEF4FF]
                    group-hover:text-[#1D4ED8]
                    sm:h-16 sm:w-16
                  ">
                    {item.icon}
                  </div>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-center text-[22px] leading-tight text-[#0A0F1C]
                    transition-colors duration-500
                    group-hover:text-[#2563EB]
                    sm:text-[24px]
                    lg:text-[22px] lg:text-left lg:w-full
                  "
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-auto pt-3 text-center text-[13px] leading-7 text-[#6B7280]
                    transition-colors duration-500
                    group-hover:text-[#374151]
                    sm:text-[13px]
                    lg:text-left lg:w-full
                  "
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}