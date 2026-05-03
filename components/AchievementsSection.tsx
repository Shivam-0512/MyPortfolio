import React from 'react';

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    tier: 'legendary',
    title: 'Techfest IIT Bombay 2024',
    rank: 'Top 10',
    project: 'MailExtracto Automation Bot',
    note: 'National Level Finalist',
    badge: 'LEGENDARY QUEST COMPLETE ✓',
  },
  {
    icon: '🏆',
    tier: 'qualified',
    title: 'Techfest IIT Bombay 2025',
    project: 'Arohan — Autonomous Safety Rover',
    note: 'Selected for Finals · Could not attend due to semester exams',
    badge: 'QUALIFIED QUEST — INTERRUPTED',
  },
  {
    icon: '🏆',
    tier: 'elite',
    title: 'HackDiwas 2026 Grand Finale',
    rank: 'Certificate of Excellence',
    project: 'Arohan',
    note: 'Best Hardware Solution',
    badge: 'ELITE HARDWARE ACHIEVEMENT ✓',
  },
  {
    icon: '⚔️',
    tier: 'battle',
    title: 'Hackathon Veteran',
    note: 'Participated in 7+ Hackathons across AI, IoT, and Full-Stack domains',
    badge: 'BATTLE EXPERIENCE GAINED ✓',
  },
];

const TIER_STYLES: Record<string, { border: string; badgeColor: string; badgeBorder: string; badgeBg: string; glow: string }> = {
  legendary: {
    border: '#f59e0b',
    badgeColor: '#f59e0b',
    badgeBorder: '#92400e',
    badgeBg: 'rgba(245,158,11,0.08)',
    glow: '0 0 20px rgba(245,158,11,0.15)',
  },
  qualified: {
    border: '#3b82f6',
    badgeColor: '#60a5fa',
    badgeBorder: '#1e3a5f',
    badgeBg: 'rgba(59,130,246,0.08)',
    glow: '0 0 20px rgba(59,130,246,0.12)',
  },
  elite: {
    border: '#4ade80',
    badgeColor: '#4ade80',
    badgeBorder: '#166534',
    badgeBg: 'rgba(74,222,128,0.08)',
    glow: '0 0 20px rgba(74,222,128,0.12)',
  },
  battle: {
    border: '#a78bfa',
    badgeColor: '#a78bfa',
    badgeBorder: '#4c1d95',
    badgeBg: 'rgba(167,139,250,0.08)',
    glow: '0 0 20px rgba(167,139,250,0.12)',
  },
};

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="pixel-section-header">
          ELITE ACHIEVEMENTS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((a, i) => {
            const s = TIER_STYLES[a.tier];
            return (
              <div
                key={i}
                className="relative p-5 flex flex-col gap-3"
                style={{
                  background: '#020617',
                  border: `2px solid ${s.border}`,
                  boxShadow: '4px 4px 0px #312e81',
                  transition: 'box-shadow 0.15s, transform 0.15s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `6px 6px 0px ${s.border}, 0 0 20px ${s.border}55`;
                  (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0px #312e81';
                  (e.currentTarget as HTMLElement).style.transform = '';
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.border}, transparent)` }}
                />

                {/* Icon + Title */}
                <div className="flex items-start gap-3">
                  <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{a.icon}</span>
                  <div className="flex flex-col gap-1">
                    <span className="font-pixel" style={{ fontSize: '0.68rem', color: '#e2e8f0', letterSpacing: '0.06em' }}>
                      {a.title}
                    </span>
                    {a.rank && (
                      <span className="font-pixel" style={{ fontSize: '0.55rem', color: s.badgeColor }}>
                        Rank: {a.rank}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project */}
                {a.project && (
                  <div className="font-pixel" style={{ fontSize: '0.55rem', color: '#6366f1' }}>
                    Project: {a.project}
                  </div>
                )}

                {/* Note */}
                <div className="font-pixel leading-relaxed" style={{ fontSize: '0.52rem', color: '#64748b' }}>
                  {a.note}
                </div>

                {/* Badge */}
                <div
                  className="inline-block self-start font-pixel px-3 py-1 mt-1"
                  style={{
                    fontSize: '0.5rem',
                    color: s.badgeColor,
                    border: `1px solid ${s.badgeBorder}`,
                    background: s.badgeBg,
                    letterSpacing: '0.08em',
                  }}
                >
                  [ {a.badge} ]
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
