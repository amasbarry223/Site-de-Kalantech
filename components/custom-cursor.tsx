'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, [data-interactive]')
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseenter', () => setIsVisible(true))
    window.addEventListener('mouseleave', handleMouseLeave)

    // Initial setup for interactive elements
    handleMouseEnter()

    // Observer for dynamically added elements
    const observer = new MutationObserver(handleMouseEnter)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseenter', () => setIsVisible(true))
      window.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
    }
  }, [])

  if (!isMounted) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - (isHovering ? 25 : 10),
          y: position.y - (isHovering ? 25 : 10),
          scale: isHovering ? 1 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`rounded-full border-2 border-[#CCFF00] transition-all duration-200 ${isHovering ? 'w-[50px] h-[50px] bg-[#CCFF00]/20' : 'w-[20px] h-[20px]'
            }`}
          style={{
            boxShadow: isHovering
              ? '0 0 20px #CCFF00, 0 0 40px #CCFF00'
              : '0 0 10px #CCFF00',
          }}
        />
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 35,
        }}
      >
        <div className="w-[6px] h-[6px] rounded-full bg-[#CCFF00]" />
      </motion.div>
    </>
  )
}
