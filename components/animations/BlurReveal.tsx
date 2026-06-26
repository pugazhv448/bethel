'use client';

import { motion } from 'motion/react';

interface BlurRevealProps {
  text: string;
  delay?: number;
}

export default function BlurReveal({ text, delay = 0 }: BlurRevealProps) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: 'blur(12px)', y: 10 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      style={{ display: 'inline-block' }}
    >
      {text}
    </motion.span>
  );
}
