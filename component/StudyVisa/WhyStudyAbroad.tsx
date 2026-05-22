"use client";

import {
  CheckCircle2,
  GraduationCap,
  Clock3,
  Globe2,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  "Access to world-class education",
  "Cultural exchange and global perspective",
  "Career advancement opportunities",
  "Networking with international students",
  "Post-study work opportunities",
  "Pathway to permanent residency",
  "Enhanced language skills",
  "Personal growth and independence",
];

const cards = [
  {
    icon: <GraduationCap size={26} strokeWidth={1.8} />,
    title: "Scholarships",
    desc: "Available for qualified students",
  },

  {
    icon: <Clock3 size={26} strokeWidth={1.8} />,
    title: "Work Rights",
    desc: "Part-time work while studying",
  },

  {
    icon: <Globe2 size={26} strokeWidth={1.8} />,
    title: "Global Network",
    desc: "Connect with students worldwide",
  },

  {
    icon: <BadgeCheck size={26} strokeWidth={1.8} />,
    title: "Quality Education",
    desc: "World-renowned institutions",
  },
];

export default function WhyStudyAbroad() {
  return (
    <section className="overflow-hidden bg-[#2563EB] px-4 py-14 sm:px-6 sm:py-16 lg:px-16 lg:py-20">

      <div className="mx-auto grid max-w-[1450px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

        {/* LEFT */}
        <div>

          {/* SMALL LABEL */}
          <p
            className="animate-fadeUp mb-3 text-[10px] uppercase tracking-[0.38em] text-white/70 sm:text-[11px]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Study Abroad
          </p>

          {/* HEADING */}
          <h2
            className="animate-fadeUp text-[38px] leading-[0.95] text-white sm:text-[52px] md:text-[64px] lg:text-[72px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              animationDelay: "0.1s",
            }}
          >
            Why Study{" "}
            <span className="text-white/75">
              Abroad?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="animate-fadeUp mt-5 max-w-[700px] text-[14px] leading-7 text-white/80 sm:text-[15px] sm:leading-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              animationDelay: "0.2s",
            }}
          >
            Studying abroad offers numerous benefits that can
            transform your personal and professional life.
            Here's what you can gain from international
            education.
          </p>

          {/* BENEFITS */}
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="animate-fadeUp flex items-start gap-3"
                style={{
                  animationDelay: `${0.3 + index * 0.08}s`,
                }}
              >

                <CheckCircle2
                  size={18}
                  className="mt-[3px] min-w-[18px] text-white/80 sm:size-[20px]"
                />

                <p
                  className="text-[14px] leading-7 text-white/90 sm:text-[15px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

          {cards.map((item, index) => (
            <div
              key={index}
              className="animate-card group rounded-[6px] border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white sm:p-6 lg:p-7"
              style={{
                animationDelay: `${0.25 + index * 0.12}s`,
              }}
            >

              {/* ICON */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-all duration-500 group-hover:border-[#2563EB]/10 group-hover:bg-[#2563EB]/10 group-hover:text-[#2563EB] sm:h-14 sm:w-14">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3
                className="mt-5 text-[24px] leading-none text-white transition-colors duration-500 group-hover:text-[#0A0F1C] sm:text-[28px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="mt-3 text-[13px] leading-7 text-white/75 transition-colors duration-500 group-hover:text-[#6B7280] sm:text-[14px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardFade {
          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeUp {
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
        }

        .animate-card {
          opacity: 0;
          animation: cardFade 0.9s ease forwards;
        }
      `}</style>

    </section>
  );
}