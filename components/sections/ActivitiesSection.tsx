'use client';

import { motion } from 'framer-motion';
import { Waves, Mountain, Utensils, Sparkles } from 'lucide-react';

export default function ActivitiesSection() {
  const activities = [
    {
      icon: Waves,
      title: 'Water Sports',
      description: 'Enjoy swimming, snorkeling, and water activities with professional instructors available',
    },
    {
      icon: Mountain,
      title: 'Hiking Excursions',
      description: 'Guided tours through tropical forests and scenic mountain trails',
    },
    {
      icon: Utensils,
      title: 'Cooking Classes',
      description: 'Learn to prepare local cuisine from our expert culinary team',
    },
    {
      icon: Sparkles,
      title: 'Wellness Retreats',
      description: 'Yoga, meditation, and spa treatments for complete relaxation and rejuvenation',
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
            Guest Experiences
          </span>
          <h2 className="text-4xl font-bold text-primary mt-4">
            Activities & Experiences
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 bg-white rounded-lg p-8"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
