'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HighlightsSection() {
  const highlights = [
    {
      title: 'Breathtaking Views',
      description: 'Wake up to panoramic vistas of lush gardens and tropical landscapes',
      image: '/images/hero/hero-3.png',
    },
    {
      title: 'Private Beach Access',
      description: 'Exclusive access to pristine sandy beaches for swimming and relaxation',
      image: '/images/outside/outside-1.png',
    },
    {
      title: 'Gourmet Dining',
      description: 'Culinary excellence with international cuisine prepared fresh daily',
      image: '/images/kitchen/kitchen-1.png',
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
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-primary mt-4">
            Villa Highlights
          </h2>
        </motion.div>

        <div className="space-y-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="text-3xl font-bold text-primary mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {highlight.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
