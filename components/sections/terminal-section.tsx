'use client'

import React from "react"

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export function TerminalSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const terminalLines = [
    { text: '$ kalantech --init contact-protocol', delay: 0 },
    { text: 'Loading communication module...', delay: 0.2 },
    { text: '[OK] Protocol initialized', delay: 0.4 },
    { text: '$ Enter your data below:', delay: 0.6 },
  ]

  return (
    <section id="terminal" className="relative py-32 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, #CCFF00 25%, #CCFF00 26%, transparent 27%, transparent 74%, #CCFF00 75%, #CCFF00 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, #CCFF00 25%, #CCFF00 26%, transparent 27%, transparent 74%, #CCFF00 75%, #CCFF00 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section header */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#CCFF00]" />
              <span className="font-mono text-sm text-[#CCFF00] uppercase tracking-widest">
                Terminal
              </span>
              <div className="w-12 h-px bg-[#CCFF00]" />
            </div>

            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6"
              style={{ fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif' }}
            >
              CONTACTEZ<span className="text-[#CCFF00]">-</span>NOUS
            </h2>

            {/* Terminal window */}
            <div className="glass border border-[#333333] overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#333333] bg-[#0a0a0a]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-4 font-mono text-xs text-[#A9A9A9]">
                  kalantech@terminal:~
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: line.delay }}
                    className={`mb-2 ${line.text.includes('[OK]') ? 'text-[#CCFF00]' : 'text-[#A9A9A9]'}`}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[#333333]">
                  <svg className="w-5 h-5 text-[#CCFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-[#A9A9A9] mb-1">// Email</div>
                  <a href="mailto:service@kalantech.tech" className="text-white hover:text-[#CCFF00] transition-colors" data-interactive>
                    service@kalantech.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[#333333]">
                  <svg className="w-5 h-5 text-[#CCFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-[#A9A9A9] mb-1">// Adresse</div>
                  <div className="text-white">Medina Coura Rue 14<br />Bamako, Mali</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[#333333]">
                  <svg className="w-5 h-5 text-[#CCFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-[#A9A9A9] mb-1">// Telephone</div>
                  <a href="tel:+22373546243" className="text-white hover:text-[#CCFF00] transition-colors" data-interactive>
                    +223 73 54 62 43
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="relative">
                <label className="font-mono text-xs text-[#A9A9A9] mb-2 block">
                  <span className="text-[#CCFF00]">{'>'}_</span> ENTER.NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-transparent border-b-2 px-0 py-3 font-mono text-white placeholder:text-[#333333] focus:outline-none transition-colors duration-300 ${
                    focusedField === 'name' ? 'border-[#CCFF00]' : 'border-[#333333]'
                  }`}
                  placeholder="Votre nom..."
                  data-interactive
                />
              </div>

              {/* Email field */}
              <div className="relative">
                <label className="font-mono text-xs text-[#A9A9A9] mb-2 block">
                  <span className="text-[#CCFF00]">{'>'}_</span> ENTER.EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-transparent border-b-2 px-0 py-3 font-mono text-white placeholder:text-[#333333] focus:outline-none transition-colors duration-300 ${
                    focusedField === 'email' ? 'border-[#CCFF00]' : 'border-[#333333]'
                  }`}
                  placeholder="votre@email.com..."
                  data-interactive
                />
              </div>

              {/* Message field */}
              <div className="relative">
                <label className="font-mono text-xs text-[#A9A9A9] mb-2 block">
                  <span className="text-[#CCFF00]">{'>'}_</span> ENTER.MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-transparent border-b-2 px-0 py-3 font-mono text-white placeholder:text-[#333333] focus:outline-none resize-none transition-colors duration-300 ${
                    focusedField === 'message' ? 'border-[#CCFF00]' : 'border-[#333333]'
                  }`}
                  placeholder="Votre message..."
                  data-interactive
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`relative w-full border-2 border-[#CCFF00] py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-[#CCFF00]/20 text-[#CCFF00]' 
                    : 'text-[#CCFF00] hover:bg-[#CCFF00] hover:text-black'
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                data-interactive
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-pulse">EXECUTING</span>
                    <span className="font-mono">
                      {Array(3).fill(0).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 0.5, delay: i * 0.2, repeat: Infinity }}
                        >
                          {i % 2 === 0 ? '1' : '0'}
                        </motion.span>
                      ))}
                    </span>
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    MESSAGE SENT
                  </span>
                ) : (
                  'EXECUTE'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
