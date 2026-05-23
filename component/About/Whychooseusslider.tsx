"use client";

import { useRef } from "react";

const cards = [
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Tailored Solutions",
    desc: "We customize every aspect to suit your business needs and long-term growth plans.",
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.75V17h8v-2.25A7 7 0 0 0 12 2z" />
      </svg>
    ),
    title: "Expert Insights",
    desc: "Our consultants bring deep industry knowledge to solve your challenges efficiently.",
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Client-Centered",
    desc: "We prioritize your goals and tailor every solution to your unique business needs.",
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "Strategic Planning",
    desc: "We create scalable strategies designed for sustainable long-term success.",
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Fast Execution",
    desc: "Quick implementation and efficient processes to maximize your business productivity.",
  },
];

const CARD_W = 300;
const GAP = 22;
const STEP = CARD_W + GAP;

export default function WhyChooseUsSlider() {
  const trackRef = useRef<any>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(STEP);
  const setWidth = cards.length * STEP;

  const getCurrentPos = () => trackRef.current?._pos || STEP;

  const clampScroll = (val: number) => {
    if (val >= setWidth) return val - setWidth;
    if (val < 0) return val + setWidth;
    return val;
  };

  const applyScroll = (val: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${val}px)`;
    }
  };

  const onMouseDown = (e: any) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = getCurrentPos();
    e.currentTarget.style.cursor = "grabbing";
  };

  const onMouseMove = (e: any) => {
    if (!isDragging.current) return;
    const next = clampScroll(scrollStart.current + (startX.current - e.clientX));
    applyScroll(next);
    trackRef.current._pos = next;
  };

  const onMouseUp = (e: any) => {
    isDragging.current = false;
    e.currentTarget.style.cursor = "grab";
  };

  const onTouchStart = (e: any) => {
    startX.current = e.touches[0].clientX;
    scrollStart.current = getCurrentPos();
  };

  const onTouchMove = (e: any) => {
    const next = clampScroll(scrollStart.current + (startX.current - e.touches[0].clientX));
    applyScroll(next);
    trackRef.current._pos = next;
  };

  return (
    <>
      <style>{`
        @keyframes wcuFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wcu-eyebrow { animation: wcuFadeUp 0.65s ease forwards 0.05s; opacity: 0; }
        .wcu-heading { animation: wcuFadeUp 0.70s ease forwards 0.20s; opacity: 0; }
        .wcu-subtext { animation: wcuFadeUp 0.70s ease forwards 0.35s; opacity: 0; }

        /* card dot-grid texture */
        .wcu-card-tex::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.028) 1px, transparent 0);
          background-size: 18px 18px;
          pointer-events: none;
          z-index: 0;
        }
        .wcu-card-tex::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 55%);
          pointer-events: none;
          z-index: 1;
        }

        .wcu-viewport { cursor: grab; }
        .wcu-viewport:active { cursor: grabbing; }

        .wcu-fade-l {
          background: linear-gradient(to right,
            #f5f3ef 0%,
            rgba(245,243,239,0.93) 35%,
            rgba(245,243,239,0.5) 65%,
            transparent 100%
          );
        }
        .wcu-fade-r {
          background: linear-gradient(to left,
            #f5f3ef 0%,
            rgba(245,243,239,0.93) 35%,
            rgba(245,243,239,0.5) 65%,
            transparent 100%
          );
        }

        /* watermark ghost text */
        .wcu-watermark-l {
          position: absolute;
          left: -60px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 220px;
          font-weight: 800;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 2px rgba(180,170,155,0.18);
          font-family: 'Cormorant Garamond', serif;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          white-space: nowrap;
        }
        .wcu-watermark-r {
          position: absolute;
          right: -60px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 220px;
          font-weight: 800;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 2px rgba(180,170,155,0.18);
          font-family: 'Cormorant Garamond', serif;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          white-space: nowrap;
        }

        /* big center radial blob like the screenshot */
        .wcu-blob-center {
          position: absolute;
          left: 50%;
          bottom: -60px;
          transform: translateX(-50%);
          width: 700px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, rgba(210,205,195,0.28) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 640px) {
          .wcu-watermark-l,
          .wcu-watermark-r { font-size: 120px; }
          .wcu-fade-l,
          .wcu-fade-r { width: 80px !important; }
        }
      `}</style>

      {/* ── SECTION ── warm off-white like the screenshot */}
      <section
        className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-16 lg:py-15"
        style={{ backgroundColor: "#f5f3ef" }}
      >

        {/* ── BACKGROUND TEXTURE LAYERS ── */}

        {/* dot grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.045) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* large ghost watermark — left side */}
        <div className="wcu-watermark-l">W</div>

        {/* large ghost watermark — right side */}
        <div className="wcu-watermark-r">C</div>

        {/* big warm radial blob at bottom-center (like screenshot) */}
        <div className="wcu-blob-center" />

        {/* top-left blue ambient glow */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 z-0 h-[420px] w-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.055) 0%, transparent 68%)" }}
        />

        {/* bottom-right blue ambient glow */}
        <div
          className="pointer-events-none absolute -bottom-36 -right-36 z-0 h-[380px] w-[380px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 68%)" }}
        />

        {/* ── CONTENT ── */}
        <div className="relative z-10 mx-auto max-w-[1500px]">

          {/* HEADER */}
          <div className="mb-14 text-center">

            <p
              className="wcu-eyebrow mb-3 text-[10px] uppercase tracking-[0.4em] text-blue-600 sm:text-[11px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Why Choose Us
            </p>

            <h2
              className="wcu-heading mx-auto max-w-[950px] text-[42px] leading-none text-gray-900 sm:text-[58px] md:text-[68px]"
              style={{ fontFamily: "'Cormorant Garamond', serif", textDecoration: "none" }}
            >
              Why Choose{" "}
              <span className="text-blue-600" style={{ textDecoration: "none" }}>
                Nexera
              </span>{" "}
              Consultancy?
            </h2>

            <p
              className="wcu-subtext mx-auto mt-5 max-w-[640px] text-[14px] leading-7 text-gray-500 md:text-[15px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We go beyond surface-level advice — our consulting approach is built on data, strategy, and execution.
            </p>

          </div>

          {/* SLIDER */}
          <div className="-mx-4 sm:-mx-6 lg:-mx-16">
            <div
              className="wcu-viewport relative overflow-hidden py-5 pb-7"
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
            >
              {/* left fade */}
              <div
                className="wcu-fade-l pointer-events-none absolute left-0 top-0 z-20 h-full"
                style={{ width: "380px" }}
              />
              {/* right fade */}
              <div
                className="wcu-fade-r pointer-events-none absolute right-0 top-0 z-20 h-full"
                style={{ width: "380px" }}
              />

              {/* TRACK */}
              <div
                ref={trackRef}
                className="flex select-none will-change-transform"
                style={{
                  gap: `${GAP}px`,
                  padding: `4px ${GAP}px 24px 340px`,
                  transform: `translateX(-${STEP}px)`,
                }}
              >
                {[...cards, ...cards].map((card, i) => (
                  <div
                    key={i}
                    className="wcu-card-tex group relative flex-shrink-0 overflow-hidden rounded-[20px] border border-stone-200/70 bg-white/55 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200/60 hover:shadow-[0_20px_48px_rgba(37,99,235,0.08),0_4px_12px_rgba(0,0,0,0.05)]"
                    style={{ width: `${CARD_W}px`, height: "320px" }}
                  >
                    {/* card inner */}
                    <div
                      className="relative z-[2] flex h-full flex-col justify-between p-7"
                      style={{ boxSizing: "border-box" }}
                    >

                      {/* TOP: icon */}
                      <div className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-[14px] border border-stone-200/60 bg-white/85 text-blue-600">
                        {card.icon}
                      </div>

                      {/* BOTTOM: text */}
                      <div className="border-t border-stone-200/50 pt-4">

                        <h3
                          className="mb-2.5 text-[32px] font-medium leading-[1.1] text-gray-900"
                          style={{ fontFamily: "'Cormorant Garamond', serif", textDecoration: "none" }}
                        >
                          {card.title}
                        </h3>

                        <p
                          className="text-[13.5px] leading-[1.75] text-gray-500"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {card.desc}
                        </p>

                        {/* dots */}
                        <div className="flex justify-end gap-1.5 pt-3">
                          <div className="h-[7px] w-[7px] rounded-full bg-blue-500/60" />
                          <div className="h-[7px] w-[7px] rounded-full bg-stone-300/60" />
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}