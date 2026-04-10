'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { id: 1, src: '/images/gallery/gallery-1.png', alt: 'Villa Exterior', category: 'Exterior' },
    { id: 2, src: '/images/gallery/gallery-2.png', alt: 'Infinity Pool', category: 'Outdoor' },
    { id: 3, src: '/images/gallery/gallery-3.png', alt: 'Living Area', category: 'Interior' },
    { id: 4, src: '/images/gallery/gallery-4.png', alt: 'Dining Hall', category: 'Dining' },
    { id: 5, src: '/images/gallery/gallery-5.png', alt: 'Bedroom', category: 'Bedrooms' },
    { id: 6, src: '/images/gallery/gallery-6.png', alt: 'Spa Area', category: 'Wellness' },
    { id: 7, src: '/images/living-room/living-room-1.png', alt: 'Living Room', category: 'Interior' },
    { id: 8, src: '/images/kitchen/kitchen-1.png', alt: 'Kitchen', category: 'Dining' },
    { id: 9, src: '/images/bedroom/bedroom-1.png', alt: 'Master Bedroom', category: 'Bedrooms' },
    { id: 10, src: '/images/bathroom/bathroom-1.png', alt: 'Bathroom', category: 'Bathrooms' },
    { id: 11, src: '/images/gym/gym-1.jpeg', alt: 'Gym', category: 'Wellness' },
    { id: 12, src: '/images/outside/outside-1.png', alt: 'Garden View', category: 'Outdoor' },
    { id: 13, src: '/images/dining/dining-1.png', alt: 'Dining Room', category: 'Dining' },
    { id: 14, src: '/images/gallery/gallery-9.png', alt: 'Terrace', category: 'Outdoor' },
    { id: 15, src: '/images/gallery/gallery-10.png', alt: 'Lounge', category: 'Interior' },
    { id: 16, src: '/images/gallery/gallery-11.png', alt: 'Night View', category: 'Exterior' },
  ];

  const categories = ['All', 'Exterior', 'Outdoor', 'Interior', 'Bedrooms', 'Bathrooms', 'Dining', 'Wellness'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main className="w-full">
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Visual Tour
            </span>
            <h1 className="text-5xl font-bold text-primary mt-4">
              Gallery
            </h1>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Explore the elegance and beauty of our villa through our comprehensive photo gallery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-surface text-primary hover:bg-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
