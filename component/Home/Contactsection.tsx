"use client";

import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

// ── Variants ─────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

const labelVariant: Variants = {
  hidden: { opacity: 0, y: 10, letterSpacing: "0.1em" },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    letterSpacing: "0.32em",
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

// ── Animates each LINE as a block ────────────────────────────
function AnimatedLine({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.span
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
      style={{ display: "block", ...style }}
    >
      {children}
    </motion.span>
  );
}

const contactItems = [
  { icon: Phone, label: "Phone", value: "+91 9898938186", isMultiLine: false },
  { icon: Mail, label: "Email", value: "info@nexeraconsultancy.in", isMultiLine: false },
  {
    icon: MapPin,
    label: "Address",
    value: "Ganesh Glory 1313, 13th Floor,\nJagatpur Road, Gota,\nSG Highway,\nAhmedabad, Gujarat 382470",
    isMultiLine: true,
  },
];

export default function ContactSection() {
  return (
    <section className="overflow-hidden bg-white px-4 py-10 sm:px-6 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto grid max-w-[1350px] overflow-hidden shadow-xl lg:grid-cols-2">

        {/* ───────── LEFT PANEL ───────── */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative min-h-[520px] overflow-hidden md:min-h-[620px]"
        >
          <img
            src="CTA.png"
            alt="Students"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 flex h-full flex-col justify-center px-6 py-10 text-white sm:px-8 md:px-14">

            {/* Label */}
            <motion.p
              custom={0.2}
              variants={labelVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[11px] uppercase text-blue-200 md:text-[12px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get In Touch
            </motion.p>

            {/* Heading */}
            <h2
              className="mt-5 max-w-[620px] text-4xl font-semibold leading-[1.12] text-white sm:text-5xl md:text-6xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <AnimatedLine delay={0.35}>Let's Start</AnimatedLine>
              <AnimatedLine delay={0.5}>
                Your <span className="text-[#60A5FA]">Journey</span>
              </AnimatedLine>
            </h2>

            {/* Description */}
            <motion.p
              custom={0.7}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 max-w-[520px] text-[14px] leading-7 text-gray-200 md:text-[15px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ready to start your immigration journey? Contact us today for a
              consultation and let our experts guide you through the process.
            </motion.p>

            {/* Contact items */}
            <div className="mt-10 space-y-6">
              {contactItems.map(({ icon: Icon, label, value, isMultiLine }, i) => (
                <motion.div
                  key={label}
                  custom={0.85 + i * 0.15}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2563EB]">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p
                      className="text-[11px] uppercase tracking-[0.2em] text-blue-200"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {label}
                    </p>
                    <p
                      className="mt-1 max-w-[380px] text-[14px] leading-7 text-white md:text-[15px]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        whiteSpace: isMultiLine ? "pre-line" : undefined,
                      }}
                    >
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ───────── RIGHT FORM ───────── */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white px-5 py-10 sm:px-6 md:px-10 md:py-12"
        >
          <div className="w-full max-w-[520px]">

            {/* Label */}
            <motion.p
              custom={0.2}
              variants={labelVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[11px] uppercase text-[#2563EB] md:text-[12px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Quick Contact
            </motion.p>

            {/* Heading */}
            <h3
              className="mt-4 text-4xl font-semibold leading-[1.12] text-[#111827] sm:text-5xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <AnimatedLine delay={0.35}>Free</AnimatedLine>
              <AnimatedLine delay={0.5} className="text-[#2563EB]">
                Consultation
              </AnimatedLine>
            </h3>

            {/* Description */}
            <motion.p
              custom={0.65}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-5 text-[14px] leading-7 text-gray-500 md:text-[15px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get started with your immigration journey today with professional
              guidance from our experienced consultants.
            </motion.p>

            {/* Form */}
            <div className="mt-8 space-y-4">

              {/* First & Last Name */}
              <div className="grid gap-4 sm:grid-cols-2">
                {(["First Name *", "Last Name *"] as const).map((ph, i) => (
                  <motion.input
                    key={ph}
                    custom={0.75 + i * 0.1}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    type="text"
                    placeholder={ph}
                    className="border border-[#D1D5DB] bg-white px-5 py-4 text-[14px] text-[#111827] placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#2563EB]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                ))}
              </div>

              {/* Email */}
              <motion.input
                custom={0.95}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                type="email"
                placeholder="Email Address *"
                className="w-full border border-[#D1D5DB] bg-white px-5 py-4 text-[14px] text-[#111827] placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#2563EB]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />

              {/* Phone */}
              <motion.input
                custom={1.05}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-[#D1D5DB] bg-white px-5 py-4 text-[14px] text-[#111827] placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#2563EB]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />

              {/* Select */}
              <motion.select
                custom={1.15}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full border border-[#D1D5DB] bg-white px-5 py-4 text-[14px] text-gray-500 outline-none transition-all duration-300 focus:border-[#2563EB]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <option>General Inquiry</option>
                <option>Work Visa</option>
                <option>Study Visa</option>
                <option>Tourist Visa</option>
                <option>Permanent Residency</option>
                <option>Document Verification</option>
              </motion.select>

              {/* Consent */}
              <motion.p
                custom={1.25}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-[12px] leading-6 text-[#2563EB] md:text-[13px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                By submitting this form, you agree to be contacted by our
                immigration experts.
              </motion.p>

              {/* Button */}
              <motion.button
                custom={1.35}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-3 border border-[#2563EB] bg-[#2563EB] px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-white hover:text-[#2563EB] md:text-[14px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Get Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}