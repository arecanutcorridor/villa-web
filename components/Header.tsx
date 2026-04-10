'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rooms', label: 'Rooms' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Areca-Nut Corridor"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="hidden sm:inline text-xl font-bold text-primary">
              Areca-Nut Corridor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/reservations"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Reserve Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-surface rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservations"
              className="block m-4 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserve Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
