'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function GallerySection() {
  const galleryImages = [
    { id: 1, src: '/images/gallery/gallery-1.png', alt: 'Villa Exterior' },
    { id: 2, src: '/images/gallery/gallery-2.png', alt: 'Infinity Pool' },
    { id: 3, src: '/images/gallery/gallery-3.png', alt: 'Living Area' },
    { id: 4, src: '/images/gallery/gallery-4.png', alt: 'Dining Hall' },
    { id: 5, src: '/images/gallery/gallery-5.png', alt: 'Bedroom' },
    { id: 6, src: '/images/gallery/gallery-6.png', alt: 'Spa Area' },
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
            Visual Journey
          </span>
          <h2 className="text-4xl font-bold text-primary mt-4 mb-6">
            Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the beauty and elegance of our villa through stunning photography.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold transition-colors"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
