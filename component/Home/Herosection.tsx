"use client";

import  { useEffect, useState } from "react";

import {
  BriefcaseBusiness,
  GraduationCap,
  Globe2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  // NEXT
  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS
  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-white">

      {/* HERO */}
      <div className="relative h-[620px] w-full overflow-hidden md:h-[700px]">

        {/* SLIDER IMAGES */}
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Hero Background"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2000ms] ${
              currentImage === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          />
        ))}

        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-[42%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black md:left-18 md:h-14 md:w-14"
        >
          <ChevronLeft size={26} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
         className="absolute right-4 top-[42%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black md:right-18 md:h-14 md:w-14"
        >
          <ChevronRight size={26} />
        </button>

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex items-start justify-center px-5 pt-28 md:px-6 md:pt-42">

          <div className="text-center">

            {/* SUBTITLE */}
            <p
              className="mb-4 text-[11px] uppercase tracking-[0.32em] text-blue-200 md:text-[13px]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Welcome To Nexera Consultancy
            </p>

            {/* TITLE */}
            <h1
              className="mx-auto max-w-[920px] text-4xl font-semibold leading-[1.12] text-white sm:text-5xl md:text-6xl"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              The Most Trusted Visa and
              <br className="hidden md:block" />
              Immigration Consultant
            </h1>

            {/* BUTTON */}
            <button
              className="mt-8 bg-white px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#2563EB] transition-all duration-300 hover:bg-[#2563EB] hover:text-white md:mt-10 md:px-9 md:py-4 md:text-[14px]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* SERVICE CARDS */}
      <div className="relative z-20 mx-auto -mt-30 max-w-[1200px] px-6 pb-10">

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">

          {/* CARD 1 */}
          <div className="group bg-white px-7 py-4 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2">

            {/* ICON */}
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#2563EB] text-white transition-all duration-700 group-hover:rotate-[360deg]">

              <BriefcaseBusiness size={20} />

            </div>

            {/* TITLE */}
            <h3
              className="mt-4 text-[20px] text-[#111827]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Working Visas
            </h3>

            {/* DESCRIPTION */}
            <p
              className="mx-auto mt-2 max-w-[260px] text-[13px] leading-5 text-gray-500"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Professional assistance for obtaining work visas
              across multiple countries.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white px-7 py-4 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2">

            {/* ICON */}
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#2563EB] text-white transition-all duration-700 group-hover:rotate-[360deg]">

              <GraduationCap size={20} />

            </div>

            {/* TITLE */}
            <h3
              className="mt-4 text-[20px] text-[#111827]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Study Visas
            </h3>

            {/* DESCRIPTION */}
            <p
              className="mx-auto mt-2 max-w-[260px] text-[13px] leading-5 text-gray-500"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Expert assistance for student visa applications
              and university admissions.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white px-7 py-4 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2">

            {/* ICON */}
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#2563EB] text-white transition-all duration-700 group-hover:rotate-[360deg]">

              <Globe2 size={20} />

            </div>

            {/* TITLE */}
            <h3
              className="mt-4 text-[20px] text-[#111827]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Permanent Residency
            </h3>

            {/* DESCRIPTION */}
            <p
              className="mx-auto mt-2 max-w-[260px] text-[13px] leading-5 text-gray-500"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Comprehensive guidance for permanent residency
              and citizenship processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;