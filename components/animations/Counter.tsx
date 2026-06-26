'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ value, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}
