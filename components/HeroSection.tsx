import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { PixelButton } from './PixelButton';

const LINES = [
  { text: '> Shivam Kushwaha', color: '#4ade80',  delay: 0 },
  { text: '  Full Stack Developer', color: '#a5b4fc', delay: 1400 },
  { text: '  AI + IoT Specialist', color: '#22d3ee', delay: 2800 },
];

const STAR_COUNT = 40;

function generateHeroStars() {
  return Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    char: ['*', '·', '+'][Math.floor(Math.random() * 3)],
    dur: 1.5 + Math.random() * 3,
    delay: Math.random() * 4,
  }));
}

export const HeroSection = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showButtons, setShowButtons] = useState(false);
  const [stars] = useState(generateHeroStars);

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
        if (i === LINES.length - 1) {
          setTimeout(() => setShowButtons(true), 1000);
        }
      }, line.delay);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 overflow-hidden"
    >
      {/* Hero background stars */}
      {stars.map(s => (
        <span
          key={s.id}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            '--duration': `${s.dur}s`,
            '--delay': `${s.delay}s`,
          } as React.CSSProperties}
        >
          {s.char}
        </span>
      ))}

      {/* Decorative pixel grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* Left: Terminal text */}
        <div className="flex-1 w-full">

          {/* Terminal header bar */}
          <div
            className="mb-4 flex items-center gap-2 px-4 py-2 w-full max-w-xl"
            style={{ background: '#020617', border: '2px solid #4338ca', borderBottom: 'none' }}
          >
            <span className="font-pixel" style={{ fontSize: '0.55rem', color: '#94a3b8' }}>
              PORTFOLIO.EXE — TERMINAL v1.0
            </span>
            <div className="ml-auto flex gap-2">
              <div className="w-2 h-2" style={{ background: '#f87171' }} />
              <div className="w-2 h-2" style={{ background: '#facc15' }} />
              <div className="w-2 h-2" style={{ background: '#4ade80' }} />
            </div>
          </div>

          {/* Terminal body */}
          <div
            className="p-6 md:p-8 w-full max-w-xl"
            style={{ background: '#020617', border: '2px solid #4338ca', boxShadow: '6px 6px 0px #1e1b4b' }}
          >
            {LINES.map((line, i) => (
              <div
                key={i}
                className="font-pixel mb-3 flex items-center"
                style={{
                  fontSize: 'clamp(0.85rem, 2.2vw, 1.15rem)',
                  color: line.color,
                  opacity: visibleLines.includes(i) ? 1 : 0,
                  transition: 'opacity 0.3s',
                  letterSpacing: '0.04em',
                  minHeight: '1.8em',
                }}
              >
                {visibleLines.includes(i) && (
                  <span
                    className="typing-line"
                    style={{
                      animationDuration: `${line.text.length * 0.04}s`,
                      animationDelay: '0s',
                    }}
                  >
                    {line.text}
                  </span>
                )}
                {/* cursor on last visible line */}
                {visibleLines[visibleLines.length - 1] === i && (
                  <span className="cursor-blink ml-1" style={{ color: '#4ade80', fontSize: '1em' }}>_</span>
                )}
              </div>
            ))}

            {/* Description */}
            {showButtons && (
              <p
                className="font-pixel mt-4 mb-6 leading-loose"
                style={{ fontSize: '0.62rem', color: '#64748b', animation: 'fadeIn 0.5s ease-out' }}
              >
                {'>'} Building end-to-end solutions — from AI e-commerce platforms<br/>
                {'  '} to smart IoT systems. Award winner @ IIT Bombay 2024.
              </p>
            )}

            {/* Action buttons */}
            {showButtons && (
              <div
                className="flex flex-wrap gap-4 mt-2"
                style={{ animation: 'slideUp 0.5s ease-out' }}
              >
                <PixelButton variant="primary" as="a" href="#contact">
                  [ CONTACT ]
                </PixelButton>
                <PixelButton variant="outline" as="a" href="#projects">
                  [ VIEW LEVELS ]
                </PixelButton>
              </div>
            )}
          </div>

          {/* Social Links */}
          {showButtons && (
            <div
              className="flex gap-3 mt-6"
              style={{ animation: 'slideUp 0.6s ease-out' }}
            >
              {[
                { href: 'https://github.com/Shivam-0512', icon: <Github size={14} />, label: 'GH' },
                { href: 'https://www.linkedin.com/in/shivam0512/', icon: <Linkedin size={14} />, label: 'LI' },
                { href: 'https://www.instagram.com/shivam.k_0512/', icon: <Instagram size={14} />, label: 'IG' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-pixel flex items-center gap-1.5 transition-all duration-150"
                  style={{
                    fontSize: '0.6rem',
                    color: '#64748b',
                    border: '2px solid #1e293b',
                    padding: '8px 10px',
                    background: '#020617',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = '#a5b4fc';
                    (e.currentTarget as HTMLElement).style.borderColor = '#4338ca';
                    (e.currentTarget as HTMLElement).style.boxShadow = '3px 3px 0 #312e81';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = '#64748b';
                    (e.currentTarget as HTMLElement).style.borderColor = '#1e293b';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                  [{s.label}]
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right: Profile image in pixel frame */}
        <div
          className="relative flex-shrink-0 hidden md:block"
          style={{ animation: 'fadeIn 1s ease-out 0.5s both' }}
        >
          {/* Pixel frame */}
          <div
            className="relative"
            style={{
              border: '3px solid #4338ca',
              boxShadow: '8px 8px 0 #1e1b4b, 0 0 30px rgba(99,102,241,0.3)',
              background: '#020617',
              padding: '6px',
            }}
          >
            <img
              src="./assets/profile.png"
              alt="Shivam Kushwaha"
              className="w-64 h-64 object-cover block"
              style={{ display: 'block', filter: 'contrast(1.05) saturate(0.95)' }}
            />
            {/* Pixel corner decorators */}
            <div
              className="absolute -top-1 -left-1 w-3 h-3"
              style={{ background: '#4ade80' }}
            />
            <div
              className="absolute -top-1 -right-1 w-3 h-3"
              style={{ background: '#4ade80' }}
            />
            <div
              className="absolute -bottom-1 -left-1 w-3 h-3"
              style={{ background: '#4ade80' }}
            />
            <div
              className="absolute -bottom-1 -right-1 w-3 h-3"
              style={{ background: '#4ade80' }}
            />
          </div>

          {/* Status badge */}
          <div
            className="absolute -bottom-4 left-0 right-0 mx-auto font-pixel text-center py-1"
            style={{
              fontSize: '0.38rem',
              color: '#4ade80',
              background: '#020617',
              border: '2px solid #4ade80',
              boxShadow: '3px 3px 0 #166534',
              letterSpacing: '0.1em',
            }}
          >
            ● ONLINE — OPEN TO WORK
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      {showButtons && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-pixel cursor-blink"
          style={{ fontSize: '0.55rem', color: '#4338ca' }}
        >
          ▼ SCROLL DOWN ▼
        </div>
      )}
    </section>
  );
};