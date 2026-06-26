'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const PROJECTS = [
  { src: '/images/project-1.png', alt: 'Kashmir Gold Kitchen Countertop', category: 'Countertops' },
  { src: '/images/project-2.png', alt: 'Absolute Black Bathroom Vanity', category: 'Bathrooms' },
  { src: '/images/project-3.png', alt: 'Granite Showroom Display', category: 'Showroom' },
  { src: '/images/service-countertops.png', alt: 'Black Pearl Kitchen Island', category: 'Countertops' },
  { src: '/images/service-flooring.png', alt: 'Polished Grey Granite Flooring', category: 'Flooring' },
  { src: '/images/service-installation.png', alt: 'Professional Granite Installation', category: 'Installation' },
  { src: '/images/about.png', alt: 'Granite Stone Workshop', category: 'Showroom' },
  { src: '/images/marble_kitchen.png', alt: 'Luxury White Marble Kitchen', category: 'Countertops' },
  { src: '/images/granite_bathroom.png', alt: 'Sleek Black Granite Bathroom', category: 'Bathrooms' },
];

const categories = ['All', 'Countertops', 'Flooring', 'Bathrooms', 'Installation', 'Showroom'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            <span className="uppercase tracking-widest text-xs font-bold text-gray-500">
              Portfolio
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-display mb-4"
          >
            OUR <span className="text-brand-gold">PROJECTS</span>
          </motion.h2>
          <p className="text-black/70 max-w-md">
            A showcase of our commitment to quality across granite and marble projects in Chennai.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6 text-sm font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`transition-all duration-300 relative py-1 ${
                activeCategory === cat ? 'text-brand-gold' : 'text-black/50 hover:text-black/80'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-2xl bg-white break-inside-avoid"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">{project.alt}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
