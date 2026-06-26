'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Products', url: '/products' },
  { name: 'Gallery', url: '/gallery' },
  { name: 'Testimonials', url: '/testimonials' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/" className="font-semibold text-xl flex items-center gap-2 text-white">
              <span className="bg-brand-gold text-black px-2 py-0.5 rounded font-bold text-sm">BS</span>
              <span className="hidden sm:inline tracking-widest font-bold text-white drop-shadow">BETHEL STONES</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-bold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={`relative transition-colors hover:text-brand-gold group ${
                  pathname === link.url ? 'text-brand-gold' : 'text-white/80'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full ${pathname === link.url ? 'w-full' : ''}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden sm:block">
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-gold hover:text-black transition-all"
              >
                GET QUOTE
              </Link>
            </motion.div>
            <button
              className="md:hidden p-2 text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 bg-white/95 backdrop-blur-xl border border-black/10 rounded-3xl p-6 flex flex-col gap-4 shadow-xl z-50"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium p-2 rounded-lg ${
                  pathname === link.url ? 'text-brand-gold bg-brand-gold/5' : 'text-black/80 hover:bg-black/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-black text-white px-6 py-4 rounded-full text-center font-bold mt-2 hover:bg-brand-gold hover:text-black transition-colors"
            >
              GET QUOTE
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
