"use client";

import React, {
  useState,
  useEffect,
  useRef,
} from "react";

import Link from "next/link";

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

        const progress = Math.min(
          (timestamp - startTime) / duration,
          1
        );

        setCount(Math.floor(progress * end));

        if (progress < 1)
          requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const StudyVisaSection = () => {
  return (
    <section className="overflow-hidden bg-[#F8FAFC] px-4 py-14 sm:px-6 md:px-10 lg:px-16 md:py-24">

      <div className="mx-auto grid max-w-[1350px] gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">

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
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[3px] border-[3px] border-[#2563EB]/20 sm:-right-5 sm:-top-5" />

            {/* IMAGE */}
            <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:min-h-[500px]">

              <img
                src="Study/studyabout.png"
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
              className="text-[10px] uppercase tracking-[0.35em] text-[#2563EB] sm:text-[12px] sm:tracking-[0.45em]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Education Experts
            </p>

            <h2
              className="mt-4 text-[34px] leading-[1] text-[#0A0F1C] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              Your Gateway to
              <br />

              <span className="text-[#2563EB]">
                World-Class
              </span>{" "}

              Education
            </h2>

            <p
              className="mt-6 text-[14px] leading-7 text-gray-500 sm:text-[15px] md:text-[16px] md:leading-8"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              Nexera Consultancy helps students
              achieve their dreams of studying
              abroad at prestigious institutions
              worldwide. Our comprehensive study
              visa services cover everything from
              university selection to visa
              approval.
            </p>

            <p
              className="mt-4 text-[14px] leading-7 text-gray-500 sm:text-[15px] md:text-[16px] md:leading-8"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              With extensive knowledge of
              international education systems and
              immigration requirements, we guide
              you through every step of your
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
                <div
                  key={idx}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="shrink-0 text-[#2563EB]"
                    size={18}
                  />

                  <span
                    className="text-[13px] font-medium text-[#0A0F1C] sm:text-[14px]"
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                    }}
                  >
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* BOTTOM — STATS + BUTTON */}
          <div className="mt-10">

            <div className="flex flex-wrap items-center gap-8 border-t border-gray-200 pt-8 sm:gap-10 sm:pt-10">

              <div>

                <h3
                  className="text-4xl text-[#2563EB] sm:text-5xl"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  <CountUp end={3000} />+
                </h3>

                <p
                  className="mt-1 text-[11px] font-bold uppercase tracking-widest text-gray-400 sm:text-[12px]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Students Placed
                </p>

              </div>

              <div className="hidden h-10 w-[1px] bg-gray-200 sm:block" />

              <div>

                <h3
                  className="text-4xl text-[#2563EB] sm:text-5xl"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  <CountUp end={96} />%
                </h3>

                <p
                  className="mt-1 text-[11px] font-bold uppercase tracking-widest text-gray-400 sm:text-[12px]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Visa Success Rate
                </p>

              </div>

            </div>

            {/* BUTTON */}
            <Link href="/contact">

              <button
                className="mt-8 w-full rounded-[3px] border border-transparent bg-[#2563EB] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#2563EB] hover:bg-white hover:text-[#2563EB] sm:mt-10 sm:w-auto sm:px-8 sm:py-5 sm:text-[13px]"
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                }}
              >
                Start Your Journey
              </button>

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default StudyVisaSection;