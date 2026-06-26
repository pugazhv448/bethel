'use client';

import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  delay?: number;
}

export default function TypingText({ text, delay = 0 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [started, text]);

  return <span>{displayed}</span>;
}
