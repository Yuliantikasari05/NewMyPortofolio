import { Link } from "react-router-dom"

export function Projects() {
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
      title: "Design Web UMKM-Prototyping",
      description:
        "This is a project to create a UI/UX design for an UMKM website using Figma.",
      image: "/Register.png",
      technologies: ["Figma"],
    },
    {
      id: 4,
      title: "Web UMKM",
      description:
        "This project is just the beginning of learning about full stack and getting to know the Laravel framework.",
      image: "/cookies.png",
      technologies: ["PHP", "Blade"],
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large background shapes */}
        <div className="absolute top-32 -left-24 w-64 h-64 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -right-32 w-80 h-80 rounded-full bg-gradient-to-tl from-orange-100 to-yellow-100 opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 opacity-30 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-40 right-16 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg rotate-45 opacity-60 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 border-2 border-yellow-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-orange-300 rounded-full opacity-70 animate-bounce" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-yellow-300 rounded-lg rotate-12 opacity-50"></div>
        
        {/* Abstract patterns */}
        <svg className="absolute top-24 left-32 w-28 h-28 opacity-15 animate-spin" style={{animationDuration: '25s'}} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="1"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="#FB923C" strokeWidth="1"/>
          <circle cx="50" cy="50" r="15" fill="#FCD34D" opacity="0.5"/>
          <rect x="40" y="40" width="20" height="20" fill="none" stroke="#F97316" strokeWidth="1"/>
        </svg>

        <svg className="absolute bottom-32 right-40 w-32 h-32 opacity-20" viewBox="0 0 100 100">
          <polygon points="50,10 80,30 80,70 50,90 20,70 20,30" fill="none" stroke="#F59E0B" strokeWidth="2"/>
          <polygon points="50,25 70,35 70,65 50,75 30,65 30,35" fill="#FB923C" opacity="0.2"/>
          <circle cx="50" cy="50" r="8" fill="#FCD34D" opacity="0.8"/>
        </svg>

        {/* Grid pattern */}
        <div className="absolute top-20 right-1/4 grid grid-cols-3 gap-3 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-yellow-400' : 'bg-orange-400'} animate-pulse`} style={{animationDelay: `${i * 0.15}s`}}></div>
          ))}
        </div>

        {/* Flowing curves */}
        <svg className="absolute top-1/2 left-16 w-40 h-24 opacity-15" viewBox="0 0 200 120">
          <path d="M0,60 Q50,20 100,60 T200,60" stroke="#F59E0B" strokeWidth="3" fill="none"/>
          <path d="M0,80 Q50,40 100,80 T200,80" stroke="#FB923C" strokeWidth="2" fill="none"/>
          <path d="M0,40 Q50,0 100,40 T200,40" stroke="#FCD34D" strokeWidth="2" fill="none"/>
        </svg>

        {/* Decorative dots constellation */}
        <div className="absolute bottom-60 left-1/3">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-orange-400 rounded-full mt-2 ml-4 animate-ping"></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full mt-1 ml-2 animate-bounce"></div>
        </div>

        {/* Large abstract blob */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-10 animate-pulse">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F59E0B" d="M44.3,-76.5C58.5,-69.2,71.8,-59.4,78.9,-45.8C86,-32.2,86.9,-16.1,85.6,-0.7C84.3,14.7,80.8,29.4,73.6,42.2C66.4,55,55.5,66,42.8,72.8C30.1,79.6,15.1,82.2,-0.4,82.9C-15.8,83.6,-31.7,82.4,-44.9,75.6C-58.1,68.8,-68.6,56.4,-75.8,42.1C-83,27.8,-86.9,13.9,-86.5,0.1C-86.1,-13.7,-81.4,-27.4,-74.2,-39.8C-67,-52.2,-57.3,-63.3,-45.1,-71.1C-32.9,-78.9,-16.5,-83.4,-0.2,-83.1C16.1,-82.8,32.1,-77.7,44.3,-76.5Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Title Section */}
        <div className="text-center mb-12">
          {/* Floating badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-yellow-200 shadow-lg mb-4">
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

        {/* Enhanced Projects Grid - Compact Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/70 backdrop-blur-sm border border-yellow-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] relative"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Enhanced card decorations */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border border-yellow-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Compact Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Compact Content */}
              <div className="p-4 relative">
                {/* Background decoration inside card */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-yellow-50 to-transparent rounded-full -mr-6 -mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 text-xs leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Compact technology tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 rounded-full text-xs border border-yellow-300 font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Compact action button */}
                <Link
                  to={`/project/${project.id}`}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md group w-full"
                >
                  <span>View Details</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional call-to-action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-yellow-200 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Want to see more projects?</h3>
              <p className="text-gray-600 text-sm">Check out my GitHub for additional work and contributions</p>
              <div className="flex items-center justify-center space-x-1 mt-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}