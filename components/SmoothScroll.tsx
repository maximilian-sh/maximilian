"use client";

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      e.preventDefault();
      const href = anchor.getAttribute('href');
      
      if (href === '#') {
        // Scroll to top
        smoothScrollTo(0);
      } else if (href) {
        const element = document.querySelector(href);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 80; // 80px offset for nav
          smoothScrollTo(top);
        }
      }
    };

    // Custom smooth scroll with ease-in-out
    const smoothScrollTo = (targetY: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 800; // ms - longer = smoother
      let startTime: number | null = null;

      // Ease-in-out cubic
      const easeInOutCubic = (t: number) => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        
        window.scrollTo(0, startY + distance * eased);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
