"use client";

import dynamic from 'next/dynamic';

const LiquidEther = dynamic(() => import('@/components/LiquidEther'), {
  ssr: false,
});

export default function Background() {
  return (
    <>
      {/* LiquidEther Background - stable fixed position */}
      <div 
        className="fixed top-0 left-0 w-full"
        style={{ height: '100vh' }}
      >
        <LiquidEther
          colors={["#8E9AAF", "#9BA4B4", "#e1e3e7ff", "#6b6a6aff", "#676767ff"]}
          mouseForce={20}
          cursorSize={100}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
        {/* Fade overlay - smooth transition to white at edges */}
        <div 
          className="fixed top-0 left-0 w-full pointer-events-none"
          style={{
            height: '100dvh',
            background: `
              linear-gradient(to bottom, 
                rgba(255,255,255,1) 0%, 
                rgba(255,255,255,0.6) 5%, 
                transparent 15%, 
                transparent 80%, 
                rgba(255,255,255,0.6) 92%, 
                rgba(255,255,255,1) 100%
              )
            `
          }}
        />
      </div>
    </>
  );
}
