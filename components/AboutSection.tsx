import React from 'react';
import { PixelContainer } from './PixelContainer';

const STAT_ROWS = [
  { label: 'NAME',   value: 'Shivam Kushwaha' },
  { label: 'CLASS',  value: 'Full Stack Dev' },
  { label: 'SPEC',   value: 'AI + IoT Engineer' },
  { label: 'LEVEL',  value: '02' },
  { label: 'ORIGIN', value: 'Prayagraj, India 🇮🇳' },
  { label: 'STATUS', value: '🟢 Open to Work' },
];

const EXP_BARS = [
  { label: 'CODING',     pct: 85 },
  { label: 'PROBLEM SLV', pct: 80 },
  { label: 'AI/ML',      pct: 72 },
  { label: 'IOT/HW',     pct: 70 },
];

const QUEST_LOG = [
  {
    year: '2023 – 2027',
    title: 'B.Tech CSE',
    place: 'United College of Engg & Research, Prayagraj',
    done: false,
  },
  {
    year: '2024',
    title: 'Top 10 — Techfest IIT Bombay',
    place: 'MailExtracto Automation Bot',
    done: true,
  },
  {
    year: '2021 – 2022',
    title: 'Senior Secondary (CBSE)',
    place: 'Allahabad Public School',
    done: true,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="pixel-section-header">
          CHARACTER PROFILE
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── LEFT: Character Stats ── */}
          <PixelContainer title="// PLAYER STATS">
            {/* Profile mini image + stats */}
            <div className="flex gap-4 items-start mb-6">
              <div
                className="flex-shrink-0"
                style={{
                  border: '2px solid #4338ca',
                  boxShadow: '3px 3px 0 #1e1b4b',
                  background: '#0f172a',
                  padding: 3,
                }}
              >
                <img
                  src="./assets/profile.png"
                  alt="Shivam"
                  className="w-20 h-20 object-cover block"
                  style={{ imageRendering: 'pixelated', filter: 'saturate(0.9)' }}
                />
              </div>
              <div className="flex flex-col gap-1">
                {STAT_ROWS.slice(0, 3).map(r => (
                  <div key={r.label} className="flex gap-2">
                    <span className="font-pixel" style={{ fontSize: '0.38rem', color: '#6366f1', minWidth: 60 }}>
                      {r.label}
                    </span>
                    <span className="font-pixel" style={{ fontSize: '0.38rem', color: '#94a3b8' }}>:</span>
                    <span className="font-pixel" style={{ fontSize: '0.38rem', color: '#e2e8f0' }}>
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* All stat rows */}
            <div className="space-y-2 mb-6 pb-4" style={{ borderBottom: '1px dashed #1e293b' }}>
              {STAT_ROWS.slice(3).map(r => (
                <div key={r.label} className="flex gap-2 items-center">
                  <span className="font-pixel" style={{ fontSize: '0.38rem', color: '#6366f1', minWidth: 72 }}>
                    {r.label}
                  </span>
                  <span className="font-pixel" style={{ fontSize: '0.38rem', color: '#94a3b8' }}>:</span>
                  <span className="font-pixel" style={{ fontSize: '0.38rem', color: '#e2e8f0' }}>
                    {r.value}
                  </span>
                </div>
              ))}
            </div>

            {/* EXP bars */}
            <div className="font-pixel mb-2" style={{ fontSize: '0.38rem', color: '#a5b4fc' }}>
              // SKILL EXP
            </div>
            <div className="space-y-3">
              {EXP_BARS.map(b => (
                <div key={b.label}>
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel" style={{ fontSize: '0.33rem', color: '#64748b' }}>{b.label}</span>
                    <span className="font-pixel" style={{ fontSize: '0.33rem', color: '#6366f1' }}>{b.pct}%</span>
                  </div>
                  <div
                    className="w-full h-2.5"
                    style={{ background: '#0f172a', border: '1px solid #1e293b' }}
                  >
                    <div
                      className="h-full exp-bar-fill"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p
              className="font-pixel mt-5 leading-loose"
              style={{ fontSize: '0.36rem', color: '#475569' }}
            >
              {'>'} 3rd year CSE student passionate about bridging<br />
              {'  '} software & hardware. Built AI e-commerce, IoT<br />
              {'  '} waste systems, and award-winning automation bots.
            </p>
          </PixelContainer>

          {/* ── RIGHT: Quest Log (Education) ── */}
          <PixelContainer title="// QUEST LOG — EDUCATION">
            <div className="space-y-6">
              {QUEST_LOG.map((q, i) => (
                <div
                  key={i}
                  className="relative pl-6"
                  style={{ borderLeft: `2px solid ${q.done ? '#4338ca' : '#4ade80'}` }}
                >
                  {/* Bullet */}
                  <div
                    className="absolute -left-[7px] top-0 w-3 h-3"
                    style={{ background: q.done ? '#4338ca' : '#4ade80', border: '2px solid #020617' }}
                  />

                  <div className="font-pixel mb-1" style={{ fontSize: '0.36rem', color: '#475569' }}>
                    {q.year}
                  </div>
                  <div className="font-pixel mb-1" style={{ fontSize: '0.42rem', color: '#e2e8f0' }}>
                    {q.title}
                  </div>
                  <div className="font-pixel" style={{ fontSize: '0.36rem', color: '#6366f1' }}>
                    {q.place}
                  </div>

                  <div
                    className="inline-block font-pixel mt-2 px-2 py-0.5"
                    style={{
                      fontSize: '0.3rem',
                      color: q.done ? '#4ade80' : '#facc15',
                      border: `1px solid ${q.done ? '#166534' : '#713f12'}`,
                      background: q.done ? 'rgba(74,222,128,0.08)' : 'rgba(250,204,21,0.08)',
                    }}
                  >
                    {q.done ? '[ QUEST COMPLETE ✓ ]' : '[ IN PROGRESS... ]'}
                  </div>
                </div>
              ))}
            </div>

            {/* Bio links */}
            <div className="mt-8 pt-4" style={{ borderTop: '1px dashed #1e293b' }}>
              <div className="font-pixel mb-3" style={{ fontSize: '0.38rem', color: '#a5b4fc' }}>
                // NOTABLE PROJECTS
              </div>
              <div className="space-y-2">
                {[
                  { name: 'RevCraft', href: 'https://revcraft.netlify.app/', desc: 'AI Car Mod Platform' },
                  { name: 'EcoBin',   href: 'https://testbin-586ac.web.app/', desc: 'IoT Waste System' },
                ].map(p => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all"
                    style={{ textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    <span className="font-pixel" style={{ fontSize: '0.35rem', color: '#4ade80' }}>▶</span>
                    <span className="font-pixel" style={{ fontSize: '0.38rem', color: '#6366f1' }}>{p.name}</span>
                    <span className="font-pixel" style={{ fontSize: '0.33rem', color: '#475569' }}>— {p.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </PixelContainer>

        </div>
      </div>
    </section>
  );
};
