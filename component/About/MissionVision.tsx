"use client";

import { motion } from "framer-motion";

const mission =
  "To provide exceptional immigration consulting services that enable individuals and families to achieve their dreams of international mobility. We are committed to delivering personalized, professional, and reliable services that exceed our clients' expectations while maintaining the highest standards of integrity and excellence.";

const vision =
  "To be the most trusted and preferred immigration consultancy firm globally, recognized for our expertise, innovation, and commitment to client success. We envision a world where geographical boundaries do not limit people\u2019s aspirations and opportunities for personal and professional growth.";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-16 lg:py-16">

      {/* TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#2563EB_1px,transparent_0)] bg-[size:26px_26px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-8 text-center sm:mb-10">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-2 text-[10px] uppercase tracking-[0.45em] text-[#2563EB] sm:text-[11px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            WHO WE ARE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[850px] text-[32px] leading-[0.95] text-[#111827] sm:text-[48px] md:text-[60px]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our <span className="text-[#2563EB]">Mission</span> & Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-3 max-w-[580px] text-[13px] leading-7 text-gray-500 sm:text-[14px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Guided by a clear purpose and a strong vision for the future of global mobility.
          </motion.p>

        </div>

        {/* GRID */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">

          {/* CENTER LINE — desktop only */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-200 md:block" />

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-[28px] text-[#2563EB] sm:text-[36px]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Mission
            </h3>
            <div className="mt-4 h-px w-full bg-gray-200" />
            <p
              className="mt-5 text-[14px] leading-[2] text-gray-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {mission}
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-[28px] text-[#2563EB] sm:text-[36px]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Vision
            </h3>
            <div className="mt-4 h-px w-full bg-gray-200" />
            <p
              className="mt-5 text-[14px] leading-[2] text-gray-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {vision}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}