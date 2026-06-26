'use client';

import { motion } from 'motion/react';
import { Gem, Layers, Hammer } from 'lucide-react';

const SERVICES = [
  {
    title: 'Granite Countertops',
    description: 'Premium granite countertops for kitchens and bathrooms. Polished, honed, or leathered finish.',
    icon: Gem,
    image: '/images/service-countertops.png',
    details: ['Black Pearl', 'Kashmir Gold', 'Absolute Black', 'Custom Finishes'],
  },
  {
    title: 'Granite Flooring',
    description: 'Transform any space with stunning granite flooring. Durable, easy to maintain, and timeless.',
    icon: Layers,
    image: '/images/service-flooring.png',
    details: ['Living Rooms', 'Kitchens', 'Outdoor Areas', 'Commercial Spaces'],
  },
  {
    title: 'Expert Installation',
    description: 'Professional installation by certified craftsmen. Precision fitting with quality guaranteed.',
    icon: Hammer,
    image: '/images/service-installation.png',
    details: ['Site Measurement', 'Slab Cutting', 'Precision Fitting', 'Final Polishing'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            <span className="uppercase tracking-widest text-xs font-bold text-gray-500">
              Our Expertise
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display"
          >
            OUR <span className="text-brand-gold">SERVICES</span>
          </motion.h2>
        </div>
        <p className="text-black/70 max-w-md text-lg">
          We provide end-to-end granite and marble solutions with a focus on quality,
          durability, and client satisfaction across Chennai.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[500px] rounded-[40px] overflow-hidden shadow-xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                <service.icon className="w-7 h-7 text-white group-hover:text-black" />
              </div>
              <h3 className="text-2xl text-white mb-3 font-display">{service.title}</h3>
              <p className="text-white/70 mb-4 text-sm leading-relaxed">{service.description}</p>
              <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                <ul className="space-y-2 pt-4 border-t border-white/20">
                  {service.details.map((detail) => (
                    <li key={detail} className="text-xs text-white/60 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-gold"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
          <span className="uppercase tracking-widest text-xs font-bold text-gray-500">
            Service Gallery
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-[40px] overflow-hidden shadow-2xl group">
            <img
              src="/images/project-1.png"
              alt="Granite countertop project"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </div>
          <div className="relative h-[400px] rounded-[40px] overflow-hidden shadow-2xl group">
            <img
              src="/images/project-2.png"
              alt="Bathroom granite vanity"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
