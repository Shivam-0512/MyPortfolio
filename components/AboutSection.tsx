import React from 'react'
import { CodeIcon, ServerIcon, PencilIcon, LayersIcon } from 'lucide-react'
export const AboutSection = () => {
  const skills = [
    {
      name: 'Frontend Development',
      icon: <CodeIcon size={24} />,
      description: 'React, JavaScript, Tailwind CSS, HTML/CSS',
    },
    {
      name: 'Backend Development',
      icon: <ServerIcon size={24} />,
      description: 'Python, Supabase, Firebase, SQL, Node.js',
    },
    {
      name: 'AI & IoT',
      icon: <PencilIcon size={24} />,
      description: 'Gemini API, IoT, Sensor Integration, Automation',
    },
    {
      name: 'Platforms & Tools',
      icon: <LayersIcon size={24} />,
      description: 'GitHub, Render, Android Studio',
    },
  ]
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gray-300 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a third-year B.Tech Computer Science student driven to turn complex
              challenges into functional, elegant solutions. My passion lies in bridging
              the gap between software and the physical world, a journey that has led me
              to engineer an AI-powered e-commerce platform<a href='https://revcraft.netlify.app/' target='blank' className='font-bold'> (RevCraft)</a>, a comprehensive IoT-based
              Waste Management System <a href='https://testbin-586ac.web.app/' target='blank' className='font-bold'> (EcoBin)</a>, and an award-winning Email Automation Bot recognized at IIT Bombay.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I thrive on building end-to-end systems, from the initial concept to the final,
              polished product. My goal is to use my skills in problem-solving, full-stack development,
              AI, and IoT to create technology that makes a tangible impact.
            </p>
            <p className="text-lg text-gray-700">
              Beyond the screen, I love exploring the world on my bike, always on the 
              lookout for a new path or perspective.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-md">
            <h3 className="text-xl font-semibold mb-6">
              Education
            </h3>
            <div className="mb-6">
              <div className="text-lg font-medium">
                B.Tech, Computer Science & Engineering
              </div>
              <div className="text-gray-700 mb-2">United College of Engineering And Research, Prayagraj</div>
              <p className="text-gray-500">
                2023 - 2027 (Expected)
              </p>
            </div>
            <div className="mb-6">
              <div className="text-lg font-medium">
                Senior Secondary (CBSE)
              </div>
              <div className="text-gray-700 mb-2">Allahabad Public School, Prayagraj</div>
              <p className="text-gray-500">
               2021 - 2022
              </p>
            </div>
            <div>
              <div className="text-lg font-medium">Secondary (CBSE)</div>
              <div className="text-gray-700 mb-2">Allahabad Public School, Prayagraj</div>
              <p className="text-gray-500">
                2019-2020
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-10">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-sm border border-gray-100"
            >
              <div className="text-gray-500 mb-4">{skill.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
