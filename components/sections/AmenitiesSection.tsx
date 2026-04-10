'use client';

import { motion } from 'framer-motion';
import { Wifi, Utensils, Dumbbell, Waves, Home, Trees } from 'lucide-react';

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Stay connected with premium internet throughout the villa',
    },
    {
      icon: Utensils,
      title: 'Personal Chef',
      description: 'Gourmet dining prepared by our world-class culinary team',
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'Fully equipped gym with personal training available',
    },
    {
      icon: Waves,
      title: 'Infinity Pool',
      description: 'Resort-style heated pool with panoramic views',
    },
    {
      icon: Home,
      title: 'Smart Home',
      description: 'Complete home automation for ultimate convenience',
    },
    {
      icon: Trees,
      title: 'Spa & Wellness',
      description: 'Rejuvenating treatments in our private spa sanctuary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            World-Class Facilities
          </span>
          <h2 className="text-4xl font-bold text-primary mt-4">
            Premium Amenities at Your Fingertips
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
