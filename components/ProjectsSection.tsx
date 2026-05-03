import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PixelButton } from './PixelButton';

const projects = [
  {
    title: 'RevCraft',
    subtitle: 'AI-Powered Car Modification Platform',
    description: 'Full-stack e-commerce for car enthusiasts. Seller portal, AI ModBot via Gemini API for smart modification advice and product recommendations.',
    images: [
      './assets/revcraft1.png',
      './assets/revcraft2.png',
      './assets/revcraft3.png',
      './assets/revcraft4.png',
    ],
    tags: ['React', 'Node.js', 'Supabase', 'SQL', 'Gemini API', 'Razorpay', 'TypeScript'],
    liveLink: 'https://revcraft.netlify.app/',
    githubLink: 'https://github.com/Shivam-0512/RevCraft',
    difficulty: '★★★★☆',
  },
  {
    title: 'EcoBin',
    subtitle: 'IoT Smart Waste Management System',
    description: 'End-to-end IoT solution: sensor-equipped smart bins, real-time admin dashboard, and route-optimized mobile app for waste collection workers.',
    images: [
      './assets/ecobin1.png',
      './assets/ecobin2.png',
      './assets/ecobin3.png',
      './assets/ecobin4.png',
    ],
    tags: ['IoT', 'Python', 'Firebase', 'JavaScript', 'Android Studio'],
    liveLink: 'https://testbin-586ac.web.app/',
    githubLink: 'https://github.com/Shivam-0512/EcoBin',
    difficulty: '★★★★★',
  },
  {
    title: 'MailExtracto',
    subtitle: 'Intelligent Email Automation Bot',
    description: 'Award-winning bot that intelligently extracts data from emails → Google Sheets. Top 10 project at Techfest IIT Bombay 2024.',
    images: [
      './assets/mailextracto1.png',
      './assets/mailextracto2.png',
      './assets/mailextracto3.png',
      './assets/mailextracto5.jpg',
    ],
    tags: ['Python', 'Automation', 'Google Sheets API', 'TruBot'],
    liveLink: 'https://drive.google.com/file/d/121cKbKBEZpgxRUPP53Fziwqb_Zo4CS5s/view?usp=sharing',
    githubLink: 'https://github.com/Shivam-0512/IIT-Bombay-MailExtracto',
    difficulty: '★★★☆☆',
  },
  {
    title: 'Portfolio',
    subtitle: 'Personal Developer Portfolio',
    description: 'Responsive pixel-art retro game portfolio built with React + Tailwind CSS. Features a live intro screen, RPG character panel, and quest-based contact.',
    images: [
      './assets/protfolio1.png',
      './assets/protfolio2.png',
      './assets/protfolio3.png',
    ],
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    liveLink: 'https://shivam-kushwaha.netlify.app/',
    githubLink: 'https://github.com/Shivam-0512/MyPortfolio',
    difficulty: '★★☆☆☆',
  },
];

const LevelCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (project.images.length <= 1) return;
    const id = setInterval(() => {
      setImgIdx(prev => (prev + 1) % project.images.length);
    }, 2200);
    return () => clearInterval(id);
  }, [project.images]);

  const levelNum = String(index + 1).padStart(2, '0');

  return (
    <div
      className="relative flex flex-col overflow-hidden transition-all duration-200"
      style={{
        background: '#020617',
        border: '2px solid #4338ca',
        boxShadow: hovered
          ? '6px 6px 0px #4f46e5, 0 0 22px rgba(99,102,241,0.25)'
          : '5px 5px 0px #1e1b4b',
        transform: hovered ? 'translate(-2px,-2px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Level header bar */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ background: '#0a0f1e', borderBottom: '2px solid #4338ca' }}
      >
        <span className="font-pixel" style={{ fontSize: '0.45rem', color: '#4ade80' }}>
          LEVEL {levelNum}
        </span>
        <span className="font-pixel" style={{ fontSize: '0.38rem', color: '#334155' }}>
          {project.difficulty}
        </span>
      </div>

      {/* Image slideshow */}
      <div className="relative h-52 overflow-hidden" style={{ background: '#0a0f1e' }}>
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.title} screenshot ${i + 1}`}
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === imgIdx ? 1 : 0 }}
          />
        ))}
        {/* Scanline on image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.08) 3px,rgba(0,0,0,0.08) 4px)',
          }}
        />
        {/* Image dot indicators */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {project.images.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5"
              style={{ background: i === imgIdx ? '#6366f1' : '#1e293b' }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3
          className="font-pixel mb-1"
          style={{ fontSize: '0.6rem', color: '#e2e8f0', letterSpacing: '0.05em' }}
        >
          {project.title}
        </h3>
        <div
          className="font-pixel mb-3"
          style={{ fontSize: '0.35rem', color: '#6366f1', letterSpacing: '0.05em' }}
        >
          {project.subtitle}
        </div>

        {/* Description */}
        <p
          className="font-pixel leading-loose mb-4 flex-grow"
          style={{ fontSize: '0.34rem', color: '#475569' }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-pixel px-1.5 py-0.5"
              style={{
                fontSize: '0.28rem',
                color: '#a5b4fc',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid #312e81',
                letterSpacing: '0.06em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          <PixelButton variant="primary" as="a" href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={10} />
            ENTER LEVEL
          </PixelButton>
          <PixelButton variant="outline" as="a" href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Github size={10} />
            {'<SRC>'}
          </PixelButton>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="pixel-section-header">
          SELECT LEVEL — PROJECTS
        </div>

        {/* Level cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <LevelCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* More on GitHub */}
        <div className="flex justify-center mt-12">
          <PixelButton variant="outline" as="a" href="https://github.com/Shivam-0512" target="_blank" rel="noopener noreferrer">
            <Github size={12} />
            [ VIEW MORE LEVELS ON GITHUB ]
          </PixelButton>
        </div>
      </div>
    </section>
  );
};
