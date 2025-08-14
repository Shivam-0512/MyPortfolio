import React, { useState, useEffect } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all
        ${scrolled
          ? 'backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow'
          : 'bg-transparent'}
        py-6 px-6 md:px-12 lg:px-24
        ${isDarkMode ? 'text-white' : 'text-gray-800'}
      `}
      style={{ backdropFilter: scrolled ? 'blur(12px)' : undefined }}
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          T<span className="text-gray-400">ECHEEZ</span>
        </div>
        <div className="flex items-center space-x-6">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="hover:text-gray-500 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-gray-500 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-gray-500 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-500 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 flex flex-col space-y-4 md:hidden">
          <a href="#home" className="hover:text-gray-500 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-gray-500 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-gray-500 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-500 transition-colors">
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}