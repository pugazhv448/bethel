'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    text: 'Excellent quality granite countertops. The team was professional and the installation was spotless. Highly recommend Bethel Stones!',
    author: 'Lavanya Loganathan',
    location: 'Tambaram, Chennai',
    rating: 5,
  },
  {
    text: 'Got Kashmir Gold granite for my kitchen. The finish is absolutely stunning and the price was fair. Very happy with the service.',
    author: 'Rajesh Kumar',
    location: 'OMR, Chennai',
    rating: 5,
  },
  {
    text: 'Bethel Stones did our entire home flooring in Absolute Black granite. The craftsmanship is top-notch. We love it!',
    author: 'Priya Venkataraman',
    location: 'Chengalpattu',
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
        <span className="uppercase tracking-widest text-xs font-bold text-gray-500">
          Testimonials
        </span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-display mb-12"
      >
        What <span className="text-brand-gold">Clients Say</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {REVIEWS.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-black/80 mb-6 italic leading-relaxed">"{review.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-sm font-bold text-brand-slate">
                {review.author[0]}
              </div>
              <div>
                <div className="text-sm font-semibold text-black">{review.author}</div>
                <div className="text-xs text-black/50">{review.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://maps.app.goo.gl/KoEDaC81LZ3mAfhz9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-black/10 hover:border-brand-gold hover:text-brand-gold transition-all font-semibold"
        >
          Read All 41 Reviews on Google ↗
        </a>
      </div>
    </section>
  );
}
