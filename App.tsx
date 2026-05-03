import React, { useState } from 'react'
import { IntroScreen } from './components/IntroScreen'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <div className="relative w-full min-h-screen bg-[#0f172a] text-slate-100 overflow-x-hidden">

      {/* Global CRT scanlines overlay */}
      <div className="scanlines" />

      {/* Intro screen overlay */}
      {showIntro && (
        <IntroScreen onComplete={() => setShowIntro(false)} />
      )}

      {/* Main portfolio — always rendered but hidden under intro */}
      <div
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
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
