"use client"

import React, { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Organization() {
  const orgScrollRef = useRef<HTMLDivElement | null>(null)
  const certScrollRef = useRef<HTMLDivElement | null>(null)

  const [activePhoto, setActivePhoto] = useState<number[]>([])

  const scroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    const el = ref.current
    if (!el) return
    const { scrollLeft, clientWidth } = el
    const scrollAmount = Math.max(280, clientWidth - 120)
    el.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    })
  }

        const organizations = [
            {
            role: "Chairperson of MAKRAB New Students '24 TI",
            org: "ITECH Student Association",
            period: "December 20 - 21, 2024",
            description:
                "Supervised the entire event series, coordinated all committees, and ensured the safety of all MAKRAB participants.",
            photos: ["/makrab1.jpg", "/makrab2.jpg"],
            },
            {
            role: "Head of Consumption Division - Techofest Arena",
            org: "ITECH Student Association",
            period: "December 07 - 08, 2024",
            description:
                "Responsible for managing the consumption of invited guests, participants, and committees until the event was completed.",
            photos: ["/tekno1.jpg", "/tekno2.jpg"],
            },
            {
            role: "Head of Public Relations - CTRL+N",
            org: "ITECH Student Association",
            period: "September 30, 2024",
            description:
                "Responsible for coordinating participants and speakers during the consolidation and discussion event.",
            photos: ["/konsol1.jpg"],
            },
            {
            role: "Head of Event Division - TI Study Orientation",
            org: "ITECH Student Association",
            period: "September 19, 2024",
            description:
                "Responsible for designing the overall event concept and coordinating it with other divisions.",
            photos: ["/mataf1.jpg", "/mataf2.jpg", "/mataf3.jpg", "/mataf4.jpg"],
            },
            {
            role: "Member of Consumption Division - 7th Anniversary of PSTI",
            org: "ITECH Student Association",
            period: "July 26, 2024",
            description:
                "Responsible for ensuring the consumption for invited guests, participants, and committees was well provided.",
            photos: ["/milad1.jpg", "/milad2.jpg", "/milad3.jpg"],
            },
            {
            role: "Secretary - ITECH x HIMANIKA UNY Comparative Study",
            org: "ITECH Student Association",
            period: "May 26, 2024",
            description:
                "Responsible for all reports and official correspondence.",
            photos: ["/stuban1.jpg", "/stuban2.jpg", "/stuban3.jpg", "/stuban4.jpg"],
            },
            {
            role: "Treasurer - Terabit#2 PSTI",
            org: "ITECH Student Association",
            period: "March 30, 2024",
            description:
                "Responsible for managing all financial matters to ensure the success of the event.",
            photos: ["/terabit1.jpg", "/terabit2.jpg", "/terabit3.jpg"],
            },
        ]  

  const certificates = [
    "/makrab.jpg",
    "/tekno.jpg",
    "/konsoll.jpg",
    "/mataff.jpg",
    "/milad.jpg",
    "/stuban.jpg",
    "/terabit.jpg",
  ]

  const changePhoto = (orgIndex: number, direction: "left" | "right") => {
    const photos = organizations[orgIndex].photos
    if (!photos || photos.length === 0) return
    setActivePhoto((prev) => {
      const newState = [...prev]
      const current = prev[orgIndex] || 0
      if (direction === "left") {
        newState[orgIndex] = (current - 1 + photos.length) % photos.length
      } else {
        newState[orgIndex] = (current + 1) % photos.length
      }
      return newState
    })
  }

  return (
    <section
      id="organization"
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
            stroke="url(#orgGradient1)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0,600 Q400,450 800,600 T1600,600"
            stroke="url(#orgGradient2)"
            strokeWidth="1"
            fill="none"
          />
          <defs>
            <linearGradient id="orgGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FB923C" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="orgGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Title */}
        <div className="text-center mb-16">
          {/* Floating badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-yellow-200 shadow-lg mb-6">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Experience & Achievement</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              Organization
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Some of my organizational experiences and leadership roles
          </p>
        </div>

        {/* Enhanced Carousel Organization */}
        <div className="relative mb-20">
          {/* Enhanced navigation buttons */}
          <button
            onClick={() => scroll(orgScrollRef, "left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-yellow-200"
          >
            <ChevronLeft size={24} className="text-yellow-600" />
          </button>

          <div
            ref={orgScrollRef}
            className="
              flex space-x-6 overflow-x-auto scroll-smooth
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              pr-4 pl-12
            "
          >
            {organizations.map((org, i) => {
              const currentIndex = activePhoto[i] || 0
              return (
                <div
                  key={i}
                  className="group flex-shrink-0 w-[320px] h-[480px] flex flex-col justify-between
                             rounded-2xl bg-white/70 backdrop-blur-sm border border-yellow-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden"
                >
                  {/* Card decorative elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-yellow-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>

                  <div className="relative z-10">
                    {/* Header with enhanced styling */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                          {org.role}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-yellow-700 ml-4">{org.org}</p>
                      <div className="flex items-center ml-4 mt-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                        <p className="text-sm text-gray-500">{org.period}</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/50 rounded-xl p-3 mb-4 border border-yellow-100">
                      <p className="text-gray-600 text-sm leading-relaxed">{org.description}</p>
                    </div>
                  </div>

                  {/* Enhanced photo slider */}
                  {org.photos && org.photos.length > 0 && (
                    <div className="relative mt-auto z-10">
                      <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-white/50">
                        <img
                          src={org.photos[currentIndex]}
                          alt={`Dokumentasi ${org.role}`}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {org.photos.length > 1 && (
                          <>
                            <button
                              onClick={() => changePhoto(i, "left")}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-yellow-100 transition-all duration-200 transform hover:scale-110"
                            >
                              <ChevronLeft size={16} className="text-yellow-600" />
                            </button>
                            <button
                              onClick={() => changePhoto(i, "right")}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-yellow-100 transition-all duration-200 transform hover:scale-110"
                            >
                              <ChevronRight size={16} className="text-yellow-600" />
                            </button>
                          </>
                        )}
                      </div>

                      {org.photos.length > 1 && (
                        <div className="flex justify-center space-x-2 mt-3">
                          {org.photos.map((_, j) => (
                            <button
                              key={j}
                              onClick={() => setActivePhoto(prev => {
                                const newState = [...prev]
                                newState[i] = j
                                return newState
                              })}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                j === currentIndex 
                                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 scale-110" 
                                  : "bg-gray-300 hover:bg-yellow-300"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <button
            onClick={() => scroll(orgScrollRef, "right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-yellow-200"
          >
            <ChevronRight size={24} className="text-yellow-600" />
          </button>
        </div>

        {/* Enhanced Certificates Section */}
        <div className="text-center mb-12">
          {/* Floating badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-yellow-200 shadow-lg mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Certifications</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              Certificates
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
          Certification in participating in organizational activities that I have obtained
          </p>
        </div>

        <div className="relative">
          {/* Enhanced navigation buttons */}
          <button
            onClick={() => scroll(certScrollRef, "left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-yellow-200"
          >
            <ChevronLeft size={24} className="text-yellow-600" />
          </button>

          <div
            ref={certScrollRef}
            className="
              flex space-x-6 overflow-x-auto scroll-smooth
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              pr-4 pl-12
            "
          >
            {certificates.map((src, i) => (
              <div
                key={i}
                className="group flex-shrink-0 w-[300px] h-[200px] rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm border border-yellow-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] relative"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                
                <div className="relative p-2 h-full">
                  <div className="rounded-xl overflow-hidden h-full shadow-md">
                    <img 
                      src={src} 
                      alt={`Sertifikat ${i + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Decorative corner */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(certScrollRef, "right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-yellow-200"
          >
            <ChevronRight size={24} className="text-yellow-600" />
          </button>
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