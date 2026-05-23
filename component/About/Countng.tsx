"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Counting() {
  return (
    <section className="relative overflow-hidden bg-[#3B8FDD] py-14 sm:py-16 md:py-20">

      {/* BG GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

      <div className="absolute -bottom-24 -left-24 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-24 top-0 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">

          {/* ITEM */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h3
              className="text-[34px] font-bold leading-none text-white sm:text-[44px] md:text-[58px]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              <CountUp
                end={10}
                duration={3}
              />
              K+
            </h3>

            <p
              className="mt-3 text-[12px] tracking-[0.08em] text-white/90 sm:text-[13px] md:text-[14px]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              Successful Applications
            </p>

          </motion.div>

          {/* ITEM */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h3
              className="text-[34px] font-bold leading-none text-white sm:text-[44px] md:text-[58px]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              <CountUp
                end={15}
                duration={3}
              />
              +
            </h3>

            <p
              className="mt-3 text-[12px] tracking-[0.08em] text-white/90 sm:text-[13px] md:text-[14px]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              Countries Covered
            </p>

          </motion.div>

          {/* ITEM */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h3
              className="text-[34px] font-bold leading-none text-white sm:text-[44px] md:text-[58px]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              <CountUp
                end={98}
                duration={3}
              />
              %
            </h3>

            <p
              className="mt-3 text-[12px] tracking-[0.08em] text-white/90 sm:text-[13px] md:text-[14px]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              Success Rate
            </p>

          </motion.div>

          {/* ITEM */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h3
              className="text-[34px] font-bold leading-none text-white sm:text-[44px] md:text-[58px]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              24/7
            </h3>

            <p
              className="mt-3 text-[12px] tracking-[0.08em] text-white/90 sm:text-[13px] md:text-[14px]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              Customer Support
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}