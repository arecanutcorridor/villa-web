'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit contact form');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('[v0] Contact form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Palm Avenue, Tropical Paradise',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (234) 567-890',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@arecanutt.com',
    },
    {
      icon: Clock,
      title: 'Availability',
      content: '24/7 Guest Support',
    },
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
              Get in Touch
            </span>
            <h1 className="text-5xl font-bold text-primary mt-4">
              Contact Us
            </h1>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Have questions? Our dedicated team is here to help. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {info.content}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-semibold text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-primary mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-primary mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="special">Special Events</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-600 font-semibold"
                  >
                    ✗ Error: {error}
                  </motion.p>
                )}

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-accent font-semibold"
                  >
                    ✓ Message sent successfully!
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">
                Why Choose Areca-Nut Corridor?
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    World-Class Service
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our dedicated team is available 24/7 to ensure your stay exceeds expectations.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Luxury Amenities
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Experience premium facilities including spa, infinity pool, and fine dining.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Prime Location
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nestled in tropical paradise with private beach access and lush gardens.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Personalized Experience
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Every detail is tailored to your preferences for an unforgettable vacation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
