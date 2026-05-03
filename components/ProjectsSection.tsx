import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PixelButton } from './PixelButton';

const projects = [
  {
    title: 'Codnite',
    subtitle: 'Technical Lead & Co-Builder',
    description: 'Part of the core team building Codnite — a full-stack competitive coding platform for Indian college students. Contributing to architecture decisions, technical strategy, and hands-on development of real-time battle systems, gamification, and the overall platform.',
    images: [
      './assets/codnite1.png',
      './assets/codnite2.png',
      './assets/codnite3.png',
      './assets/codnite4.png',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Redis', 'Docker', 'Tailwind CSS'],
    liveLink: 'https://www.codnite.com/',
    githubLink: '#',
    difficulty: '★★★★½',
  },
  {
    title: 'Arohhan',
    subtitle: 'Autonomous Campus Safety System',
    description: 'An AI-powered IoT and robotics-based safety system that detects hazards like gas leaks and fire, verifies them using an autonomous rover, and triggers real-time alerts and mitigation — reducing response time from minutes to seconds.',
    images: [
      './assets/arohan1.png',
      './assets/arohan2.png',
      './assets/arohan3.png',
    ],
    tags: ['ESP32', 'Arduino', 'IoT', 'OpenCV', 'Node.js', 'Python'],
    liveLink: 'https://arohan-ruby.vercel.app/dashboard',
    githubLink: '#',
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
    difficulty: '★★★½☆',
  },
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
    tags: ['React', 'Node.js', 'Supabase', 'SQL', 'Gemini API', 'Razorpay'],
    liveLink: 'https://revcraft.netlify.app/',
    githubLink: 'https://github.com/Shivam-0512/RevCraft',
    difficulty: '★★☆☆☆',
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
    difficulty: '★★☆☆☆',
  },
];

const LevelCard = ({ project, levelNum }: { project: typeof projects[0]; levelNum: number }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (project.images.length <= 1) return;
    const id = setInterval(() => {
      setImgIdx(prev => (prev + 1) % project.images.length);
    }, 2200);
    return () => clearInterval(id);
  }, [project.images]);

  const levelStr = String(levelNum).padStart(2, '0');

  return (
    <div
      className="relative flex flex-col overflow-hidden transition-all duration-200 cursor-pointer w-full h-full"
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
        <span className="font-pixel" style={{ fontSize: '0.62rem', color: '#4ade80' }}>
          LEVEL {levelStr}
        </span>
        <span className="font-pixel tracking-widest" style={{ fontSize: '0.65rem', color: '#facc15' }}>
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
          style={{ fontSize: '0.72rem', color: '#e2e8f0', letterSpacing: '0.05em' }}
        >
          {project.title}
        </h3>
        <div
          className="font-pixel mb-3"
          style={{ fontSize: '0.5rem', color: '#6366f1', letterSpacing: '0.05em' }}
        >
          {project.subtitle}
        </div>

        {/* Description */}
        <p
          className="font-pixel leading-loose mb-4 flex-grow"
          style={{ fontSize: '0.48rem', color: '#475569' }}
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
                fontSize: '0.4rem',
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const child = scrollRef.current.children[0] as HTMLElement;
    if (child) {
      const itemWidth = child.offsetWidth + 24; // gap-6 = 24px
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), projects.length - 1));
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="pixel-section-header">
          SELECT LEVEL — PROJECTS
        </div>

        {/* Horizontal scroll grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="w-[85vw] md:w-[400px] lg:w-[450px] flex-shrink-0 snap-center flex items-stretch"
            >
              <LevelCard project={project} levelNum={6 - i} />
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center items-center gap-3 mt-2 mb-10">
          {projects.map((_, i) => (
            <div
              key={i}
              className="transition-all duration-300"
              style={{
                width: i === activeIndex ? '24px' : '8px',
                height: '8px',
                background: i === activeIndex ? '#4ade80' : '#1e293b',
                boxShadow: i === activeIndex ? '0 0 8px rgba(74,222,128,0.5)' : 'none',
              }}
            />
          ))}
        </div>

        {/* More on GitHub */}
        <div className="flex justify-center">
          <PixelButton variant="outline" as="a" href="https://github.com/Shivam-0512" target="_blank" rel="noopener noreferrer">
            <Github size={12} />
            [ VIEW MORE LEVELS ON GITHUB ]
          </PixelButton>
        </div>
      </div>
    </section>
  );
};
