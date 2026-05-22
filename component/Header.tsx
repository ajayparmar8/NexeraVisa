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
  const [isOpen, setIsOpen] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#E5E7EB] bg-white shadow-sm">

      <div className="mx-auto flex h-[80px] max-w-[1450px] items-center justify-between px-5 lg:px-10">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center"
        >
          <img
            src="/Logo2.png"
            alt="Nexera Consultancy"
            className="h-24 w-auto object-contain sm:h-28 md:h-32"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-10 lg:flex">

          {/* HOME */}
          <Link
            href="/"
            className="group relative text-[18px] text-[#0A0F1C]"
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
            }}
          >
            Home

            <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* VISA */}
          <div
            className="relative"
            onMouseEnter={() =>
              setIsOpen(true)
            }
            onMouseLeave={() =>
              setIsOpen(false)
            }
          >
            <button
              className="group relative flex items-center gap-1 text-[18px] text-[#0A0F1C]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              Visa

              <ChevronDown
                size={18}
                className={`mt-[3px] transition-all duration-300 ${
                  isOpen
                    ? "rotate-180"
                    : ""
                }`}
              />

              <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* DROPDOWN */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
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
                  className="absolute left-0 top-16 w-[250px] overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex flex-col py-2">

                    <Link
                      href="/workvisa"
                      className="px-6 py-4 text-[18px] text-[#0A0F1C] transition-all duration-300 hover:pl-8 hover:text-[#2563EB]"
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      Work Visa
                    </Link>

                    <Link
                      href="/studyvisa"
                      className="px-6 py-4 text-[18px] text-[#0A0F1C] transition-all duration-300 hover:pl-8 hover:text-[#2563EB]"
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      Study Visa
                    </Link>

                    <Link
                      href="/touristvisa"
                      className="px-6 py-4 text-[18px] text-[#0A0F1C] transition-all duration-300 hover:pl-8 hover:text-[#2563EB]"
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
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
            className="group relative text-[18px] text-[#0A0F1C]"
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
            }}
          >
            About Us

            <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="group relative text-[18px] text-[#0A0F1C]"
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
            }}
          >
            Contact Us

            <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* CALL SECTION */}
          <div className="hidden items-center gap-3 lg:flex">

            <div className="text-right">

              <p
                className="text-[12px] text-[#6B7280]"
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                }}
              >
                Call Us
              </p>

              <p
                className="text-[16px] font-semibold text-[#2563EB]"
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                }}
              >
                +91 9898938186
              </p>
            </div>

            {/* CALL ICON */}
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2563EB] transition-all duration-300 hover:bg-[#2563EB]">

              <Phone
                size={18}
                className="text-[#2563EB] transition-all duration-300 hover:text-white"
              />

            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#DCEBFF] lg:hidden"
          >
            {mobileMenu ? (
              <X
                size={24}
                className="text-[#2563EB]"
              />
            ) : (
              <Menu
                size={24}
                className="text-[#2563EB]"
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
              y: -10,
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
            className="border-t border-[#E5E7EB] bg-white lg:hidden"
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
                  className="border-b border-gray-100 py-4 text-[26px] text-[#0A0F1C] transition-all duration-300 hover:text-[#2563EB]"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {/* MOBILE CALL */}
              <div className="mt-5 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB]">

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
                    className="text-[15px] font-semibold text-[#2563EB]"
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