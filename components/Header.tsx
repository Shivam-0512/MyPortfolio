import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { playBeep } from '../utils/audio';

const NAV_ITEMS = [
  { label: 'MAP',          href: '#home'         },
  { label: 'CHARACTER',    href: '#about'        },
  { label: 'INVENTORY',    href: '#skills'       },
  { label: 'LEVELS',       href: '#projects'     },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'QUESTS',       href: '#contact'      },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState('MAP');
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      // Always show at the very top
      if (currentY < 10) {
        setVisible(true);
        setScrolled(false);
      } else {
        setScrolled(true);
        // Scrolling down → hide; scrolling up → show
        setVisible(currentY < lastScrollY.current);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="hud-header"
      className={`fixed top-0 left-0 w-full z-50 hud-flicker backdrop-blur-sm`}
      style={{
        borderBottom: '2px solid #4338ca',
        boxShadow: '0 4px 0 #1e1b4b',
        background: scrolled ? 'rgba(2,6,23,0.95)' : 'rgba(2,6,23,0.85)',
        transform: visible ? 'translateY(0)' : 'translateY(-110%)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease',
      }}
    >
      {/* Top scanline strip */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #6366f1, transparent)' }} />

      <div className="px-4 md:px-8 lg:px-16 py-3">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="font-pixel text-xs flex items-center gap-1 no-underline">
            <span style={{ color: '#4ade80' }}>SK</span>
            <span style={{ color: '#6366f1' }}>.</span>
            <span style={{ color: '#a5b4fc' }}>EXE</span>
            <span className="cursor-blink ml-0.5" style={{ color: '#4ade80', fontSize: '0.8rem' }}>_</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                id={`nav-${item.label.toLowerCase()}`}
                onClick={() => { playBeep(); setActive(item.label); }}
                className="font-pixel transition-all duration-150 px-3 py-2 no-underline"
                style={{
                  fontSize: '0.45rem',
                  color: active === item.label ? '#4ade80' : '#94a3b8',
                  borderBottom: active === item.label ? '2px solid #4ade80' : '2px solid transparent',
                  letterSpacing: '0.12em',
                }}
                onMouseEnter={e => {
                  if (active !== item.label)
                    (e.currentTarget as HTMLElement).style.color = '#a5b4fc';
                }}
                onMouseLeave={e => {
                  if (active !== item.label)
                    (e.currentTarget as HTMLElement).style.color = '#94a3b8';
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: HP bar + mobile menu */}
          <div className="flex items-center gap-4">
            {/* Character HUD Stats */}
            <div className="hidden md:flex flex-col items-end gap-1.5">
              <div className="font-pixel flex gap-3" style={{ fontSize: '0.38rem', color: '#a5b4fc' }}>
                <span>NAME: SHIVAM</span>
                <span>CLASS: DEV</span>
                <span>LVL: 02</span>
              </div>
              <div className="flex gap-4">
                <div className="font-pixel" style={{ fontSize: '0.35rem', color: '#4ade80' }}>
                  HP <span style={{ letterSpacing: '0.1em' }}>███████░░</span>
                </div>
                <div className="font-pixel" style={{ fontSize: '0.35rem', color: '#facc15' }}>
                  XP <span style={{ letterSpacing: '0.1em' }}>█████░░░░</span>
                </div>
              </div>
            </div>

            {/* Mobile toggle */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden pixel-btn p-2 text-pixel-neon"
              onClick={() => { playBeep(); setIsMenuOpen(!isMenuOpen); }}
              style={{ fontSize: '0.5rem', border: '2px solid #4338ca', boxShadow: '2px 2px 0 #1e1b4b' }}
            >
              {isMenuOpen ? <XIcon size={14} /> : <MenuIcon size={14} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav
            className="md:hidden mt-2 flex flex-col gap-1 pb-2"
            style={{ borderTop: '1px solid #1e1b4b' }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-pixel px-3 py-3 no-underline transition-colors"
                style={{ fontSize: '0.5rem', color: '#94a3b8', letterSpacing: '0.12em' }}
                onClick={() => { playBeep(); setActive(item.label); setIsMenuOpen(false); }}
              >
                <span style={{ color: '#4ade80', marginRight: 8 }}>{'>'}</span>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};