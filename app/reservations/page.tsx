'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Users, Home } from 'lucide-react';

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'luxury-suite',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          numberOfGuests: parseInt(formData.guests),
          roomType: formData.roomType,
          guestName: `${formData.firstName} ${formData.lastName}`,
          guestEmail: formData.email,
          guestPhone: formData.phone,
          specialRequests: formData.specialRequests,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit reservation');
      }

      setSubmitted(true);
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: '2',
        roomType: 'luxury-suite',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('[v0] Reservation submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const roomTypes = [
    { id: 'luxury-suite', name: 'Luxury Suite', price: '$450/night' },
    { id: 'ocean-view', name: 'Ocean View Room', price: '$550/night' },
    { id: 'presidential', name: 'Presidential Suite', price: '$850/night' },
    { id: 'garden-villa', name: 'Garden Villa', price: '$650/night' },
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
              Book Your Stay
            </span>
            <h1 className="text-5xl font-bold text-primary mt-4">
              Reserve Your Room
            </h1>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Secure your perfect tropical getaway. Fill out the form below to check availability and complete your booking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-surface rounded-lg p-8"
          >
            {/* Room Selection */}
            <div className="mb-8">
              <label className="block text-lg font-bold text-primary mb-4">
                <Home className="w-5 h-5 inline-block mr-2" />
                Select Room Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roomTypes.map((room) => (
                  <label key={room.id} className="flex items-center gap-3 cursor-pointer p-4 border-2 border-border rounded-lg hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="roomType"
                      value={room.id}
                      checked={formData.roomType === room.id}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="font-semibold text-primary">{room.name}</p>
                      <p className="text-sm text-gray-600">{room.price}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Check-in / Check-out */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block font-semibold text-primary mb-2">
                  <Calendar className="w-5 h-5 inline-block mr-2" />
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">
                  Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="mb-8">
              <label className="block font-semibold text-primary mb-2">
                <Users className="w-5 h-5 inline-block mr-2" />
                Number of Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Guest Information */}
            <div className="border-t border-border pt-8 mb-8">
              <h3 className="text-lg font-bold text-primary mb-6">Guest Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-semibold text-primary mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-primary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-semibold text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-primary mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Let us know any special requirements or preferences..."
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-colors"
            >
              {loading ? 'Submitting...' : 'Complete Reservation'}
            </button>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-red-600 font-semibold"
              >
                ✗ Error: {error}
              </motion.p>
            )}

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-accent font-semibold"
              >
                ✓ Reservation request submitted! We&apos;ll confirm shortly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
