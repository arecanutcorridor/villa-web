'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of hospitality and service delivery.',
    },
    {
      icon: Users,
      title: 'Hospitality',
      description: 'Our passionate team is dedicated to creating memorable experiences for every guest.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We respect nature and implement eco-friendly practices throughout our operations.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Everything we do is driven by a genuine love for hospitality and guest satisfaction.',
    },
  ];

  const highlights = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Happy Guests Yearly' },
    { number: '50+', label: 'Award-Winning Staff' },
    { number: '100%', label: 'Guest Satisfaction' },
  ];

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
              Our Story
            </span>
            <h1 className="text-5xl font-bold text-primary mt-4">
              About Areca-Nut Corridor
            </h1>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Discover the story behind our world-class luxury villa retreat and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/hero/hero-2.png"
                alt="Areca-Nut Corridor Villa"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                A Legacy of Luxury
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Areca-Nut Corridor was born from a passion for creating unforgettable luxury experiences in one of the world&apos;s most beautiful tropical destinations. For over 15 years, we&apos;ve been dedicated to exceeding expectations and setting new standards in hospitality.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our villa is the result of meticulous design, careful attention to detail, and a deep understanding of what luxury travelers seek. Every element, from our architectural design to our personalized service, has been crafted with excellence in mind.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that true luxury is not just about material comforts, but about creating meaningful memories and delivering service that feels genuine and heartfelt.
              </p>
            </motion.div>
          </div>

          {/* Highlights Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-border"
          >
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">
                  {item.number}
                </p>
                <p className="text-gray-600 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
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
              Core Values
            </span>
            <h2 className="text-4xl font-bold text-primary mt-4">
              What Drives Us
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet the Team
            </span>
            <h2 className="text-4xl font-bold text-primary mt-4">
              Our Dedicated Staff
            </h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Our team of professionals is committed to delivering exceptional service and creating unforgettable memories for every guest.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Marco Rossi',
                title: 'General Manager',
                description: 'With 20+ years in luxury hospitality, Marco ensures every detail exceeds expectations.',
              },
              {
                name: 'Sofia Garcia',
                title: 'Concierge Director',
                description: 'Sofia&apos;s passion for creating magical experiences makes every guest feel special.',
              },
              {
                name: 'David Chen',
                title: 'Executive Chef',
                description: 'David crafts culinary masterpieces that delight palates from around the world.',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-lg p-8 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold text-sm mb-3">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Join thousands of satisfied guests who have discovered the magic of Areca-Nut Corridor. Book your unforgettable getaway today.
            </p>
            <a
              href="/reservations"
              className="inline-block bg-accent hover:bg-accent-light text-primary px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Reserve Your Stay
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
