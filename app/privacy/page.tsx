'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <main className="w-full">
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-primary">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mt-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At Areca-Nut Corridor, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect information about you in a variety of ways. The information we may collect on the site includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Name and email address</li>
                  <li>Phone number</li>
                  <li>Mailing address</li>
                  <li>Reservation preferences and dates</li>
                  <li>Payment information</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  3. Use of Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Process your reservations and payments</li>
                  <li>Send promotional communications</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Improve our website and services</li>
                  <li>Generate analytics about site usage</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  4. Disclosure of Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We may share your information with third parties who perform services for us, such as payment processors, email service providers, and customer support platforms. We will never sell your personal information to unaffiliated third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  5. Security of Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  6. Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions or concerns regarding this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-surface rounded-lg">
                  <p className="font-semibold text-primary">Areca-Nut Corridor</p>
                  <p className="text-gray-600">Email: privacy@arecanutt.com</p>
                  <p className="text-gray-600">Phone: +1 (234) 567-890</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
