'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Areca-Nut Corridor"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">Areca-Nut</span>
            </div>
            <p className="text-white/80 text-sm">
              Experience luxury living at its finest with unparalleled amenities and service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-white/80 hover:text-white transition-colors text-sm">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Pallethalawinna, Katugasthota</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4" />
                <a href="tel:+94 76 801 2073" className="hover:text-white transition-colors">
                  +94 76 801 2073
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                <a href="mailto:arecanutcorridor@gmail.com" className="hover:text-white transition-colors">
                  arecanutcorridor@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>&copy; {currentYear} Areca-Nut Corridor. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
