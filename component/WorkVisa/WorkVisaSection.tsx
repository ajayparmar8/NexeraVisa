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
  const [count, setCount] =
    useState(0);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number | null =
        null;

      const animate = (
        timestamp: number
      ) => {
        if (!startTime)
          startTime = timestamp;

        const progress = Math.min(
          (timestamp - startTime) /
            duration,
          1
        );

        setCount(
          Math.floor(progress * end)
        );

        if (progress < 1) {
          requestAnimationFrame(
            animate
          );
        }
      };

      requestAnimationFrame(
        animate
      );
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const WorkVisaSection = () => {
  return (
    <section className="overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16 md:py-25">

      <div className="mx-auto grid max-w-[1350px] gap-16 lg:grid-cols-2 lg:items-stretch">

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col"
        >

          {/* UNIQUE FRAME */}
          <div className="relative h-full w-full">

            {/* BACK BORDER FRAME */}
            <div className="absolute -right-5 -top-5 h-[650px] w-[calc(100%+0px)] rounded-[3px] border-[3px] border-[#2563EB]/20" />

            {/* IMAGE CONTAINER */}
            <div className="relative overflow-hidden rounded-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
                alt="Work Visa Professional"
                className="h-full min-h-[600px] w-full object-cover transition-transform duration-[4000ms] ease-linear hover:scale-105 lg:h-full"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/10" />

            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col justify-between"
        >

          {/* TOP CONTENT */}
          <div className="relative">

            {/* SMALL TEXT */}
            <p
              className="text-[12px] uppercase tracking-[0.45em] text-[#2563EB]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              Expert Solutions
            </p>

            {/* MAIN TITLE */}
            <h2
              className="mt-4 text-5xl leading-[0.95] text-[#0A0F1C] md:text-7xl"
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              Build Your
              <br />

              <span className="text-[#2563EB]">
                Global
              </span>{" "}

              Career
            </h2>

            {/* DESCRIPTION */}
            <p
              className="mt-8 text-[16px] leading-8 text-gray-500"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              Nexera Consultancy
              specializes in securing
              work authorizations for
              professionals worldwide.
              We navigate complex legal
              frameworks to ensure your
              professional transition
              is seamless and
              successful.
            </p>

            {/* CHECKLIST */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {[
                "Skilled Worker Visas",
                "Business Visitor Visas",
                "Intra-company Transfers",
                "Sponsorship Support",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-[#2563EB]"
                    size={18}
                  />

                  <span
                    className="text-[14px] font-medium text-[#0A0F1C]"
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

          {/* BOTTOM */}
          <div className="mt-8">

            {/* STATS */}
            <div className="flex items-center gap-10 border-t border-gray-200 pt-10">

              <div>

                <h3
                  className="text-5xl text-[#2563EB]"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  <CountUp end={5000} />+
                </h3>

                <p
                  className="mt-1 text-[12px] uppercase tracking-widest text-gray-400 font-bold"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Approved
                </p>

              </div>

              <div className="h-10 w-[1px] bg-gray-200" />

              <div>

                <h3
                  className="text-5xl text-[#2563EB]"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  <CountUp end={95} />%
                </h3>

                <p
                  className="mt-1 text-[12px] uppercase tracking-widest text-gray-400 font-bold"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Success
                </p>

              </div>

            </div>

            {/* BUTTON */}
            <Link href="/contact">

              <button
                className="mt-10 w-full rounded-[3px] border border-transparent bg-[#2563EB] px-8 py-5 text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#2563EB] hover:bg-white hover:text-[#2563EB] sm:w-auto"
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                }}
              >
                Start Your Application
              </button>

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default WorkVisaSection;