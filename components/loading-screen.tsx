'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function LoadingScreen() {
  const [isMounted, setIsMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setIsMounted(true)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <div className="w-4 h-4 bg-[#CCFF00] rotate-45" />
              <span
                className="font-black text-3xl tracking-wider text-white"
                style={{ fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif' }}
              >
                KALAN<span className="text-[#CCFF00]">TECH</span>
              </span>
            </motion.div>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-[#1a1a1a] relative overflow-hidden">
              <motion.div
                className="h-full bg-[#CCFF00]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Progress text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 font-mono text-xs text-[#A9A9A9]"
            >
              <span className="text-[#CCFF00]">{'>'}</span> INITIALIZING SYSTEM... {Math.min(Math.round(progress), 100)}%
            </motion.div>

            {/* Loading messages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-2 font-mono text-xs text-[#333333]"
            >
              {progress < 30 && '> Loading modules...'}
              {progress >= 30 && progress < 60 && '> Establishing connection...'}
              {progress >= 60 && progress < 90 && '> Rendering interface...'}
              {progress >= 90 && '> System ready.'}
            </motion.div>
          </div>

          {/* Scanlines effect */}
          <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
