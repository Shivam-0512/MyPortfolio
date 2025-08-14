import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  ArrowDown,
  Instagram,
} from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-20 px-6 md:px-12 lg:px-24 min-h-[90vh] flex flex-col justify-center relative mt-16"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 w-full">
          {/* Profile + Flag on mobile */}
          <div className="flex flex-col items-center md:hidden mb-6 relative">
            <div className="relative">
              <img
                src="./assets/profile.png" 
                alt="Shivam"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover" 
              />
              <span
                className="absolute -top-2 -right-2 rounded overflow-hidden"
                style={{ width: 45, height: 30, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                  alt="India Flag"
                  className="w-full h-full object-cover"
                />
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white text-center md:text-left">
            Hi, I'm <span className="text-gray-500 dark:text-gray-400">Shivam</span><br />
            Full-Stack & AI Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl text-center md:text-left">
            I build innovative, end-to-end solutions for real-world challenges. From engineering AI-powered e-commerce platforms like RevCraft to developing smart IoT waste management systems and automation bots.
          </p>
          <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
          </div>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a
              href="https://github.com/Shivam-0512"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam0512/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/shivam.k_0512/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        {/* Right: Profile Image with India Flag (top-right on desktop) */}
        <div className="relative flex-shrink-0 mt-10 md:mt-0 hidden md:block">
          <img
            src="./assets/profile.png" 
            alt="Shivam"
            className="w-56 h-56 rounded-full border-4 border-white shadow-lg object-cover" // <-- Bigger on desktop
          />
          {/* India flag badge (top-right, only on md and up) */}
          <span
            className="absolute -top-1 -right-1 rounded overflow-hidden"
            style={{ width: 70, height: 45, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India Flag"
              className="w-full h-full object-cover"
            />
          </span>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};