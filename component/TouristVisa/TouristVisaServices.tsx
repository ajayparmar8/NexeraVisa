"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ClipboardCheck,
  FileText,
  CalendarDays,
  ShieldCheck,
  Map,
  Plane,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <ClipboardCheck size={22} strokeWidth={1.8} />,
    text: "Visa consultation and assessment",
  },

  {
    icon: <FileText size={22} strokeWidth={1.8} />,
    text: "Document preparation and review",
  },

  {
    icon: <CheckCircle2 size={22} strokeWidth={1.8} />,
    text: "Application form assistance",
  },

  {
    icon: <CalendarDays size={22} strokeWidth={1.8} />,
    text: "Appointment scheduling",
  },

  {
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
    text: "Travel insurance guidance",
  },

  {
    icon: <BadgeCheck size={22} strokeWidth={1.8} />,
    text: "Interview preparation",
  },

  {
    icon: <Map size={22} strokeWidth={1.8} />,
    text: "Travel itinerary planning",
  },

  {
    icon: <Plane size={22} strokeWidth={1.8} />,
    text: "Post-approval support",
  },
];

export default function TouristVisaServices() {
  return (
    <section className="bg-[#2563EB] px-4 py-10 sm:px-6 sm:py-12 lg:px-16 lg:py-16">

      <div className="mx-auto max-w-[1400px]">

        {/* TOP */}
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">

          {/* LEFT */}
          <div>

            <p
              className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/70 sm:text-[11px] sm:tracking-[0.4em]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Tourist Visa Assistance
            </p>

            <h2
              className="max-w-[720px] text-[34px] leading-[1] text-white sm:text-[50px] md:text-[68px]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              Our Tourist Visa
              <span className="text-white/75">
                {" "}Services
              </span>
            </h2>

          </div>

          {/* RIGHT */}
          <p
            className="max-w-[450px] text-[14px] leading-7 text-white/80 md:text-right md:text-[15px]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Complete support for tourist visa
            applications, documentation,
            travel planning, and interview
            preparation for hassle-free
            international travel.
          </p>

        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 gap-y-5 border-t border-white/20 pt-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10">

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group flex items-center gap-4"
            >

              {/* ICON */}
              <div className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-white group-hover:text-[#2563EB] sm:h-12 sm:w-12 sm:min-w-[48px]">

                {item.icon}

              </div>

              {/* TEXT */}
              <p
                className="text-[13px] leading-6 text-white/90 sm:text-[15px] sm:leading-7"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/20 pt-6 md:mt-12 md:flex-row md:items-center md:justify-between">

          {/* PROCESSING */}
          <p
            className="text-[13px] leading-6 text-white/85 sm:text-[14px]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span className="font-semibold text-white">
              Processing Time:
            </span>{" "}
            Most tourist visas are processed
            within 2–4 weeks.
          </p>

          {/* BUTTON */}
          <Link href="/contact">

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="w-full rounded-[6px] border border-white/30 bg-white px-6 py-3 text-[13px] text-[#2563EB] transition-all duration-300 hover:bg-[#EFF6FF] sm:w-auto sm:px-7 sm:text-[14px]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Get Started Today
            </motion.button>

          </Link>

        </div>

      </div>

    </section>
  );
}