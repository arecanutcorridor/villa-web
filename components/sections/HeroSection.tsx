'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-20">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-1.png"
          alt="Areca-Nut Corridor Luxury Villa"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4 max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Welcome to Areca-Nut Corridor
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            Experience unparalleled luxury in our stunning villa retreat, where world-class amenities meet tropical paradise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/reservations"
              className="bg-accent hover:bg-accent-light text-primary px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Reserve Now
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              View Gallery
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
