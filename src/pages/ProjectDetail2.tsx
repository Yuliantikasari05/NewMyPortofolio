import { Link } from "react-router-dom"

export default function ProjectDetail1() {
  const gallery = ["/happycare2.png"] // tambah path lain kalau ada

  return (
    <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 min-h-screen text-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large abstract shapes */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-bl from-yellow-200 to-orange-200 opacity-25 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100 to-yellow-200 opacity-30 blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-yellow-100 to-orange-100 opacity-20 blur-xl"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-1/2 right-1/6 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 opacity-15 blur-lg"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-gradient-to-l from-orange-100 to-yellow-100 opacity-25 blur-xl"></div>
        
        {/* Small decorative elements */}
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-orange-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-yellow-300 rounded-full opacity-40 animate-bounce delay-300"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-orange-500 rounded-full opacity-70"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-24 right-24 w-16 h-16 border-2 border-yellow-300 rounded-lg rotate-12 opacity-25 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-orange-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/6 w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-300 transform rotate-45 opacity-35"></div>
        <div className="absolute bottom-1/2 right-1/4 w-10 h-10 border border-yellow-400 transform rotate-12 opacity-20"></div>
        
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

      {/* Jarak dari navbar yang fixed */}
      <section className="pt-28 md:pt-32 pb-6 relative z-10">
        {/* Floating badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-yellow-200 shadow-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Project Showcase</span>
          </div>
        </div>

        <h1 className="text-center text-4xl md:text-5xl font-extrabold">
          <span className="text-black">Web Application </span>
          <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent relative">
            HappyCare
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-75"></div>
          </span>
        </h1>
      </section>

      {/* Konten utama */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start pb-12 relative z-10">
        {/* Gambar besar dengan enhanced styling */}
        <div className="relative group">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          {/* Image container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-sm bg-white/10 p-2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={gallery[0]}
                alt="E-Commerce Platform"
                className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-400 rounded-lg rotate-45 opacity-70"></div>
          </div>
        </div>

        {/* Detail dengan enhanced styling */}
        <div className="relative">
          {/* Background card */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/80 shadow-xl"></div>
          
          <div className="relative p-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Project Description</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-base">
            HappyCare is a web application developed as a result of a major project involving four courses in the fourth semester.
            In this project, I served as the project manager. 
            Additionally, I contributed to analyzing user needs, addressing existing issues, and overseeing the design of the system being developed.
            </p>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-800">Key features:</h3>
              </div>
              <div className="space-y-3 ml-4">
                {[
                  "Login & Registration Form",
                  "Home Page", 
                  "Healthcare",
                  "Tourism Services",
                  "Ratting & Testimonials",
                  "Chatbot",
                  "Health Article"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-semibold text-gray-800">Tecnology</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {["laravel V.10", "Tailwind", "MySQL", "HTMl & CSS", "Bootstrap"].map((tech, index) => (
                  <span
                    key={tech}
                    className="group px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-700 border border-yellow-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
            {/* Tombol GitHub */}
            <a
              href="https://github.com/Yuliantikasari05/HappyCareFix"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-yellow-500 hover:to-orange-500 hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                />
              </svg>
              Github Project
            </a>

            {/* Tombol Website */}
            <a
              href="https://happycare.my.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Kunjungi Website
            </a>

            {/* Tombol Kembali */}
            <Link
              to="/"
              className="group inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Kembali
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Enhanced gallery section */}
      {gallery.length > 1 && (
        <section className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-yellow-200 shadow-lg mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Project Gallery</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">More Screenshots</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.slice(1).map((src, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm border border-white/80 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                
                <div className="relative p-2">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Decorative corner */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>
      )}

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
          animation: spin-slow 12s linear infinite;
        }
      `
      }} />
    </div>
  )
}