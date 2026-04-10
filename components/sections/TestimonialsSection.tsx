'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'An absolutely incredible experience! The villa exceeded all our expectations. The attention to detail and service was impeccable.',
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      rating: 5,
      text: 'This is the perfect destination for a luxurious vacation. Every moment felt special, and the staff made us feel incredibly welcome.',
    },
    {
      name: 'Emma Wilson',
      location: 'London, UK',
      rating: 5,
      text: 'Outstanding! The amenities are world-class and the views are breathtaking. We&apos;ve already booked our return visit.',
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
            Guest Reviews
          </span>
          <h2 className="text-4xl font-bold text-primary mt-4">
            What Our Guests Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface rounded-lg p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              <div>
                <p className="font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
