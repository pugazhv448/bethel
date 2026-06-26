'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Counter from '@/components/animations/Counter';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="border border-black/10 p-2 rounded-[40px]">
            <img
              src="/images/about.png"
              alt="Bethel Stones granite craftsmen at work"
              className="rounded-[30px] w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 sm:-bottom-8 right-4 sm:-right-6 rotate-3 bg-brand-gold text-black border border-black/10 p-5 sm:p-8 rounded-3xl shadow-xl max-w-[220px] z-10">
            <p className="text-sm font-medium text-black/80 italic leading-relaxed">
              "We don't just supply stone; we craft lasting beauty for your home."
            </p>
            <p className="mt-4 font-bold text-black">Bethel Stones Team</p>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            <span className="uppercase tracking-widest text-xs font-bold text-gray-500">
              About Our Company
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl text-black mb-8 leading-tight font-display">
            Built on <span className="text-brand-gold">Trust.</span>
            <br />
            Crafted with Excellence.
          </h2>

          <p className="text-xl text-black/60 mb-10 leading-relaxed">
            Bethel Stones is Chennai's premier granite and marble supplier. Located at
            135 Lakshmi Nagar, Mudichur, we have been delivering premium stone products and
            expert installation services across Chennai and surrounding districts for over 25 years.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-[clamp(2rem,5vw,3.5rem)] mb-1 leading-none font-display font-medium text-brand-slate">
                <Counter value={41} suffix="+" />
              </h3>
              <p className="text-sm text-black/60 uppercase tracking-widest font-bold">
                5★ Reviews
              </p>
            </div>
            <div>
              <h3 className="text-[clamp(2rem,5vw,3.5rem)] mb-1 leading-none font-display font-medium text-brand-slate">
                <Counter value={25} suffix="+" />
              </h3>
              <p className="text-sm text-black/60 uppercase tracking-widest font-bold">
                Years Experience
              </p>
            </div>
            <div>
              <h3 className="text-[clamp(2rem,5vw,3.5rem)] mb-1 leading-none font-display font-medium text-brand-slate">
                <Counter value={1000} suffix="+" />
              </h3>
              <p className="text-sm text-black/60 uppercase tracking-widest font-bold">
                Homes Transformed
              </p>
            </div>
            <div>
              <h3 className="text-[clamp(2rem,5vw,3.5rem)] mb-1 leading-none font-display font-medium text-brand-slate">
                4.9<span className="text-brand-gold">★</span>
              </h3>
              <p className="text-sm text-black/60 uppercase tracking-widest font-bold">
                Google Rating
              </p>
            </div>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center space-x-3 bg-black text-white rounded-full px-8 py-4 hover:bg-brand-gold hover:text-black transition-all text-sm font-bold group"
          >
            <span>EXPLORE OUR GRANITE</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
