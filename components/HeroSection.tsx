"use client";

import BlurText from "@/components/BlurText";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="glass-card max-w-2xl rounded-3xl p-12 text-center">
        <BlurText
          text="Maximilian Kallina"
          delay={100}
          animateBy="words"
          direction="top"
          className="mb-4 text-5xl font-bold tracking-tight text-stone-800 md:text-7xl justify-center"
        />
        <BlurText
          text="Just doing stuff."
          delay={50}
          animateBy="words"
          direction="top"
          className="mb-8 text-xl text-stone-600 justify-center"
        />
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#work" className="glass-button rounded-full bg-stone-800 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-stone-700 hover:scale-105">
            View Work
          </a>
          <a href="#contact" className="glass-button rounded-full border border-stone-300 bg-white/50 px-8 py-3 text-sm font-medium text-stone-700 backdrop-blur-sm transition-all hover:bg-white/80 hover:scale-105">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
