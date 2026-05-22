"use client";

import React, {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  motion,
  useInView,
} from "framer-motion";

import {
  CheckCircle2,
} from "lucide-react";

// COUNT UP
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
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const StudyVisaSection = () => {
  return (
    <section className="overflow-hidden bg-[#F8FAFC] px-6 py-20 md:px-10 lg:px-16 md:py-28">

      <div className="mx-auto grid max-w-[1350px] gap-16 lg:grid-cols-2 lg:items-stretch">

        {/* LEFT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className="relative flex h-full w-full flex-col">

            {/* BACK BORDER FRAME */}
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[3px] border-[3px] border-[#2563EB]/20" />

            {/* IMAGE — stretches to match right side height */}
            <div className="relative flex-1 overflow-hidden rounded-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src="study.jpg"
                alt="Student studying abroad"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[4000ms] ease-linear hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >

          {/* TOP CONTENT */}
          <div>

            <p
              className="text-[12px] uppercase tracking-[0.45em] text-[#2563EB]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Education Experts
            </p>

            <h2
              className="mt-4 text-4xl leading-[1] text-[#0A0F1C] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Your Gateway to
              <br />
              <span className="text-[#2563EB]">World-Class</span>{" "}
              Education
            </h2>

            <p
              className="mt-6 text-[15px] leading-8 text-gray-500 md:text-[16px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Nexera Consultancy helps students achieve their dreams of studying
              abroad at prestigious institutions worldwide. Our comprehensive
              study visa services cover everything from university selection to
              visa approval.
            </p>

            <p
              className="mt-4 text-[15px] leading-8 text-gray-500 md:text-[16px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              With extensive knowledge of international education systems and
              immigration requirements, we guide you through every step of your
              educational journey abroad.
            </p>

            {/* CHECKLIST */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "University Selection",
                "Study Visa Assistance",
                "Application Support",
                "Pre-Departure Guidance",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#2563EB] shrink-0" size={18} />
                  <span
                    className="text-[14px] font-medium text-[#0A0F1C]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* BOTTOM — STATS + BUTTON */}
          <div className="mt-10">

            <div className="flex items-center gap-10 border-t border-gray-200 pt-10">

              <div>
                <h3
                  className="text-5xl text-[#2563EB]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <CountUp end={3000} />+
                </h3>
                <p
                  className="mt-1 text-[12px] font-bold uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Students Placed
                </p>
              </div>

              <div className="h-10 w-[1px] bg-gray-200" />

              <div>
                <h3
                  className="text-5xl text-[#2563EB]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <CountUp end={96} />%
                </h3>
                <p
                  className="mt-1 text-[12px] font-bold uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Visa Success Rate
                </p>
              </div>

            </div>

            <button
              className="mt-10 w-full rounded-[3px] border border-transparent bg-[#2563EB] px-8 py-5 text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#2563EB] hover:bg-white hover:text-[#2563EB] sm:w-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Start Your Journey
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default StudyVisaSection;