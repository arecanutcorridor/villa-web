'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Stay Connected
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Receive exclusive offers, updates about our villa, and travel inspiration delivered to your inbox.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex gap-2"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-accent-light text-primary px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Subscribe
            </button>
          </motion.form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-accent font-semibold"
            >
              Thank you for subscribing!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
