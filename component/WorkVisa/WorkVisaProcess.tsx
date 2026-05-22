"use client";

import {
  Search,
  FileText,
  Send,
  RefreshCcw,
  BadgeCheck,
} from "lucide-react";

const processSteps = [
  {
    number: "1",
    icon: <Search size={24} />,
    title: "Initial Consultation",
    desc: "Assess your eligibility and discuss your career goals.",
    position: "top",
  },

  {
    number: "2",
    icon: <FileText size={24} />,
    title: "Document Preparation",
    desc: "Gather and prepare all required documents.",
    position: "bottom",
  },

  {
    number: "3",
    icon: <Send size={24} />,
    title: "Application Submission",
    desc: "Submit your work visa application.",
    position: "top",
  },

  {
    number: "4",
    icon: <RefreshCcw size={24} />,
    title: "Follow-up & Updates",
    desc: "Track application status and updates.",
    position: "bottom",
  },

  {
    number: "5",
    icon: <BadgeCheck size={24} />,
    title: "Visa Approval",
    desc: "Receive your visa and prepare for departure.",
    position: "top",
  },
];

export default function WorkVisaProcess() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-16">

      {/* SOFT GLOW */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[#2563EB]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* TOP */}
        <div className="mb-20 text-center">

          <p
            className="mb-3 text-[11px] uppercase tracking-[0.42em] text-[#2563EB]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Work Process
          </p>

          <h2
            className="text-[42px] leading-[0.92] text-[#0A0F1C] sm:text-[56px] md:text-[72px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",

              textShadow:
                "0px 1px 0px rgba(255,255,255,0.7), 0px 8px 30px rgba(10,15,28,0.08)",
            }}
          >
            Our Work Visa{" "}
            <span className="text-[#2563EB]">
              Process
            </span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-[700px] text-[15px] leading-8 text-[#6B7280]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            A streamlined 5-step immigration process designed
            to make your work visa application smooth,
            transparent, and stress-free.
          </p>

        </div>

        {/* DESKTOP PROCESS */}
        <div className="relative hidden lg:block">

          {/* CENTER LINE */}
          <div className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-[#2563EB]/15">

            {/* ANIMATED LINE */}
            <div className="animate-line absolute left-0 top-0 h-full w-[180px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />

          </div>

          {/* STEPS */}
          <div className="relative grid grid-cols-5">

            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center ${
                  step.position === "top"
                    ? "pb-56"
                    : "pt-56"
                }`}
              >

                {/* CONNECTOR */}
                <div
                  className={`absolute left-1/2 w-[2px] -translate-x-1/2 bg-[#2563EB]/15 ${
                    step.position === "top"
                      ? "bottom-[120px] h-[120px]"
                      : "top-[120px] h-[120px]"
                  }`}
                />

                {/* CONTENT */}
                <div
                  className={`flex flex-col items-center text-center ${
                    step.position === "bottom"
                      ? "order-2"
                      : ""
                  }`}
                >

                  {/* ICON */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#2563EB]/10 bg-white text-[#2563EB] shadow-[0_20px_60px_rgba(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(37,99,235,0.18)]">

                    {/* NUMBER */}
                    <div className="absolute -left-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#2563EB] text-[11px] font-semibold text-white">

                      {step.number}

                    </div>

                    {step.icon}

                  </div>

                  {/* TEXT */}
                  <div className="mt-7">

                    <h3
                      className="text-[30px] leading-[1] text-[#0A0F1C]"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="mx-auto mt-4 max-w-[230px] text-[14px] leading-7 text-[#6B7280]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {step.desc}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* MOBILE */}
        <div className="space-y-12 lg:hidden">

          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-start gap-5"
            >

              {/* LINE */}
              {index !== processSteps.length - 1 && (
                <div className="absolute left-[38px] top-[80px] h-[95px] w-[2px] bg-[#2563EB]/15" />
              )}

              {/* ICON */}
              <div className="relative z-10 flex h-20 w-20 min-w-[80px] items-center justify-center rounded-full border border-[#2563EB]/10 bg-white text-[#2563EB] shadow-[0_20px_60px_rgba(37,99,235,0.08)]">

                {/* NUMBER */}
                <div className="absolute -left-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-[10px] font-semibold text-white">

                  {step.number}

                </div>

                {step.icon}

              </div>

              {/* TEXT */}
              <div className="pt-2">

                <h3
                  className="text-[28px] leading-[1] text-[#0A0F1C]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-3 max-w-[320px] text-[14px] leading-7 text-[#6B7280]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {step.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* LINE ANIMATION */}
      <style jsx>{`
        @keyframes line {
          0% {
            left: -180px;
          }

          100% {
            left: 100%;
          }
        }

        .animate-line {
          animation: line 4s linear infinite;
        }
      `}</style>

    </section>
  );
}