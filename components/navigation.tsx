'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { href: '#nexus', label: 'THE NEXUS', description: 'Accueil' },
  { href: '#lab', label: 'THE LAB', description: 'Formations' },
  { href: '#vision', label: 'THE VISION', description: 'A propos' },
  { href: '#forge', label: 'THE FORGE', description: 'Projets' },
  { href: '#terminal', label: 'TERMINAL', description: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Fixed Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#nexus" className="group" data-interactive>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-3 h-3 bg-[#CCFF00] rotate-45" />
              <span className="font-bold text-xl tracking-wider text-white">
                KALAN<span className="text-[#CCFF00]">TECH</span>
              </span>
            </motion.div>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 w-12 h-12 flex items-center justify-center group"
            data-interactive
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <div className="flex flex-col gap-2">
              <motion.span
                className="block w-8 h-0.5 bg-[#CCFF00]"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-8 h-0.5 bg-[#CCFF00]"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-8 h-0.5 bg-[#CCFF00]"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex items-center justify-center"
          >
            {/* Scanlines Effect */}
            <div className="absolute inset-0 scanlines opacity-30" />
            
            {/* Terminal Background Effect */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-0 right-0 h-px bg-[#CCFF00]/10"
                  initial={{ y: -20 }}
                  animate={{ y: '100vh' }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{ top: `${i * 5}%` }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12 font-mono text-[#CCFF00] text-sm"
              >
                {'>'} SYSTEM.NAVIGATION.INIT()
              </motion.div>

              <ul className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="group block"
                      data-interactive
                    >
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-[#CCFF00] font-mono text-sm opacity-50">
                          [{String(index + 1).padStart(2, '0')}]
                        </span>
                        <span className="text-4xl md:text-6xl font-black tracking-wider text-white group-hover:text-[#CCFF00] transition-colors duration-300 glitch-text">
                          {link.label}
                        </span>
                      </div>
                      <span className="block font-mono text-[#A9A9A9] text-sm mt-1">
                        // {link.description}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-16 font-mono text-[#A9A9A9] text-xs"
              >
                <span className="text-[#CCFF00]">{'>'}_</span> PRESS ANY LINK TO CONTINUE
                <span className="blink">_</span>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
