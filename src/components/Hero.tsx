"use client"

import React, { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero(): React.ReactElement {
  const [text, setText] = useState<string>("")
  const fullText = "UI/UX Designer & System Analyst"
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, index + 1))
        setIndex((i) => i + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  // Fungsi scroll ke contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative flex flex-col md:flex-row items-center px-6 md:px-16 py-20 bg-gradient-to-br from-white via-yellow-50 to-orange-50 overflow-hidden min-h-screen" id="home">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large abstract shape - top left */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 opacity-30 blur-3xl"></div>
        
        {/* Medium abstract shape - top right */}
        <div className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-bl from-orange-200 to-yellow-200 opacity-40 blur-2xl"></div>
        
        {/* Small floating dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/6 w-4 h-4 bg-yellow-300 rounded-full opacity-50"></div>
        
        {/* Geometric shapes */}
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-yellow-400 rounded-lg rotate-45 opacity-30"></div>
        <div className="absolute top-40 left-20 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-40"></div>
        
        {/* Wave pattern */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,122.7C672,139,768,117,864,96C960,75,1056,53,1152,58.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#FEF3C7"/>
        </svg>
      </div>

      {/* Kiri: Text */}
      <div className="flex-1 text-center md:text-left z-10 relative">
        {/* Floating badge */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Hi! I'm <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600">
            Yuli Antika Sari
          </span>
        </h1>

        <div className="text-2xl md:text-4xl text-gray-700 mb-8 h-12 flex items-center justify-center md:justify-start">
          <span className="border-r-2 border-yellow-500 pr-1 animate-pulse font-medium">
            {text}
          </span>
        </div>

        <p className="text-gray-600 mb-8 max-w-xl text-lg leading-relaxed">
        I am a UI/UX Designer & System Analyst who combines design creativity with system analysis to create functional, 
        aesthetic, and user-centric digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
          {/* Tombol Download CV */}
          <a
            href="/cv.pdf"
            download="cv.pdf"
            className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
            Download CV
          </a>

          {/* Tombol Contact Me */}
          <button
            onClick={handleScrollToContact}
            className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Contact Me
          </button>
        </div>

        {/* Social Icons dengan background dan animasi */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/Yuliantikasari05?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-900"
          >
            <Github size={28} className="text-gray-700 group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/yuli-antikasari-9193a337a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-600"
          >
            <Linkedin size={28} className="text-gray-700 group-hover:text-white transition-colors" />
          </a>

          <a
            href="yuliantikasari0526@gmail.com"
            className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-yellow-500"
          >
            <Mail size={28} className="text-gray-700 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Kanan: Foto + Shape */}
      <div className="flex-1 relative mt-10 md:mt-0 flex justify-center z-10">
        {/* Enhanced Shape SVG dengan multiple layers */}
        <div className="relative">
          {/* Background shape 1 */}
          <svg
            className="absolute w-[550px] h-[550px] -z-10 animate-pulse"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#FEF3C7", stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: "#FDE68A", stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: "#F59E0B", stopOpacity: 0.7 }} />
              </linearGradient>
            </defs>
            <path
              d="M421.5,314.5Q376,379,314.5,422Q253,465,172.5,428Q92,391,72.5,320.5Q53,250,73.5,178.5Q94,107,166.5,87.5Q239,68,309.5,87.5Q380,107,424.5,178.5Q469,250,421.5,314.5Z"
              fill="url(#grad1)"
            />
          </svg>

          {/* Background shape 2 - slightly offset */}
          <svg
            className="absolute w-[500px] h-[500px] -z-10 top-5 left-5"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#FFEDD5", stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: "#FB923C", stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
            <path
              d="M380,320Q350,380,290,400Q230,420,170,390Q110,360,90,300Q70,240,100,180Q130,120,190,110Q250,100,310,120Q370,140,390,200Q410,260,380,320Z"
              fill="url(#grad2)"
            />
          </svg>

          {/* Decorative elements around photo */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
          <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-orange-400 rounded-lg rotate-45 opacity-70"></div>
          <div className="absolute top-1/2 -right-8 w-6 h-6 border-2 border-yellow-500 rounded-full opacity-60"></div>

          {/* Foto dengan enhanced styling */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-[60px] blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img
              src="/me1.png"
              alt="Profile"
              className="relative w-[350px] h-[420px] object-cover rounded-[60px] shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}