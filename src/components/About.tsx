import React from "react"

export function About(): React.ReactElement {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large background shapes */}
        <div className="absolute top-20 -right-32 w-80 h-80 rounded-full bg-gradient-to-bl from-yellow-100 to-orange-100 opacity-50 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-50 to-orange-50 opacity-60 blur-3xl"></div>
        
        {/* Abstract shapes scattered */}
        <div className="absolute top-1/4 right-10 w-20 h-20 border border-yellow-300 rounded-lg rotate-12 opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-60 left-1/2 w-12 h-12 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-lg rotate-45 opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 border-2 border-orange-400 rounded-full opacity-40"></div>
        
        {/* Floating dots with different animations */}
        <div className="absolute top-40 left-1/3 w-3 h-3 bg-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-60 left-2/3 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
        
        {/* Enhanced Abstract lines and patterns */}
        <svg className="absolute top-32 left-20 w-32 h-32 opacity-20" viewBox="0 0 100 100">
          <path d="M10,30 Q30,10 50,30 T90,30" stroke="#F59E0B" strokeWidth="2" fill="none"/>
          <path d="M10,60 Q30,40 50,60 T90,60" stroke="#FB923C" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="20" r="3" fill="#FCD34D" opacity="0.7"/>
          <circle cx="80" cy="80" r="2" fill="#F97316" opacity="0.5"/>
        </svg>

        <svg className="absolute bottom-32 right-32 w-24 h-24 opacity-15 animate-spin" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="#F59E0B" strokeWidth="2"/>
          <circle cx="50" cy="50" r="5" fill="#FB923C"/>
        </svg>

        {/* Large decorative blob */}
        <div className="absolute top-1/3 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F59E0B" d="M40.7,-67.4C50.9,-59.4,56.4,-42.8,64.8,-26.8C73.3,-10.8,84.7,4.6,84.1,19.8C83.5,35,70.9,49.9,56.1,58.7C41.3,67.4,24.3,70,6.8,70.8C-10.7,71.6,-28.6,70.6,-43.8,62.4C-59,54.2,-71.5,38.8,-74.9,21.4C-78.3,4,-72.6,-15.4,-63.4,-30.4C-54.2,-45.4,-41.5,-56,-26.5,-64.2C-11.5,-72.4,6.8,-78.2,23.9,-74.8C41,-71.4,57,-58.8,40.7,-67.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        {/* Pattern grid */}
        <div className="absolute top-10 left-1/2 grid grid-cols-3 gap-2 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-yellow-400' : 'bg-orange-400'} animate-pulse`} style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              Me
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Enhanced Photo Section */}
          <div className="flex-1 relative mt-10 md:mt-0 flex justify-center z-10 order-2 md:order-1">
            <div className="relative">
              {/* Main animated shape */}
              <svg
                className="absolute w-[500px] h-[500px] -z-10 animate-pulse"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="aboutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#FEF3C7", stopOpacity: 0.8 }} />
                    <stop offset="50%" style={{ stopColor: "#FDE68A", stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: "#F59E0B", stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M421.5,314.5Q376,379,314.5,422Q253,465,172.5,428Q92,391,72.5,320.5Q53,250,73.5,178.5Q94,107,166.5,87.5Q239,68,309.5,87.5Q380,107,424.5,178.5Q469,250,421.5,314.5Z"
                  fill="url(#aboutGrad1)"
                />
              </svg>

              {/* Secondary animated shape */}
              <svg
                className="absolute w-[450px] h-[450px] -z-10 top-6 left-6 animate-pulse"
                style={{animationDelay: '0.5s'}}
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="aboutGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#FFEDD5", stopOpacity: 0.5 }} />
                    <stop offset="100%" style={{ stopColor: "#FB923C", stopOpacity: 0.3 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M380,320Q350,380,290,400Q230,420,170,390Q110,360,90,300Q70,240,100,180Q130,120,190,110Q250,100,310,120Q370,140,390,200Q410,260,380,320Z"
                  fill="url(#aboutGrad2)"
                />
              </svg>

              {/* Enhanced decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-8 w-10 h-10 border-2 border-yellow-500 rounded-lg rotate-45 opacity-60 animate-pulse"></div>
              <div className="absolute top-1/3 -right-6 w-8 h-8 bg-orange-300 rounded-full opacity-50 animate-bounce" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute bottom-1/4 -left-4 w-6 h-6 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-lg rotate-12 opacity-60"></div>

              {/* Enhanced photo with multiple effects */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-[68px] blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute inset-0 bg-white rounded-[60px] shadow-xl"></div>
                <img
                  src="/mbakyul2.jpg"
                  alt="Profile"
                  className="relative w-[350px] h-[420px] object-cover rounded-[60px] shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating elements around photo */}
                <div className="absolute -top-4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-4 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>

          {/* Enhanced Text Section */}
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-lg">
              Starting with designing prototypes and mockups for SME websites at the beginning of the semester, I discovered my passion for UI/UX Design. 
              However, my journey didn’t stop there I also honed my skills as a System Analyst, from analyzing user needs, designing appropriate systems, to finding solutions to various problems.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
              From developing the HappyCare health tourism platform for the community in Yogyakarta to collaborating with the Master's Program in Midwifery to create a digital e-partograph, 
              I have combined design aesthetics with precise analysis to produce functional, user-friendly digital solutions that have a real impact on health.
              </p>
            </div>

            {/* Enhanced tech stack with stagger animation */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tecnology</h4>
              <div className="flex flex-wrap gap-3">
                {["React", "PHP", "Tailwind", "HTML", "CSS", "MySQL"].map((tech, index) => (
                  <span
                    key={tech}
                    className="group px-4 py-2 bg-white border-2 border-yellow-200 text-gray-700 rounded-full text-sm font-medium transition-all duration-300 hover:border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-white hover:scale-105 hover:shadow-lg cursor-pointer animate-bounce"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationDuration: '2s',
                      animationIterationCount: 'infinite'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="mt-8">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-yellow-600 hover:to-orange-600"
              >
                View My Work
                <svg className="ml-2 w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}