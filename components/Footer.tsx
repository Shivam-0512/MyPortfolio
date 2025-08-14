import React from 'react'
import { GithubIcon, LinkedinIcon, TwitterIcon, HeartIcon, InstagramIcon } from 'lucide-react'
export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-xl font-bold mb-6 md:mb-0">
            T<span className="text-gray-400">ECHEEZ</span>
          </div>
          <nav className="flex space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="h-px bg-gray-200 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Developer Portfolio. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Shivam-0512"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam0512/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/shivam.k_0512/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm flex items-center justify-center">
          Made with <HeartIcon size={14} className="mx-1 text-gray-400" /> by
          Developer
        </div>
      </div>
    </footer>
  )
}
