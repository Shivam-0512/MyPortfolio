import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react'; // Corrected icon imports

// --- ProjectCard Component ---
// This new component manages the image slideshow for a single project.
const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // This effect sets up an interval to cycle through the images.
  useEffect(() => {
    // Ensure the project has more than one image before starting the slideshow.
    if (project.images && project.images.length > 1) {
      const intervalId = setInterval(() => {
        // Move to the next image, looping back to the start if at the end.
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      }, 2000); // Change image every 3 seconds

      // Cleanup function to clear the interval when the component unmounts.
      return () => clearInterval(intervalId);
    }
  }, [project.images]); // Rerun effect if the images array changes.

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Image container with slideshow */}
      <div className="h-60 overflow-hidden relative">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className={`
              w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}
      </div>
      {/* Content container */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-auto">
          <a
            href={project.liveLink}
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} className="mr-1" />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} className="mr-1" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};


// --- Main ProjectsSection Component ---
export const ProjectsSection = () => {
  // Updated project data with an 'images' array for each project.
  // Replace these placeholder URLs with your actual project screenshots.
  const projects = [
    {
      title: 'RevCraft - AI-Powered Car Modification Platform',
      description: 'A full-stack e-commerce platform for car enthusiasts. Features a dedicated seller portal for product management and an AI "ModBot" (powered by the Gemini API) that provides smart modification advice and product recommendations.',
      images: [
        './assets/revcraft1.png',
        './assets/revcraft2.png',
        './assets/revcraft3.png',
        './assets/revcraft4.png',
      ],
      tags: ['React', 'Node.js', 'Supabase', 'SQL', 'Gemini API', 'Razorpay' ,'TypeScript'],
      liveLink: 'https://revcraft.netlify.app/',
      githubLink: 'https://github.com/Shivam-0512/RevCraft',
    },
    {
      title: 'EcoBin - IoT Smart Waste Management System',
      description: 'An end-to-end IoT solution for efficient waste collection, featuring sensor-equipped smart bins, a real-time admin dashboard, and a route-optimized mobile app for workers.',
      images: [
        './assets/ecobin1.png',
        './assets/ecobin2.png',
        './assets/ecobin3.png',
        './assets/ecobin4.png',
      ],
      tags: ['IoT', 'Python', 'Firebase', 'JavaScript', 'Android Studio', 'Pyhton'],
      liveLink: 'https://testbin-586ac.web.app/',
      githubLink: 'https://github.com/Shivam-0512/EcoBin',
    },
    {
      title: 'MailExtracto - Intelligent Email Automation Bot',
      description: 'An award-winning automation bot that intelligently extracts data from emails and populates it into Google Sheets, recognized as a Top 10 project at Techfest IIT Bombay 2024.',
       images: [
        './assets/mailextracto1.png',
        './assets/mailextracto2.png',
        './assets/mailextracto3.png',
        './assets/mailextracto5.jpg',
      ],
      tags: ['Python', 'Automation', 'Google Sheets API' ,'Datamatics TruBot & TruCap'],
      liveLink: 'https://drive.google.com/file/d/121cKbKBEZpgxRUPP53Fziwqb_Zo4CS5s/view?usp=sharing',
      githubLink: 'https://github.com/Shivam-0512/IIT-Bombay-MailExtracto',
    },
    {
      title: 'Personal Developer Portfolio',
      description: 'A responsive personal portfolio built with React and Tailwind CSS, featuring a sleek design, smooth animations.',
       images: [
        './assets/protfolio1.png',
        './assets/protfolio2.png',
        './assets/protfolio3.png',
      ],
      tags: ['React', 'Tailwind CSS', 'Gemini API', 'TypeScript'],
      liveLink: 'https://shivam-kushwaha.netlify.app/',
      githubLink: 'https://github.com/Shivam-0512/MyPortfolio',
    },
  ];

  return (
    // FIX: Removed the background color classes (bg-gray-50 dark:bg-gray-900)
    // The section will now have a transparent background, matching the rest of the site.
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h2>
        <div className="w-20 h-1 bg-gray-300 dark:bg-gray-700 mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="https://github.com/Shivam-0512" // Your actual GitHub profile URL
            className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-flex items-center text-gray-800 dark:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} className="mr-2" />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
