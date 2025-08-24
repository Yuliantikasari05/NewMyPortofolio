import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useRef } from "react"

export function Projects() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, clientWidth } = el
    const scrollAmount = Math.max(280, clientWidth - 120)
    el.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    })
  }

  const projects = [
    {
      id: 1,
      title: "E-Partograf Digital",
      description:
        "The digital E-Partograph is a project resulting from collaboration between the IT team and the Midwifery Master's Program team at Unisa Yogyakarta.",
      image: "/partograf.png",
      technologies: ["Laravel v.10", "MySQL", "Bootstrap 5", "JavaScript (Vanilla)", "HTMl & CSS"],
    },
    {
      id: 2,
      title: "Web Application HappyCare",
      description:
        "HappyCare is a web application created as a result of a major project involving four courses in the fourth semester.",
      image: "/HappyCare.png",
      technologies: ["laravel V.10", "Tailwind", "MySQL", "HTMl & CSS", "Bootstrap"],
    },
    {
      id: 3,
      title: "Design Web UMKM",
      description: "This is a project to create a UI/UX design for an UMKM website using Figma.",
      image: "/Register.png",
      technologies: ["Figma"],
    },
    {
      id: 4,
      title: "Create Web UMKM",
      description:
        "This project is just the beginning of learning about full stack and getting to know the Laravel framework.",
      image: "/cookies.png",
      technologies: ["PHP", "Blade"],
    },
    {
      id: 5,
      title: "Virus Movement Game",
      description:
        "This game was created as a major project for a data structures and algorithms course. It was created using Greenfoot with the Java programming language.",
      image: "/game.png",
      technologies: ["Java", "Greenfoot"],
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-white via-yellow-50 to-orange-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large abstract shapes */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-gradient-to-bl from-orange-100 to-yellow-200 opacity-25 blur-2xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-yellow-100 to-orange-100 opacity-20 blur-xl"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-1/2 left-1/6 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 opacity-15 blur-lg"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-gradient-to-l from-orange-100 to-yellow-100 opacity-25 blur-xl"></div>
        
        {/* Small decorative elements */}
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-orange-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-yellow-300 rounded-full opacity-40 animate-bounce delay-300"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-orange-500 rounded-full opacity-70"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-24 right-24 w-16 h-16 border-2 border-yellow-300 rounded-lg rotate-12 opacity-25 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-orange-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-1/6 w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-300 transform rotate-45 opacity-35"></div>
        
        {/* Abstract curved paths */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-8" viewBox="0 0 1200 800">
          <path
            d="M0,200 Q300,100 600,200 T1200,200"
            stroke="url(#projectGradient1)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0,600 Q400,450 800,600 T1600,600"
            stroke="url(#projectGradient2)"
            strokeWidth="1"
            fill="none"
          />
          <defs>
            <linearGradient id="projectGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FB923C" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="projectGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Dots pattern */}
        <div className="absolute top-40 right-1/3 opacity-20">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Title */}
        <div className="text-center mb-16">
          {/* Floating badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-yellow-200 shadow-lg mb-6">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Click details for more information.
          </p>
        </div>

        {/* Enhanced Carousel Projects */}
        <div className="relative mb-16">
          {/* Enhanced navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-yellow-200"
          >
            <ChevronLeft size={24} className="text-yellow-600" />
          </button>

          <div
            ref={scrollRef}
            className="
              flex space-x-6 overflow-x-auto scroll-smooth
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              pr-4 pl-12
            "
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group flex-shrink-0 w-[320px] h-[480px] flex flex-col bg-white/70 backdrop-blur-sm border border-yellow-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] relative"
              >
                {/* Card decorative elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-yellow-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>

                {/* Enhanced Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project number badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-200 shadow-md">
                    <span className="text-sm font-bold text-yellow-600">#{project.id}</span>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6 flex-1 flex flex-col relative z-10">
                  {/* Header with enhanced styling */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="bg-white/50 rounded-xl p-3 mb-4 border border-yellow-100">
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 rounded-full text-xs border border-yellow-300 font-medium hover:from-yellow-200 hover:to-orange-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium border border-gray-200">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Enhanced Button - Fixed at bottom */}
                  <div className="mt-auto">
                    <Link
                      to={`/project/${project.id}`}
                      className="group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full border-2 border-transparent hover:border-white/20"
                    >
                      <span>View Details</span>
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-yellow-200"
          >
            <ChevronRight size={24} className="text-yellow-600" />
          </button>
        </div>

        {/* Enhanced Call-to-action */}
        <div className="text-center mt-12">
          <div className="group inline-flex items-center justify-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-yellow-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>
            
            <div className="text-center relative z-10">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                Want to see more projects?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Check out my GitHub for additional work and contributions
              </p>
              <div className="flex items-center justify-center space-x-2 mt-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
            
            {/* Decorative corner */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `
      }} />
    </section>
  )
}