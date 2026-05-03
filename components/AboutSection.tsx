import React from 'react';
import { PixelContainer } from './PixelContainer';

const STAT_ROWS = [
  { label: 'NAME', value: 'Shivam Kushwaha' },
  { label: 'CLASS', value: 'Full Stack Dev' },
  { label: 'SPEC', value: 'AI + IoT Engineer' },
  { label: 'LEVEL', value: '02' },
  { label: 'ORIGIN', value: 'Prayagraj, India 🇮🇳' },
  { label: 'STATUS', value: '🟢 Open to Work' },
];

const EXP_BARS = [
  { label: 'CODING', pct: 85 },
  { label: 'PROBLEM SLV', pct: 80 },
  { label: 'AI/ML', pct: 72 },
  { label: 'IOT/HW', pct: 70 },
];

const QUEST_LOG = [
  {
    year: '2023 – 2027',
    title: 'B.Tech CSE',
    place: 'United College of Engineering and Research, Prayagraj',
    status: 'in-progress',
  },
  {
    year: '2021 – 2022',
    title: 'Senior Secondary (CBSE)',
    place: 'Allahabad Public School',
    status: 'complete',
  },
  {
    year: '2019 – 2020',
    title: 'Secondary (CBSE)',
    place: 'Allahabad Public School',
    status: 'complete',
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
            {/* Profile image + RPG stats */}
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              <div
                className="flex-shrink-0"
                style={{
                  border: '2px solid #4338ca',
                  boxShadow: '4px 4px 0 #1e1b4b',
                  background: '#0f172a',
                  padding: 4,
                }}
              >
                <img
                  src="/assets/profile.png"
                  alt="Shivam"
                  className="w-24 h-24 object-cover block"
                  style={{ imageRendering: 'pixelated', filter: 'saturate(0.9)' }}
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="font-pixel flex gap-3" style={{ fontSize: '0.55rem' }}>
                  <span style={{ color: '#6366f1', minWidth: 70 }}>Name:</span>
                  <span style={{ color: '#e2e8f0' }}>Shivam</span>
                </div>
                <div className="font-pixel flex gap-3" style={{ fontSize: '0.55rem' }}>
                  <span style={{ color: '#6366f1', minWidth: 70 }}>Class:</span>
                  <span style={{ color: '#e2e8f0' }}>Full Stack Dev</span>
                </div>
                <div className="font-pixel flex gap-3" style={{ fontSize: '0.55rem' }}>
                  <span style={{ color: '#6366f1', minWidth: 70 }}>Level:</span>
                  <span style={{ color: '#e2e8f0' }}>02</span>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="font-pixel flex items-center gap-3" style={{ fontSize: '0.5rem' }}>
                    <span style={{ color: '#4ade80', minWidth: 35 }}>HP:</span>
                    <span style={{ color: '#4ade80', letterSpacing: '0.1em' }}>███████░░</span>
                  </div>
                  <div className="font-pixel flex items-center gap-3" style={{ fontSize: '0.5rem' }}>
                    <span style={{ color: '#facc15', minWidth: 35 }}>XP:</span>
                    <span style={{ color: '#facc15', letterSpacing: '0.1em' }}>█████░░░░</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra attributes */}
            <div className="space-y-3 mb-8 pb-6" style={{ borderBottom: '1px dashed #1e293b' }}>
              <div className="flex gap-3 items-center">
                <span className="font-pixel" style={{ fontSize: '0.45rem', color: '#6366f1', minWidth: 90 }}>
                  ORIGIN:
                </span>
                <span className="font-pixel" style={{ fontSize: '0.45rem', color: '#e2e8f0' }}>
                  Prayagraj, India 🇮🇳
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="font-pixel" style={{ fontSize: '0.45rem', color: '#6366f1', minWidth: 90 }}>
                  STATUS:
                </span>
                <span className="font-pixel" style={{ fontSize: '0.45rem', color: '#e2e8f0' }}>
                  🟢 Open to Work
                </span>
              </div>
            </div>

            {/* Bio */}
            <p
              className="font-pixel leading-loose"
              style={{ fontSize: '0.48rem', color: '#94a3b8' }}
            >
              {'>'} 4th Year CSE student focused on building real-world, scalable systems.<br /><br />
              {'>'} Specialized in Full-Stack + AI + IoT integration — turning ideas into working products.<br /><br />
              {'>'} Currently grinding:
              <br />{'    '}- Advanced system design
              <br />{'    '}- Real-time applications
              <br />{'    '}- AI-powered automation<br /><br />
              {'>'} Mission:
              <br />{'    '}  Build impactful tech that solves real problems — not just projects.<br /><br />

            </p>
          </PixelContainer>

          {/* ── RIGHT: Quest Log (Education) ── */}
          <PixelContainer title="// QUEST LOG — EDUCATION">
            <div className="space-y-6">
              {QUEST_LOG.map((q, i) => {
                const isInProgress = q.status === 'in-progress';
                const borderColor = isInProgress ? '#4ade80' : '#4338ca';
                const badgeColor = isInProgress ? '#facc15' : '#4ade80';
                const badgeBorder = isInProgress ? '#713f12' : '#166534';
                const badgeBg = isInProgress ? 'rgba(250,204,21,0.08)' : 'rgba(74,222,128,0.08)';
                const badgeText = isInProgress ? '[ IN PROGRESS... ]' : '[ COMPLETED ✓ ]';
                return (
                  <div
                    key={i}
                    className="relative pl-6"
                    style={{ borderLeft: `2px solid ${borderColor}` }}
                  >
                    <div
                      className="absolute -left-[7px] top-0 w-3 h-3"
                      style={{ background: borderColor, border: '2px solid #020617' }}
                    />
                    <div className="font-pixel mb-1" style={{ fontSize: '0.45rem', color: '#475569' }}>
                      {q.year}
                    </div>
                    <div className="font-pixel mb-1" style={{ fontSize: '0.55rem', color: '#e2e8f0' }}>
                      {q.title}
                    </div>
                    <div className="font-pixel" style={{ fontSize: '0.45rem', color: '#6366f1' }}>
                      {q.place}
                    </div>
                    <div
                      className="inline-block font-pixel mt-2 px-2 py-0.5"
                      style={{ fontSize: '0.38rem', color: badgeColor, border: `1px solid ${badgeBorder}`, background: badgeBg }}
                    >
                      {badgeText}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bio links */}
            <div className="mt-8 pt-4" style={{ borderTop: '1px dashed #1e293b' }}>
              <div className="font-pixel mb-4" style={{ fontSize: '0.5rem', color: '#a5b4fc' }}>
                // NOTABLE PROJECTS
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Codnite', href: 'https://www.codnite.com/', desc: 'Competitive Coding Platform' },
                  { name: 'EcoBin', href: 'https://testbin-586ac.web.app/', desc: 'IoT Waste System' },
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
                    <span className="font-pixel" style={{ fontSize: '0.45rem', color: '#4ade80' }}>▶</span>
                    <span className="font-pixel" style={{ fontSize: '0.5rem', color: '#6366f1' }}>{p.name}</span>
                    <span className="font-pixel" style={{ fontSize: '0.42rem', color: '#475569' }}>— {p.desc}</span>
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
