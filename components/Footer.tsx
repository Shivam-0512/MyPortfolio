import React from 'react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#020617',
        borderTop: '2px solid #4338ca',
        boxShadow: '0 -4px 0 #1e1b4b',
      }}
      className="py-8 px-6 md:px-12 lg:px-24"
    >
      {/* Top accent line */}
      <div
        className="h-px w-full mb-6"
        style={{ background: 'linear-gradient(90deg, transparent, #6366f1, transparent)' }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="font-pixel flex items-center gap-1">
          <span style={{ color: '#4ade80', fontSize: '0.7rem' }}>SK</span>
          <span style={{ color: '#6366f1', fontSize: '0.7rem' }}>.</span>
          <span style={{ color: '#a5b4fc', fontSize: '0.7rem' }}>EXE</span>
        </div>

        {/* Nav */}
        <nav className="flex gap-4 flex-wrap justify-center">
          {[
            { label: 'MAP',       href: '#home'     },
            { label: 'CHARACTER', href: '#about'    },
            { label: 'INVENTORY', href: '#skills'   },
            { label: 'LEVELS',    href: '#projects' },
            { label: 'QUESTS',    href: '#contact'  },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              className="font-pixel transition-colors no-underline"
              style={{ fontSize: '0.35rem', color: '#334155', letterSpacing: '0.1em' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a5b4fc')}
              onMouseLeave={e => (e.currentTarget.style.color = '#334155')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="flex gap-2">
          {[
            { href: 'https://github.com/Shivam-0512',             icon: <GithubIcon size={14} />,    label: 'GH' },
            { href: 'https://www.linkedin.com/in/shivam0512/',     icon: <LinkedinIcon size={14} />,  label: 'LI' },
            { href: 'https://www.instagram.com/shivam.k_0512/',    icon: <InstagramIcon size={14} />, label: 'IG' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel flex items-center gap-1 transition-all no-underline"
              style={{
                fontSize: '0.3rem',
                color: '#334155',
                border: '2px solid #1e293b',
                padding: '6px 8px',
                background: '#0a0f1e',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#a5b4fc';
                (e.currentTarget as HTMLElement).style.borderColor = '#4338ca';
                (e.currentTarget as HTMLElement).style.boxShadow = '2px 2px 0 #312e81';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = '#334155';
                (e.currentTarget as HTMLElement).style.borderColor = '#1e293b';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {s.icon}
              [{s.label}]
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mt-6 pt-4 text-center font-pixel"
        style={{ borderTop: '1px dashed #1e293b', fontSize: '0.32rem', color: '#1e293b', letterSpacing: '0.12em' }}
      >
        © {year} SHIVAM KUSHWAHA — SHIVAM.EXE — ALL RIGHTS RESERVED
        &nbsp;|&nbsp;
        <span style={{ color: '#4338ca' }}>MADE WITH ♥ IN INDIA</span>
      </div>
    </footer>
  );
};
