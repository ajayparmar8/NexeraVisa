"use client";

import Link from "next/link";

import {
  Phone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] =
    useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8EEF7] bg-white">

      <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between px-5 lg:px-14">

        {/* LOGO */}
        <Link href="/" className="flex items-center">

          <img
            src="/logo.png"
            alt="Nexera Consultancy"
            className="h-11 w-auto object-contain md:h-12"
          />

        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex">

          {/* HOME */}
          <Link
            href="/"
            className="group relative text-[15px] font-semibold text-[#111827]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Home

            <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-[#0096FF] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* VISA */}
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button
              className="group relative flex items-center gap-1 text-[15px] font-semibold text-[#111827]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Visa

              <ChevronDown
                size={15}
                className={`mt-[1px] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />

              <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-[#0096FF] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* DROPDOWN */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="absolute left-0 top-14 w-[230px] overflow-hidden rounded-xl border border-[#E8EEF7] bg-white shadow-[0_15px_40px_rgba(0,105,255,0.08)]"
                >
                  <div className="flex flex-col py-2">

                    <Link
                      href="/work-visa"
                      className="px-6 py-4 text-[15px] font-medium text-[#111827] transition-all duration-300 hover:pl-8 hover:text-[#0096FF]"
                      style={{
                        fontFamily:
                          "'Inter', sans-serif",
                      }}
                    >
                      Work Visa
                    </Link>

                    <Link
                      href="/study-visa"
                      className="px-6 py-4 text-[15px] font-medium text-[#111827] transition-all duration-300 hover:pl-8 hover:text-[#0096FF]"
                      style={{
                        fontFamily:
                          "'Inter', sans-serif",
                      }}
                    >
                      Study Visa
                    </Link>

                    <Link
                      href="/tourist-visa"
                      className="px-6 py-4 text-[15px] font-medium text-[#111827] transition-all duration-300 hover:pl-8 hover:text-[#0096FF]"
                      style={{
                        fontFamily:
                          "'Inter', sans-serif",
                      }}
                    >
                      Tourist Visa
                    </Link>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ABOUT */}
          <Link
            href="/about"
            className="group relative text-[15px] font-semibold text-[#111827]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            About Us

            <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-[#0096FF] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="group relative text-[15px] font-semibold text-[#111827]"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Contact Us

            <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-[#0096FF] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* CALL SECTION */}
          <div className="hidden items-center gap-3 lg:flex">

            <div className="text-right">

              <p
                className="text-[12px] text-[#5B6B85]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Call Us
              </p>

              <p
                className="text-[15px] font-semibold text-[#0096FF]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                +91 9898938186
              </p>
            </div>

            {/* CALL ICON */}
            <div className="group relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[#0096FF] transition-all duration-300 hover:bg-[#0096FF]">

              <Phone
                size={17}
                className="text-[#0096FF] transition-all duration-300 group-hover:text-white"
              />
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#DCEBFF] lg:hidden"
          >
            {mobileMenu ? (
              <X
                size={22}
                className="text-[#0096FF]"
              />
            ) : (
              <Menu
                size={22}
                className="text-[#0096FF]"
              />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
            }}
            className="border-t border-[#E8EEF7] bg-white lg:hidden"
          >
            <div className="flex flex-col px-6 py-5">

              {[
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "About Us",
                  link: "/about",
                },
                {
                  name: "Contact Us",
                  link: "/contact",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="border-b border-gray-100 py-4 text-[17px] font-semibold text-[#111827] transition-all duration-300 hover:pl-2 hover:text-[#0096FF]"
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {/* MOBILE CALL */}
              <div className="mt-5 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0096FF]">

                  <Phone
                    size={16}
                    className="text-white"
                  />

                </div>

                <div>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                    }}
                  >
                    Call Us
                  </p>

                  <p
                    className="text-[15px] font-semibold text-[#0096FF]"
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                    }}
                  >
                    +91 9898938186
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}