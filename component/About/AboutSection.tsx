"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Expert guidance from certified consultants",
  "Comprehensive visa and immigration services",
  "Transparent process and competitive pricing",
  "24/7 customer support and assistance",
];

export default function AboutSection() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-25 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        
        {/* CENTERED HEADER SECTION */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-2 text-[10px] uppercase tracking-[0.4em] text-[#2563EB] sm:text-[12px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
           About Nexera Consultancy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-[900px] text-[40px] leading-[0.90] text-black sm:text-[56px] lg:text-[68px]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            We Are a Trusted Visa and <br className="hidden md:block" />
            <span className=" text-[#2563EB]"> Immigration Agent</span>
          </motion.h2>

          {/* DESCRIPTION BELOW TITLE */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-[750px] text-[15px] leading-6 text-gray-500 sm:text-[15px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            With over a decade of experience, Nexera Consultancy stands as a beacon 
            of reliability in the complex world of global immigration, bridging the gap 
            between your current aspirations and your future reality.
          </motion.p>
        </div>

        {/* MAIN CONTENT GRID - Using items-stretch to align top and bottom */}
        <div className="grid grid-cols-1 items-stretch gap-16 lg:grid-cols-12 lg:gap-12">
          
          {/* LEFT: IMAGE COMPOSITION (UNTOUCHED LAYOUT) */}
          <div className="relative lg:col-span-7">
            {/* Main Large Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 aspect-[4/3] lg:left-13  w-[600px] overflow-hidden rounded-[3px] bg-gray-100 shadow-[3px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop" 
                alt="Our Professional Office"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e266d]/30 to-transparent" />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-15 -left-6 z-20 hidden h-64 w-48 overflow-hidden rounded-[3px] border-[4px] border-white shadow-2xl sm:block lg:-bottom-12 lg:-left-2 lg:w-64"
            >
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop" 
                alt="Team Meeting"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Years of Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
              className="absolute -right-4 top-1/2 z-30 flex h-32 w-32 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#2563EB] text-white shadow-xl lg:-right-10 lg:h-40 lg:w-40"
            >
              <span className="text-4xl font-bold lg:text-5xl" style={{ fontFamily: "'Inter', sans-serif" }}>10+</span>
              <span className="text-[10px] uppercase tracking-widest opacity-80">Years Exp</span>
            </motion.div>
          </div>

          {/* RIGHT: TEXT CONTENT - Flex layout to match Image height */}
          <div className="flex flex-col justify-between lg:col-span-5 lg:pl-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full justify-between py-2"
            >
              {/* Body Text */}
              <div 
                className="text-[15px] leading-7 text-gray-600 sm:text-[15px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <p className="mb-5">
                  We understand that each client's situation is unique, which is why we provide tailored solutions that meet your specific needs. 
                  Our team of experienced immigration consultants stays up-to-date with the latest immigration laws and policies to ensure the best possible outcomes for our clients.
                </p>
              </div>

              {/* FEATURES LIST */}
              <div className="my-3 space-y-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 border-l-2 border-gray-100 py-1 pl-4 transition-colors hover:border-[#2563EB]"
                  >
                    <CheckCircle2 size={18} className="flex-shrink-0 text-[#2563EB]" />
                    <span 
                      className="text-[14px] font-medium text-[#1e266d] sm:text-[15px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA BUTTON - Anchored to bottom */}
              <div className="mt-7">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center gap-3 rounded-[3px] bg-[#2563EB] px-10 py-5 text-[15px] font-bold text-white transition-all hover:bg-white hover:text-blue-700 hover:border shadow-lg shadow-blue-100"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span>CONTACT US</span>
                    
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}