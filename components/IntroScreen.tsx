import React, { useEffect, useState, useRef } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

const STAR_COUNT = 80;

function generateStars() {
  return Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    char: ['*', '+', '·', '✦', '★'][Math.floor(Math.random() * 5)],
    duration: 1.5 + Math.random() * 3,
    delay: Math.random() * 3,
    size: Math.random() > 0.8 ? 14 : 10,
  }));
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [stars] = useState(generateStars);
  const [loadingPct, setLoadingPct] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const [showStart, setShowStart] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [loadingText, setLoadingText] = useState('LOADING...');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const loadingMessages = [
    'LOADING...',
    'BOOTING SYSTEM...',
    'INIT PORTFOLIO...',
    'LOADING ASSETS...',
    'READY.',
  ];

  useEffect(() => {
    // Cycle loading messages
    let msgIdx = 0;
    const msgInterval = setInterval(() => {
      msgIdx = (msgIdx + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[msgIdx]);
    }, 600);

    // Loading bar progress
    let pct = 0;
    intervalRef.current = setInterval(() => {
      pct += Math.random() * 4 + 1;
      if (pct >= 100) {
        pct = 100;
        clearInterval(intervalRef.current!);
        clearInterval(msgInterval);
        setLoadingText('READY.');
        setLoadingDone(true);
        setTimeout(() => setShowStart(true), 400);
      }
      setLoadingPct(Math.min(Math.floor(pct), 100));
    }, 60);

    return () => {
      clearInterval(intervalRef.current!);
      clearInterval(msgInterval);
    };
  }, []);

  const handleStart = () => {
    if (pressed) return;
    setPressed(true);
    setTimeout(() => {
      setFadingOut(true);
      setTimeout(onComplete, 800);
    }, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden
        ${fadingOut ? 'intro-fade-out' : ''}`}
      style={{ background: '#0f172a' }}
    >
      {/* Scanlines */}
      <div className="scanlines" />

      {/* Stars */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            '--duration': `${s.duration}s`,
            '--delay': `${s.delay}s`,
            fontSize: s.size,
          } as React.CSSProperties}
        >
          {s.char}
        </span>
      ))}

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-lg w-full">

        {/* Logo / Title */}
        <div className="font-pixel text-pixel-neon hud-flicker" style={{ fontSize: '1.1rem', letterSpacing: '0.08em' }}>
          <span style={{ color: '#4ade80' }}>SHI</span>
          <span style={{ color: '#6366f1' }}>VAM</span>
          <span style={{ color: '#a5b4fc' }}>.EXE</span>
        </div>

        {/* Subtitle */}
        <div className="font-pixel text-slate-400" style={{ fontSize: '0.45rem', letterSpacing: '0.15em' }}>
          FULL STACK DEVELOPER // AI + IOT SPECIALIST
        </div>

        {/* Loading text */}
        <div
          className="font-pixel text-pixel-green cursor-blink"
          style={{ fontSize: '0.55rem', letterSpacing: '0.1em' }}
        >
          {loadingText}
        </div>

        {/* Loading bar */}
        <div className="w-full max-w-sm">
          <div
            className="w-full h-5 bg-[#020617]"
            style={{ border: '2px solid #4338ca', boxShadow: '3px 3px 0 #1e1b4b' }}
          >
            <div
              className="h-full exp-bar-fill transition-none"
              style={{ width: `${loadingPct}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="font-pixel text-indigo-400" style={{ fontSize: '0.4rem' }}>
              LOADING PORTFOLIO
            </span>
            <span className="font-pixel text-indigo-400" style={{ fontSize: '0.4rem' }}>
              {loadingPct}%
            </span>
          </div>
        </div>

        {/* Press Start button */}
        {showStart && (
          <button
            id="press-start-btn"
            onClick={handleStart}
            className={`font-pixel cursor-pointer select-none mt-4
              ${pressed ? '' : 'animate-blink'}
            `}
            style={{
              fontSize: '0.7rem',
              color: pressed ? '#4ade80' : '#e0e7ff',
              border: `3px solid ${pressed ? '#4ade80' : '#6366f1'}`,
              boxShadow: pressed
                ? '0 0 0 #312e81'
                : '5px 5px 0px #312e81, 0 0 20px rgba(99,102,241,0.4)',
              padding: '14px 24px',
              transform: pressed ? 'translate(5px, 5px)' : 'none',
              transition: 'transform 0.1s, box-shadow 0.1s, color 0.1s, border-color 0.1s',
              background: pressed ? 'rgba(74,222,128,0.1)' : 'rgba(99,102,241,0.08)',
              animation: pressed ? 'none' : 'blink 1s step-end infinite',
            }}
          >
            {pressed ? '[ STARTING... ]' : '[ PRESS START ]'}
          </button>
        )}

        {/* Bottom hint */}
        <div className="font-pixel text-slate-600 mt-2" style={{ fontSize: '0.38rem' }}>
          © {new Date().getFullYear()} SHIVAM KUSHWAHA — ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};
