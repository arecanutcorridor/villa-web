'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/hero/hero-2.png"
              alt="Villa Exterior"
              width={500}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                Welcome to Luxury
              </span>
              <h2 className="text-4xl font-bold text-primary mt-4 mb-6">
                Your Private Sanctuary Awaits
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-600 mb-8"
            >
              <p className="leading-relaxed">
                Nestled in the heart of tropical paradise, Areca-Nut Corridor is your escape from the ordinary. Our meticulously designed villa offers the perfect blend of modern luxury and natural beauty.
              </p>
              <p className="leading-relaxed">
                Whether you&apos;re seeking a romantic getaway, a family vacation, or a peaceful retreat, our world-class amenities and attentive service ensure an unforgettable experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-border"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-sm text-text-muted">Luxurious Rooms</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-text-muted">Amenities</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-text-muted">Concierge Service</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
