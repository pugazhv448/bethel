'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const QUICK_LINKS = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Products', url: '/products' },
  { name: 'Gallery', url: '/gallery' },
  { name: 'Contact', url: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black p-12 pt-24 text-white relative overflow-hidden rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-400">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="bg-brand-gold text-black px-2 py-0.5 rounded font-bold">BS</span>
            <span className="text-white text-xl font-bold tracking-widest">BETHEL STONES</span>
          </div>
          <p className="max-w-xs leading-relaxed">
            Your dedicated partner for premium granite & marble supply and installation in Chennai.
            Crafting beauty, not just surfaces.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Follow us on Facebook"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Follow us on Instagram"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://maps.app.goo.gl/KoEDaC81LZ3mAfhz9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on Google Maps"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all text-xs font-bold"
            >
              G
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-white uppercase tracking-widest text-xs font-medium">
            Contact Information
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <a href="tel:+919884828642" className="hover:text-brand-gold transition-colors">
                +91 98848 28642
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <a href="mailto:info@bethelstones.com" className="hover:text-brand-gold transition-colors">
                info@bethelstones.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-gold flex-shrink-0 mt-0.5">📍</span>
              <span>135 Lakshmi Nagar, Mudichur Rd,<br />Chennai, Tamil Nadu 600048</span>
            </li>
          </ul>
        </div>

        {/* Hours & Links */}
        <div className="space-y-6">
          <h3 className="text-white uppercase tracking-widest text-xs font-medium">
            Business Hours
          </h3>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
            <div>
              <p className="text-white font-medium">Open Daily</p>
              <p>9:00 AM – 9:00 PM</p>
            </div>
          </div>
          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="hover:text-brand-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 text-white hover:text-brand-gold transition-colors"
          >
            Back to top <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 max-w-7xl mx-auto px-6 md:px-12">
        <p>© {new Date().getFullYear()} Bethel Stones. All rights reserved.</p>
        <p className="mt-3 md:mt-0">
          4.9★ Rated Granite Supplier in Chennai
        </p>
      </div>
    </footer>
  );
}
