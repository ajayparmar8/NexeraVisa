"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Helper component for Countable Numbers
const CountUp = ({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
     let startTime: number | null = null;
     const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const AboutSection = () => {
  return (
    <section className="overflow-hidden bg-white px-6 py-16 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-[1350px] gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-20">
        
        {/* LEFT SIDE: Image + Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className="overflow-hidden border border-[#E5E7EB] bg-white p-3 md:p-4">
            <img
              src="https://i.pinimg.com/1200x/c7/ee/ab/c7eeabe916c4402c310cad4ee2a18a75.jpg"
              alt="Students"
              className="h-[300px] w-full object-cover md:h-[400px]"
            />
          </div>

          <div className="grid flex-grow grid-cols-2 border-x border-b border-[#E5E7EB]">
            {[
              { num: 500, label: "Successful Applications", suffix: "+" },
              { num: 15, label: "Countries Covered", suffix: "+" },
              { num: 10, label: "Years Experience", suffix: "+" },
              { num: 24, label: "Support Available", suffix: "/7" },
            ].map((stat, index) => (
              <div key={index} className={`border-[#E5E7EB] px-4 py-8 text-center md:px-8 md:py-10 ${index % 2 === 0 ? 'border-r' : ''} ${index < 2 ? 'border-b' : ''}`}>
                <h3 className="text-3xl text-[#2563EB] md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <CountUp end={stat.num} />{stat.suffix}
                </h3>
                <p className="mt-2 text-[12px] text-gray-500 md:text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Text + Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          {/* TEXT CONTENT - Added larger bottom margin (mb-12) */}
          <div className="relative mb-12">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#2563EB] md:text-[12px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              About Us
            </p>

            <h2 className="mt-2 text-4xl leading-[1.1] text-[#0F172A] md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              About Nexera<br />
              <span className="text-[#2563EB]">Consultancy</span>
            </h2>

            <p className="mt-8 max-w-[620px] text-[15px] leading-7 text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
              We are a trusted immigration consultancy firm with years of experience in helping individuals and families achieve their dreams of living, working, and studying abroad.
            </p>

            <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our expert team provides personalized guidance throughout your immigration journey with complete support for visas, documentation, and applications.
            </p>
          </div>

          {/* SECOND IMAGE - Added significantly larger top margin (mt-14) for mobile and desktop */}
          <div className="mt-14 overflow-hidden border border-[#E5E7EB] bg-white p-3 shadow-sm md:p-4 lg:mt-auto">
            <img
              src="https://i.pinimg.com/736x/85/0e/7e/850e7ea08eca0d71666ddc3d37e7156c.jpg"
              alt="Education"
              className="h-[300px] w-full object-cover md:h-[400px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;