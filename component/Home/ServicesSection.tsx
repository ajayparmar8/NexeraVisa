"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Globe2,
  Plane,
  MapPin,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Work Visa Assistance",
    description: "Complete support for obtaining work permits and employment visas.",
  },
  {
    icon: GraduationCap,
    title: "Study Visa Guidance",
    description: "Expert assistance for student visa applications and admissions.",
  },
  {
    icon: Globe2,
    title: "Tourist & Visit Visas",
    description: "Quick and reliable processing for tourist and family visit visas.",
  },
  {
    icon: Plane,
    title: "Immigration Consultation",
    description: "Personalized consultation to evaluate your immigration pathway.",
  },
  {
    icon: MapPin,
    title: "Permanent Residency",
    description: "Comprehensive guidance for permanent residency applications.",
  },
  {
    icon: Mail,
    title: "Document Verification",
    description: "Professional document verification and attestation services.",
  },
];

// ── Variants ──────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

const labelVariant: Variants = {
  hidden: { opacity: 0, y: 10, letterSpacing: "0.1em" },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    letterSpacing: "0.35em",
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const ServicesSection = () => {
  return (
    <section className="bg-[#F8FAFC] px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1300px]">

        {/* TOP HEADING */}
        <div className="text-center">

          {/* Label */}
          <motion.p
            custom={0}
            variants={labelVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[11px] uppercase text-[#2563EB] md:text-[12px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Services
          </motion.p>

          {/* Heading */}
          <motion.h2
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl mt-2 text-[#111827] md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Services
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-[700px] text-[15px] leading-8 text-gray-500"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We offer comprehensive immigration services to help you achieve your
            goals of living, working, or studying abroad.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-20 grid gap-x-14 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            // Stagger: row 0 = 0.1–0.3s, row 1 = 0.4–0.6s, row 2 = 0.7–0.9s
            const col = index % 3;
            const row = Math.floor(index / 3);
            const delay = 0.1 + row * 0.3 + col * 0.1;

            return (
              <motion.div
                key={index}
                custom={delay}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="group flex items-start gap-4 sm:gap-5 cursor-pointer"
              >
                {/* ICON — flip card */}
                <div
                  className="relative flex-shrink-0"
                  style={{ width: 56, height: 56, perspective: "600px" }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* FRONT */}
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-full border border-[#DCE7F7] bg-white text-[#2563EB] shadow-sm"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <Icon size={24} />
                    </div>
                    {/* BACK */}
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-full bg-[#2563EB] text-white shadow-md"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <Icon size={24} />
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div className="overflow-hidden">

                  {/* TITLE + underline */}
                  <div className="inline-block">
                    <h3
                      className="text-[22px] sm:text-[24px] text-[#111827] transition-all duration-500 group-hover:text-[#2563EB] group-hover:translate-x-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {service.title}
                    </h3>
                    <span className="block h-[1px] w-0 bg-[#2563EB] transition-all duration-500 group-hover:w-full" />
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="mt-2 sm:mt-3 max-w-[320px] text-[13px] sm:text-[14px] leading-7 text-gray-500 transition-all duration-500 delay-75 group-hover:translate-x-2 group-hover:text-gray-700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;