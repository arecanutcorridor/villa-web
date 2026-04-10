'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RoomsSection() {
  const rooms = [
    {
      id: 1,
      name: 'Modern Kitchen',
      image: '/images/rooms/room-1.png',
      description: 'Fridge, stove, microwave, and all essential appliances for a gourmet cooking experience',
      price: '$450',
    },
    {
      id: 2,
      name: 'Private Balcony',
      image: '/image/rooms/room-2.jpeg',
      description: 'Private balcony with stunning views, perfect for morning coffee or evening relaxation',
      price: '$550',
    },
    {
      id: 3,
      name: 'Presidential Suite',
      image: '/images/rooms/room-3.png',
      description: 'Ultra-luxury suite with living area, jacuzzi, and exclusive amenities',
      price: '$850',
    },
    {
      id: 4,
      name: 'Luxury Bedrooms',
      image: '/images/rooms/room-4.jpeg',
      description: 'Premium room featuring luxury bedding, fully furnished, and elegant decor for ultimate comfort',
      price: '$650',
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
            Exquisite Accommodations
          </span>
          <h2 className="text-4xl font-bold text-primary mt-4 mb-6">
            Rooms & Suites
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each room is meticulously designed with luxury and comfort in mind, offering unique experiences tailored to your preferences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {room.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {room.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <p className="text-xl font-bold text-primary">
                    {room.price}
                    <span className="text-sm text-gray-600 font-normal"> /night</span>
                  </p>
                  <Link
                    href={`/rooms?room=${room.id}`}
                    className="text-accent hover:text-accent-dark transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
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
            href="/rooms"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold transition-colors"
          >
            View All Rooms
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
