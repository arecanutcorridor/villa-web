'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Home, Sofa, Flame } from 'lucide-react';

export default function LivingSpacesSection() {
  const spaces = [
    {
      icon: Sofa,
      title: 'Living Room',
      description: 'Elegant living spaces with premium furnishings and entertainment systems',
      image: '/images/living-room/living-room-1.png',
    },
    {
      icon: Flame,
      title: 'Dining Hall',
      description: 'Sophisticated dining area perfect for intimate gatherings and celebrations',
      image: '/images/dining/dining-1.png',
    },
    {
      icon: Home,
      title: 'Bedrooms',
      description: 'Luxuriously appointed bedrooms with premium linens and spa-like bathrooms',
      image: '/images/bedroom/bedroom-1.png',
    },
  ];

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
            Interior Design
          </span>
          <h2 className="text-4xl font-bold text-primary mt-4">
            Living Spaces
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {spaces.map((space, index) => {
            const Icon = space.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {space.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {space.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
