"use client";

import { useState } from "react";

const services = [
  {
    title: "Expert Documentation",
    desc: "Professional preparation of all required documents and forms.",
    image:
      "Work/WorkW1.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Fast Processing",
    desc: "Expedited processing to minimize waiting times.",
    image:
      "Work/WorkW2.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Dedicated Support",
    desc: "Personal case manager for each application.",
    image:
      "Work/WorkW4.png",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Proven Success",
    desc: "High approval rates with thousands of successful cases.",
    image:
      "Work/WorkW3.png",
    className: "md:col-span-2 md:row-span-1",
  },
];

const EYEBROW = "Why Choose Us";

export default function WhyChooseUs() {
  const [inView, setInView] = useState(false);

 const sectionRef = (el: HTMLDivElement | null) => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.12 }
    );
    observer.observe(el);
  };

  const slideIn = (delay = "0ms") =>
    inView
      ? { opacity: 1, transform: "translateX(0)", transition: `opacity 0.72s cubic-bezier(0.22,1,0.36,1) ${delay}, transform 0.72s cubic-bezier(0.22,1,0.36,1) ${delay}` }
      : { opacity: 0, transform: "translateX(-48px)" };

  return (
    <section ref={sectionRef} className="bg-white px-4 py-20 sm:px-6 lg:px-16">
      <div className="mx-auto max-w-[1400px]">

        {/* TOP */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

          {/* LEFT */}
          <div>

            {/* Eyebrow — letter-by-letter left-to-right */}
            <p
              className="mb-3 text-[11px] uppercase tracking-[0.42em] text-[#2563EB]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {EYEBROW.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-10px)",
                    transition: inView
                      ? `opacity 0.4s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.04}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.04}s`
                      : "none",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>

            {/* Heading */}
            <div style={slideIn("0.20s")}>
              <h2
                className="max-w-[620px] text-[42px] leading-[1] text-[#0A0F1C] sm:text-[56px] md:text-[68px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  textShadow:
                    "0px 1px 0px rgba(255,255,255,0.7), 0px 8px 30px rgba(10,15,28,0.08)",
                }}
              >
                Why People Trust <br />
                Our{" "}
                <span className="text-[#2563EB]">Visa Experts</span>
              </h2>
            </div>

          </div>

          {/* RIGHT */}
          <p
            className="max-w-[450px] text-[15px] leading-8 text-[#6B7280] md:pt-12 md:text-right"
            style={{ fontFamily: "'Inter', sans-serif", ...slideIn("0.35s") }}
          >
            Providing reliable visa guidance, complete documentation, and fast
            processing support for successful international opportunities.
          </p>

        </div>

        {/* GRID */}
        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3 md:auto-rows-[260px]">
          {services.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[3px] ${item.className}`}
              style={slideIn(`${0.10 + index * 0.12}s`)}
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full scale-100 object-cover transition-transform duration-[5000ms] ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071019]/95 via-[#071019]/35 to-transparent transition-all duration-500 group-hover:from-[#071019]/98 group-hover:via-[#071019]/55" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
                <div className="translate-y-8 transition-all duration-500 group-hover:translate-y-0">

                  {/* TITLE */}
                  <h3
                    className="text-[28px] leading-none text-white md:text-[34px]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <div className="overflow-hidden">
                    <p
                      className="mt-0 max-w-[420px] translate-y-6 opacity-0 text-[14px] leading-7 text-white/75 transition-all duration-500 group-hover:mt-4 group-hover:translate-y-0 group-hover:opacity-100 md:text-[15px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}