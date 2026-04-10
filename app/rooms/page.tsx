'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wifi, ShowerHead, Tv, Utensils } from 'lucide-react';

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: 'Luxury Suite',
      image: '/images/rooms/room-1.png',
      price: '$450',
      size: '45 sqm',
      capacity: '2-3 guests',
      description:
        'Indulge in our signature Luxury Suite, featuring a king-size bed, marble bathroom, and stunning garden views. Perfect for couples or small families.',
      amenities: [
        'King bed',
        'Marble bathroom',
        'Premium linens',
        'Air conditioning',
        'Free WiFi',
        'Flat-screen TV',
        'Minibar',
        'Daily housekeeping',
      ],
    },
    {
      id: 2,
      name: 'Ocean View Room',
      image: '/images/rooms/room-2.jpeg',
      price: '$550',
      size: '55 sqm',
      capacity: '2-4 guests',
      description:
        'Wake up to panoramic ocean views from your private balcony. This premium room features contemporary design and exclusive ocean-facing amenities.',
      amenities: [
        'King bed + sofa bed',
        'Private balcony',
        'Ocean view',
        'Marble bathroom',
        'Free WiFi',
        'Entertainment system',
        'Coffee maker',
        '24-hour room service',
      ],
    },
    {
      id: 3,
      name: 'Presidential Suite',
      image: '/images/rooms/room-3.png',
      price: '$850',
      size: '85 sqm',
      capacity: '2-5 guests',
      description:
        'The ultimate luxury experience. Our Presidential Suite offers a spacious living area, separate bedroom, jacuzzi, and exclusive amenities for the discerning traveler.',
      amenities: [
        'King bedroom + guest room',
        'Living area',
        'Jacuzzi bathtub',
        'Steam shower',
        'Full kitchen',
        'Private workspace',
        'Personalized service',
        'VIP amenities',
      ],
    },
    {
      id: 4,
      name: 'Garden Villa',
      image: '/images/rooms/room-4.jpeg',
      price: '$650',
      size: '70 sqm',
      capacity: '2-4 guests',
      description:
        'Escape to our private Garden Villa with direct access to lush tropical gardens. Features include an outdoor shower and private garden patio.',
      amenities: [
        'King bed',
        'Garden access',
        'Outdoor shower',
        'Indoor/outdoor living',
        'Fireplace',
        'Premium amenities',
        'Garden patio',
        'Private entrance',
      ],
    },
  ];

  const amenityIcons: Record<string, React.ReactNode> = {
    'King bed': <Tv className="w-5 h-5" />,
    'Free WiFi': <Wifi className="w-5 h-5" />,
    'Marble bathroom': <ShowerHead className="w-5 h-5" />,
    'Premium linens': <Utensils className="w-5 h-5" />,
  };

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
              Accommodations
            </span>
            <h1 className="text-5xl font-bold text-primary mt-4">
              Rooms & Suites
            </h1>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Each room is thoughtfully designed with luxury and comfort in mind, offering unique experiences tailored to your preferences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>

                {/* Details */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-4xl font-bold text-primary mb-4">
                    {room.name}
                  </h2>

                  <div className="flex gap-8 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Room Size</p>
                      <p className="text-lg font-semibold text-primary">
                        {room.size}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Capacity</p>
                      <p className="text-lg font-semibold text-primary">
                        {room.capacity}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Nightly Rate</p>
                      <p className="text-2xl font-bold text-accent">
                        {room.price}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {room.description}
                  </p>

                  <div>
                    <h4 className="font-bold text-primary mb-4">
                      Room Amenities
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-sm text-gray-600">
                            {amenity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="mt-8 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors">
                    Reserve This Room
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
