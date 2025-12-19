"use client";

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxImageProps {
  children: ReactNode;
  speed?: number;
}

export default function ParallaxImage({ children, speed = 0.3 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      const offset = scrolled * speed;
      
      ref.current.style.transform = `translateY(${-offset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  );
}
