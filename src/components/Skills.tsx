"use client"

import { useState } from "react"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Hard Skills",
      skills: [
        { name: "Figma Tools", level: 95 },
        { name: "Prototyping", level: 90 },
        { name: "Wireframing", level: 88 },
        { name: "PHP", level: 92 },
        { name: "Laravel", level: 94 },
        { name: "HTML/CSS", level: 96 },
      ],
    },
    backend: {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 87 },
        { name: "TeamWork", level: 82 },
        { name: "Adaptability", level: 85 },
        { name: "Accuracy", level: 80 },
        { name: "Analytical", level: 88 },
        { name: "Willing to Learn", level: 90 },
      ],
    },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-white via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large background shapes */}
        <div className="absolute top-10 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-20 w-80 h-80 rounded-full bg-gradient-to-tl from-orange-100 to-yellow-100 opacity-40 blur-3xl"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-lg rotate-45 opacity-50 animate-bounce"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-yellow-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-orange-300 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-yellow-400 rounded-lg rotate-12 opacity-50"></div>
        
        {/* Abstract patterns */}
        <svg className="absolute top-20 left-1/3 w-24 h-24 opacity-20 animate-spin" style={{animationDuration: '20s'}} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#F59E0B" strokeWidth="2"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="#FB923C" strokeWidth="1"/>
          <circle cx="50" cy="50" r="10" fill="#FCD34D" opacity="0.7"/>
        </svg>

        <svg className="absolute bottom-40 right-1/3 w-32 h-32 opacity-15" viewBox="0 0 100 100">
          <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="#F59E0B" strokeWidth="2"/>
          <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" fill="#FB923C" opacity="0.3"/>
        </svg>

        {/* Dots pattern */}
        <div className="absolute top-1/4 left-10 grid grid-cols-4 gap-2 opacity-30">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-yellow-400' : i % 3 === 1 ? 'bg-orange-400' : 'bg-yellow-300'} animate-pulse`} style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>

        {/* Flowing lines */}
        <svg className="absolute top-60 left-32 w-40 h-20 opacity-20" viewBox="0 0 200 100">
          <path d="M0,50 Q50,10 100,50 T200,50" stroke="#F59E0B" strokeWidth="3" fill="none"/>
          <path d="M0,60 Q50,20 100,60 T200,60" stroke="#FB923C" strokeWidth="2" fill="none"/>
        </svg>

        {/* Large decorative blob */}
        <div className="absolute top-0 right-1/4 w-48 h-48 opacity-10 animate-pulse">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F59E0B" d="M57.3,-52.5C72.4,-39.1,81.7,-19.6,81.5,0.1C81.4,19.7,71.8,39.4,56.7,54.2C41.6,69,21,78.9,0.6,78.3C-19.8,77.6,-39.6,66.4,-54.8,51.6C-70,36.8,-80.6,18.4,-80.7,-0.1C-80.8,-18.5,-70.4,-37,-55.2,-50.4C-40,-63.8,-20,-72.1,-0.2,-71.9C19.6,-71.7,39.2,-63,57.3,-52.5Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and skills I work with to bring ideas to life.
          </p>
        </div>

        {/* Enhanced Category Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-yellow-100">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                    : "text-gray-700 hover:text-gray-900 hover:bg-yellow-50"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Skills Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-100 overflow-hidden relative">
          {/* Decorative elements inside card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-100 to-transparent rounded-full -ml-12 -mb-12 opacity-60"></div>
          
          <div className="p-8 border-b border-yellow-100 bg-gradient-to-r from-yellow-50 to-orange-50 relative">
            <div className="absolute top-4 left-8 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-8 w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
          </div>
          
          <div className="p-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className="space-y-3 group">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold text-lg group-hover:text-yellow-600 transition-colors">{skill.name}</span>
                    <span className="text-yellow-600 font-bold text-lg bg-yellow-100 px-3 py-1 rounded-full">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 h-4 rounded-full transition-all duration-1000 ease-out shadow-sm relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Skill level indicator */}
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.floor(skill.level / 20)
                              ? 'bg-yellow-400'
                              : 'bg-gray-300'
                          } animate-pulse`}
                          style={{animationDelay: `${i * 0.1}s`}}
                        />
                      ))}
                    </div>
                    <span className="font-medium">
                      {skill.level >= 90 ? 'Expert' : skill.level >= 70 ? 'Advanced' : skill.level >= 50 ? 'Intermediate' : 'Beginner'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}