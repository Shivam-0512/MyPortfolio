import React, { useState, useEffect, useRef } from 'react'
import { IntroScreen } from './components/IntroScreen'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import { AchievementsSection } from './components/AchievementsSection'
import { Footer } from './components/Footer'

const STAR_COUNT = 80;

// Assign each star a depth layer: 0 = near (fast), 1 = mid, 2 = far (slow)
function generateStars() {
  return Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    char: ['*', '·', '+', '✦', '·'][Math.floor(Math.random() * 5)],
    dur: 1.5 + Math.random() * 3,
    delay: Math.random() * 4,
    layer: Math.floor(Math.random() * 3), // 0=near, 1=mid, 2=far
    size: 0,  // filled below
  })).map(s => ({
    ...s,
    size: s.layer === 0 ? 0.8 : s.layer === 1 ? 0.6 : 0.45,
  }));
}

// Parallax speed multiplier per layer
const LAYER_SPEED = [18, 9, 4]; // px of movement at max tilt

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [stars] = useState(generateStars);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  // Force scroll to top and clear hash on page reload
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Mouse parallax listener with RAF smoothing
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Normalise -1 to +1
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    const tick = () => {
      setOffset(prev => ({
        x: prev.x + (mouseRef.current.x - prev.x) * 0.06,
        y: prev.y + (mouseRef.current.y - prev.y) * 0.06,
      }));
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0f172a] text-slate-100 overflow-x-hidden">

      {/* Global Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">

        {/* Parallax star layers */}
        {[0, 1, 2].map(layer => (
          <div
            key={layer}
            className="absolute inset-0"
            style={{
              transform: `translate(${offset.x * LAYER_SPEED[layer]}px, ${offset.y * LAYER_SPEED[layer]}px)`,
              willChange: 'transform',
            }}
          >
            {stars
              .filter(s => s.layer === layer)
              .map(s => (
                <span
                  key={s.id}
                  className="star"
                  style={{
                    left: `${s.x}%`,
                    top: `${s.y}%`,
                    fontSize: `${s.size}rem`,
                    '--duration': `${s.dur}s`,
                    '--delay': `${s.delay}s`,
                  } as React.CSSProperties}
                >
                  {s.char}
                </span>
              ))}
          </div>
        ))}

        {/* Decorative pixel grid bg */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Global CRT scanlines overlay */}
      <div className="scanlines z-50 pointer-events-none" />

      {/* Intro screen overlay */}
      {showIntro && (
        <IntroScreen onComplete={() => setShowIntro(false)} />
      )}

      {/* Main portfolio — always rendered but hidden under intro */}
      <div
        className="relative z-10"
        style={{
          opacity: showIntro ? 0 : 1,
          transition: 'opacity 0.6s ease-in',
          pointerEvents: showIntro ? 'none' : 'all',
        }}
      >
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
