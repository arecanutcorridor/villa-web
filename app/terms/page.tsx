'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function TermsPage() {
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
              Terms of Service
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
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  2. Use License
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Areca-Nut Corridor for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Transferring the materials to another person or &quot;mirroring&quot; the materials on any other server</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  3. Reservation Terms
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By making a reservation at Areca-Nut Corridor, you agree to the following terms:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Reservations must be made 48 hours in advance</li>
                  <li>Cancellations must be made 7 days prior to check-in for full refund</li>
                  <li>A valid credit card is required to hold the reservation</li>
                  <li>Guest must be 18 years or older</li>
                  <li>Rates are per room, per night, and subject to availability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  4. Disclaimer
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials on Areca-Nut Corridor are provided on an &apos;as is&apos; basis. Areca-Nut Corridor makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  5. Limitations of Liability
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall Areca-Nut Corridor or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Areca-Nut Corridor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  6. Accuracy of Materials
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials appearing on Areca-Nut Corridor could include technical, typographical, or photographic errors. Areca-Nut Corridor does not warrant that any of the materials on this website are accurate, complete, or current. Areca-Nut Corridor may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  7. Links
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Areca-Nut Corridor has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Areca-Nut Corridor of the site. Use of any such linked website is at the user&apos;s own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  8. Modifications
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Areca-Nut Corridor may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  9. Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="p-4 bg-surface rounded-lg">
                  <p className="font-semibold text-primary">Areca-Nut Corridor</p>
                  <p className="text-gray-600">Email: legal@arecanutt.com</p>
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
