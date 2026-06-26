'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve Chennai and surrounding districts including Chengalpattu, Kanchipuram, Tambaram, Chromepet, OMR, ECR, Velachery, Guduvanchery, and Vandalur. For larger projects we consider locations further afield.',
  },
  {
    question: 'Do you provide free quotes?',
    answer: 'Yes, we provide free, no-obligation quotes for all our services. Simply contact us via phone (+91 98848 28642), email, or our website form to schedule a site visit or consultation.',
  },
  {
    question: 'What types of granite do you supply?',
    answer: 'We carry a wide variety including Black Pearl, Kashmir Gold, Absolute Black, Tan Brown, White Pearl, Steel Grey, Hassan Green, Ruby Red, and many more. Custom sourcing is available on request.',
  },
  {
    question: 'How long does granite installation take?',
    answer: 'A typical kitchen countertop installation takes 1-2 days. Full home flooring projects may take 5-7 days depending on area. We provide detailed timelines with every quote.',
  },
  {
    question: 'Do you offer a warranty on installation?',
    answer: 'Yes, we provide a warranty on all our installation work. Our craftsmanship is guaranteed and we stand behind every project we complete.',
  },
  {
    question: 'What is the price range for granite?',
    answer: 'Prices vary by granite type and finish. Ranges typically start from ₹150/sqft for standard varieties up to ₹450/sqft for premium exotic granites. Contact us for a detailed quote.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
          <span className="uppercase tracking-widest text-xs font-bold text-gray-500">
            Common Questions
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display">
          FREQUENTLY ASKED <span className="text-brand-gold">QUESTIONS</span>
        </h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div key={index} className="glass-light rounded-3xl overflow-hidden border border-black/10">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
              aria-expanded={activeIndex === index}
            >
              <span className="font-semibold text-lg pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-brand-gold transition-transform duration-300 flex-shrink-0 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-8 pb-6 text-black/60 leading-relaxed">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
