'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function FeaturedPackagesSection() {
  const packages = [
    {
      name: 'Monthly Rental',
      duration: '30 nights',
      price: 'Rs.300,000',
      description: 'Perfect for couples seeking intimacy and relaxation',
      features: [
        'Luxury room with AC',
        'WiFi access',
        'Private balcony',
        'Daily breakfast in room',
        'HotWater and toiletries',
      ],
    },
    {
      name: 'One Day Package',
      duration: '1 night',
      price: 'Rs.15,000',
      description: 'Create lasting memories with your loved ones',
      features: [
        'Multi-bedroom villa',
        'Kids allowed',
        'Family-friendly meals',
        '10 Minutes to Temple of the Tooth',
        'Gym Access',
      ],
      highlighted: true,
    },
    {
      name: '1 Year Contract',
      duration: '365 Days',
      price: 'Rs.2,750,000',
      description: 'Rejuvenate your mind, body, and soul',
      features: [
        'Premium suite',
        'Entire villa access',
        'Highest Package',
        'Healthy cuisine meals',
        'Personal freedom and privacy',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Special Offers
          </span>
          <h2 className="text-4xl font-bold text-primary mt-4">
            Featured Packages
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg p-8 transition-all ${
                pkg.highlighted
                  ? 'bg-primary text-white shadow-xl scale-105'
                  : 'bg-surface border border-border'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${
                pkg.highlighted ? 'text-white' : 'text-primary'
              }`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-4 ${
                pkg.highlighted ? 'text-white/80' : 'text-gray-600'
              }`}>
                {pkg.description}
              </p>

              <div className={`mb-6 pb-6 border-b ${
                pkg.highlighted ? 'border-white/20' : 'border-border'
              }`}>
                <p className={`text-sm ${pkg.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                  {pkg.duration}
                </p>
                <p className={`text-3xl font-bold ${
                  pkg.highlighted ? 'text-accent' : 'text-primary'
                }`}>
                  {pkg.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      pkg.highlighted ? 'text-accent' : 'text-primary'
                    }`} />
                    <span className={pkg.highlighted ? 'text-white/90' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/reservations"
                className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${
                  pkg.highlighted
                    ? 'bg-accent text-primary hover:bg-accent-light'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
