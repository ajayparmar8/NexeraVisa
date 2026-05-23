"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
   <footer className="bg-[#020817] text-gray-400 py-8 px-4 sm:px-6 md:px-10 lg:px-16 font-sans">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

    {/* Company Info Section */}
    <div className="space-y-5 text-center sm:text-left">

      {/* Logo */}
      <div className="flex justify-center sm:justify-start">
        <img
          src="Logo4.png"
          alt="Nexera Consultancy"
          className="h-14 sm:h-16 w-auto object-contain sm:-ml-4"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
        Your trusted partner for visa and immigration
        services. We help make your dreams of living,
        working, and studying abroad a reality.
      </p>

      <div className="flex justify-center sm:justify-start space-x-4">

        <a
          href="#"
          className="hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>

        <a
          href="#"
          className="hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>

        <a
          href="#"
          className="hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              ry="5"
            ></rect>

            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>

            <line
              x1="17.5"
              y1="6.5"
              x2="17.51"
              y2="6.5"
            ></line>
          </svg>
        </a>

        <a
          href="#"
          className="hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>

            <circle
              cx="4"
              cy="4"
              r="2"
            ></circle>
          </svg>
        </a>

      </div>

    </div>

    {/* Quick Links Section */}
    <div className="space-y-6 text-center">

      <h3 className="text-white text-lg font-bold">
        Quick Links
      </h3>

      <ul className="space-y-3 text-sm">

        <li>
          <Link
            href="/"
            className="hover:text-white transition-colors"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="hover:text-white transition-colors"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </li>

      </ul>

    </div>

    {/* Our Services Section */}
    <div className="space-y-6 text-center">

      <h3 className="text-white text-lg font-bold">
        Our Services
      </h3>

      <ul className="space-y-3 text-sm">

        <li>
          <Link
            href="/workvisa"
            className="hover:text-white transition-colors"
          >
            Work Visa
          </Link>
        </li>

        <li>
          <Link
            href="/studyvisa"
            className="hover:text-white transition-colors"
          >
            Study Visa
          </Link>
        </li>

        <li>
          <Link
            href="/touristvisa"
            className="hover:text-white transition-colors"
          >
            Tourist Visa
          </Link>
        </li>

      </ul>

    </div>

    {/* Contact Info Section */}
    <div className="space-y-6 text-center sm:text-left">

      <h3 className="text-white text-lg font-bold text-center sm:text-left">
        Contact Info
      </h3>

      <div className="space-y-4 text-sm">

        <div className="flex items-start justify-center sm:justify-start space-x-3">

          <svg
            className="w-5 h-5 mt-1 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>

            <circle
              cx="12"
              cy="10"
              r="3"
            ></circle>
          </svg>

          <p>
            Ganesh Glory 1313, 13th Floor,
            <br />
            Jagatpur Road, Gota,
            <br />
            SG Highway,
            <br />
            Ahmedabad, Gujarat 382470
          </p>

        </div>

        <div className="flex items-center justify-center sm:justify-start space-x-3">

          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 015.06 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
          </svg>

          <p>+91 9898938186</p>

        </div>

        <div className="flex items-center justify-center sm:justify-start space-x-3">

          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>

            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>

          <p className="break-all sm:break-normal">
            info@nexeraconsultancy.in
          </p>

        </div>

      </div>

    </div>

  </div>

  {/* Copyright Divider */}
  <div className="mt-8 pt-5 border-t border-gray-800 text-center text-sm">

    <p>
      © 2025 Nexera Consultancy. All rights reserved.
    </p>

  </div>

</footer>
  );
};

export default Footer;