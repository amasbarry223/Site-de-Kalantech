'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  const handleScrollToLab = () => {
    document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="nexus" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-[#A9A9A9] border border-[#333333] px-4 py-2">
            <span className="w-2 h-2 bg-[#CCFF00] rounded-full animate-pulse" />
            SYSTEM.STATUS: OPERATIONAL
          </span>
        </motion.div>

        {/* Main Title with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <h1 
            ref={titleRef}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none ${
              glitchActive ? 'glitch-text' : ''
            }`}
            style={{ fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif' }}
          >
            <span className="block">KALANTECH</span>
            <span className="block text-[#CCFF00] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
              //
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 text-white">
              {"L'APPRENTISSAGE EN"}
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#CCFF00]">
              MODE ACCELERE
            </span>
          </h1>

          {/* Glitch layers */}
          {glitchActive && (
            <>
              <h1 
                className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#00ffff] opacity-70"
                style={{ 
                  transform: 'translate(-2px, 2px)',
                  clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
                  fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif'
                }}
              >
                <span className="block">KALANTECH</span>
              </h1>
              <h1 
                className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#ff0040] opacity-70"
                style={{ 
                  transform: 'translate(2px, -2px)',
                  clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
                  fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif'
                }}
              >
                <span className="block">KALANTECH</span>
              </h1>
            </>
          )}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-[#A9A9A9] font-mono text-sm md:text-base max-w-2xl mx-auto"
        >
          {"Devenez l'Architecte de l'Ere de l'Intelligence Artificielle et du Cloud."}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <button
            onClick={handleScrollToLab}
            className="group relative inline-flex items-center gap-3 border-2 border-[#CCFF00] px-8 py-4 font-mono text-sm uppercase tracking-widest text-[#CCFF00] transition-all duration-300 hover:bg-[#CCFF00] hover:text-black neon-glow"
            data-interactive
          >
            <span className="relative z-10">START EXPLORATION</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-[#A9A9A9]">SCROLL</span>
            <div className="w-px h-10 bg-gradient-to-b from-[#CCFF00] to-transparent" />
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 font-mono text-xs text-[#333333] hidden md:block">
          <div>{'// COORDINATES'}</div>
          <div className="text-[#CCFF00]">12.6392N, 8.0029W</div>
          <div>BAMAKO, MALI</div>
        </div>

        <div className="absolute top-20 right-10 font-mono text-xs text-[#333333] text-right hidden md:block">
          <div>{'// VERSION'}</div>
          <div className="text-[#CCFF00]">2.0.0</div>
          <div>BUILD.STABLE</div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#CCFF00]/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#CCFF00]/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#CCFF00]/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#CCFF00]/20" />
    </section>
  )
}
