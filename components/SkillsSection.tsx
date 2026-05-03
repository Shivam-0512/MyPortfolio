import React, { useState } from 'react';

const SKILLS = [
  { name: 'React',        icon: '⚛',  cat: 'FRONTEND',  tip: 'Component-based UI development' },
  { name: 'JavaScript',   icon: 'JS', cat: 'FRONTEND',  tip: 'ES6+ & async patterns' },
  { name: 'TypeScript',   icon: 'TS', cat: 'FRONTEND',  tip: 'Type-safe applications' },
  { name: 'Tailwind CSS', icon: '🎨', cat: 'FRONTEND',  tip: 'Utility-first styling' },
  { name: 'Node.js',      icon: '🟢', cat: 'BACKEND',   tip: 'Server-side JavaScript' },
  { name: 'Python',       icon: '🐍', cat: 'BACKEND',   tip: 'Automation & AI scripting' },
  { name: 'Firebase',     icon: '🔥', cat: 'DATABASE',  tip: 'Realtime DB & hosting' },
  { name: 'Supabase',     icon: '⚡', cat: 'DATABASE',  tip: 'Postgres + Auth + Storage' },
  { name: 'MongoDB',      icon: '🍃', cat: 'DATABASE',  tip: 'NoSQL document store' },
  { name: 'Generative AI',icon: '✦',  cat: 'AI/ML',     tip: 'LLM & API Integrations' },
  { name: 'IoT / ESP32',  icon: '📡', cat: 'HARDWARE',  tip: 'Sensor integration & MQTT' },
  { name: 'Git / GitHub', icon: '🐙', cat: 'TOOLS',     tip: 'Version control & CI' },
  { name: 'Razorpay',     icon: '💳', cat: 'TOOLS',     tip: 'Payment gateway integration' },
  { name: 'Render',       icon: '🚀', cat: 'TOOLS',     tip: 'Cloud deploy & hosting' },
  { name: 'Android Studio',icon: '🤖',cat: 'TOOLS',     tip: 'Mobile app development' },
];

const CAT_COLORS: Record<string, { border: string; bg: string; text: string }> = {
  FRONTEND: { border: '#6366f1', bg: 'rgba(99,102,241,0.08)',  text: '#a5b4fc' },
  BACKEND:  { border: '#4ade80', bg: 'rgba(74,222,128,0.08)',  text: '#86efac' },
  DATABASE: { border: '#22d3ee', bg: 'rgba(34,211,238,0.08)',  text: '#67e8f9' },
  'AI/ML':  { border: '#facc15', bg: 'rgba(250,204,21,0.08)',  text: '#fde047' },
  HARDWARE: { border: '#f87171', bg: 'rgba(248,113,113,0.08)', text: '#fca5a5' },
  TOOLS:    { border: '#94a3b8', bg: 'rgba(148,163,184,0.08)', text: '#cbd5e1' },
};

export const SkillsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="pixel-section-header">
          INVENTORY — SKILL ITEMS
        </div>

        {/* Category legend */}
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.entries(CAT_COLORS).map(([cat, c]) => (
            <button
              key={cat}
              onClick={() => setFilter(filter === cat ? null : cat)}
              className="font-pixel px-3 py-1.5 transition-all cursor-pointer"
              style={{
                fontSize: '0.5rem',
                color: c.text,
                border: `1px solid ${c.border}`,
                background: filter === cat ? c.bg.replace('0.08', '0.25') : c.bg,
                letterSpacing: '0.1em',
                opacity: filter && filter !== cat ? 0.4 : 1,
                boxShadow: filter === cat ? `3px 3px 0 ${c.border}` : 'none',
                transform: filter === cat ? 'translate(-2px, -2px)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid — 3 columns desktop for bigger, readable cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SKILLS.filter(s => !filter || s.cat === filter).map((skill) => {
            const c = CAT_COLORS[skill.cat] ?? CAT_COLORS.TOOLS;
            return (
              <div
                key={skill.name}
                className="skill-card relative flex flex-col items-center justify-center gap-3 p-4 cursor-pointer select-none transition-all duration-150"
                style={{
                  background: '#020617',
                  border: `2px solid ${c.border}`,
                  boxShadow: `3px 3px 0 ${c.border}44`,
                  minHeight: 120,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `4px 4px 0 ${c.border}, 0 0 14px ${c.border}55`;
                  (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `3px 3px 0 ${c.border}44`;
                  (e.currentTarget as HTMLElement).style.transform = 'none';
                }}
              >
                {/* Tooltip */}
                <div className="skill-tooltip">{skill.tip}</div>

                {/* Icon */}
                <div className="text-2xl leading-none">{skill.icon}</div>

                {/* Name */}
                <div
                  className="font-pixel text-center leading-tight"
                  style={{ fontSize: '0.55rem', color: c.text }}
                >
                  {skill.name}
                </div>

                {/* Category tag */}
                <div
                  className="font-pixel"
                  style={{ fontSize: '0.42rem', color: '#475569', letterSpacing: '0.08em' }}
                >
                  {skill.cat}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom inventory count */}
        <div
          className="mt-8 font-pixel"
          style={{ fontSize: '0.5rem', color: '#334155' }}
        >
          ITEMS: {SKILLS.length}/{SKILLS.length} &nbsp;|&nbsp; SLOTS FULL &nbsp;|&nbsp;
          <span style={{ color: '#6366f1' }}>HOVER ITEM FOR INFO</span>
        </div>
      </div>
    </section>
  );
};
