"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-yellow-500" />,
      title: "Email",
      value: "yuliantikasari0526@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-yellow-500" />,
      title: "Phone",
      value: "085609162927"
    },
    {
      icon: <MapPin className="w-6 h-6 text-yellow-500" />,
      title: "Location",
      value: "Daerah Istimewa Yogyakarta, Jawa Tengah",
      link: "https://share.google/R15bLDzMXJMg7nvJe",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-white via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large abstract shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-bl from-yellow-200 to-orange-200 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-200 to-yellow-200 opacity-25 blur-2xl"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 opacity-40 blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/6 w-48 h-48 rounded-full bg-gradient-to-l from-yellow-200 to-orange-100 opacity-35 blur-lg"></div>
        
        {/* Small decorative dots */}
        <div className="absolute top-1/6 left-1/3 w-3 h-3 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-2/3 right-1/5 w-4 h-4 bg-orange-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-yellow-500 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-orange-300 rounded-full opacity-40 animate-bounce delay-300"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-yellow-300 rounded-lg rotate-12 opacity-30"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 border-2 border-orange-300 rounded-full opacity-25 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/6 w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-300 transform rotate-45 opacity-40"></div>
        
        {/* Abstract curved lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#contactGradient1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,500 Q400,300 800,500 T1600,500"
            stroke="url(#contactGradient2)"
            strokeWidth="1.5"
            fill="none"
          />
          <defs>
            <linearGradient id="contactGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FB923C" />
            </linearGradient>
            <linearGradient id="contactGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Wave pattern at bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-15" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,122.7C672,139,768,117,864,96C960,75,1056,53,1152,58.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#waveGradient)"/>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="50%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Floating badge above title */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-yellow-200 shadow-lg mb-6">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Let's Connect</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 relative">
              Touch
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="relative flex items-center space-x-4 p-6 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Gradient background overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Icon container with enhanced styling */}
              <div className="relative flex-shrink-0 p-3 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl group-hover:from-yellow-200 group-hover:to-orange-200 transition-all duration-300 transform group-hover:rotate-6 group-hover:scale-110">
                {info.icon}
              </div>
              
              <div className="relative flex-1">
                <h4 className="text-black font-semibold text-lg group-hover:text-yellow-600 transition-colors duration-300">
                  {info.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-base">
                  {info.value}
                </p>
              </div>
              
              {/* Arrow icon */}
              <div className="relative opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 animate-ping"></div>
            </a>
          ))}
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
          animation: spin-slow 8s linear infinite;
        }
      `
      }} />
    </section>
  )
}