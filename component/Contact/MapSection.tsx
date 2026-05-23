"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  const address =
    "Ganesh Glory 1313, 13th Floor, Jagatpur Road, Gota, SG Highway, Ahmedabad, Gujarat 382470";

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

  return (
    /* REDUCED TOP & BOTTOM SPACE */
    <section className="bg-white px-4 py-2 sm:px-6 lg:px-16 lg:py-4">

      <div className="mx-auto max-w-[1400px]">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[6px] border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
        >

          {/* MAP */}
          <iframe
            title="Nexera Consultancy Location"
            src={mapUrl}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[280px] w-full sm:h-[350px] lg:h-[430px]"
            style={{
              border: 0,
              filter:
                "grayscale(5%) contrast(1.02) brightness(1)",
            }}
          />

          {/* LIGHT OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.02] via-transparent to-transparent" />

        </motion.div>

      </div>

    </section>
  );
}