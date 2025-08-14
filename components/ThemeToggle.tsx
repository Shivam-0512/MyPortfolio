import React, { useEffect } from 'react'
import { SunIcon, MoonIcon } from 'lucide-react'
interface ThemeToggleProps {
  isDarkMode: boolean
  toggleTheme: () => void
}
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDarkMode,
  toggleTheme,
}) => {
  // Click sound effect
  const playClickSound = () => {
    const audio = new Audio(
      './assets/shutter.m4a',
    )
    audio.volume = 1
    audio.play().catch((error) => console.log('Audio play failed:', error))
  }
  const handleToggle = () => {
    playClickSound()
    toggleTheme()
  }
  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full transition-colors duration-200 focus:outline-none ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  )
}
