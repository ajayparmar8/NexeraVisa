"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "University Selection",
    desc: "Helping students choose the right university and academic program worldwide.",
    image:
      "https://i.pinimg.com/1200x/02/31/a5/0231a54bebebe5eec5fe7a6144362a6d.jpg",
    className: "md:col-span-2 md:row-span-2 h-[520px]",
  },
  {
    title: "Application Assistance",
    desc: "Complete support for applications.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1 h-[250px]",
  },
  {
    title: "Visa Documentation",
    desc: "Professional review of documents.",
    image:
      "https://i.pinimg.com/736x/06/f6/ba/06f6ba8a60f9f64fc96d6d825b35ab9a.jpg",
    className: "md:col-span-1 md:row-span-1 h-[250px]",
  },
  {
    title: "Interview Preparation",
    desc: "Mock interviews and guidance.",
    image:
      "https://i.pinimg.com/1200x/60/a7/77/60a7779444e8d3bdd3b240eced9ada89.jpg",
    className: "md:col-span-1 md:row-span-1 h-[250px]",
  },
  {
    title: "Pre-departure Support",
    desc: "Travel and orientation help.",
    image:
      "https://i.pinimg.com/736x/9f/1b/3c/9f1b3cc7a89f92825b2850ba1f57b33f.jpg",
    className: "md:col-span-1 md:row-span-1 h-[250px]",
  },
];

/* ANIMATION */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const letterContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* LETTER ANIMATION */
const AnimatedText = ({ text }: { text: string }) => (
  <motion.span
    variants={letterContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {text.split("").map((char, index) => (
      <motion.span key={index} variants={letterAnimation} className="inline-block whitespace-pre">
        {char}
      </motion.span>
    ))}
  </motion.span>
);

export default function StudyVisaServices() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-14 sm:px-6 lg:px-16">
      <div className="mx-auto max-w-[1400px]">

        {/* TOP */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

          {/* LEFT */}
          <div>
            <p
              className="mb-3 text-[11px] uppercase tracking-[0.42em] text-[#2563EB]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Study Visa Services
            </p>

            <h2
              className="max-w-[720px] text-[42px] leading-[1.1] text-[#0A0F1C] sm:text-[56px] md:text-[68px]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <AnimatedText text="Our Study Visa" />
              <br />
              <span className="text-[#2563EB]">
                <AnimatedText text="Services Include" />
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[450px] text-[15px] leading-7 text-[#6B7280] md:pt-12 md:text-right"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Complete guidance and end-to-end support for international students pursuing education abroad successfully.
          </motion.p>
        </div>

        {/* GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-[3px] ${item.className}`}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-[5000ms] ease-out group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071019]/92 via-[#071019]/35 to-transparent transition-all duration-500 group-hover:from-[#071019]/98 group-hover:via-[#071019]/50" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-end justify-start">
                <div className="absolute bottom-0 left-0 w-full text-left p-5 sm:p-7">
                  <h3
                    className="text-[30px] leading-[0.95] text-white md:text-[25px] animate-[fadeUp_0.8s_ease-out]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.title}
                  </h3>

                  <div className="overflow-hidden">
                    <p
                      className="mt-2 max-w-[320px] translate-y-6 opacity-0 text-[14px] leading-relaxed text-white/80 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>

                 

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}