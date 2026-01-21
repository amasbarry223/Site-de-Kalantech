'use client'

import React from "react"

import { motion } from 'framer-motion'
import { useState } from 'react'

interface DataCardProps {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  index: number
}

export function DataCard({ title, description, features, icon, index }: DataCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      data-interactive
    >
      <motion.div
        className="relative glass border border-[#333333] p-6 md:p-8 h-full transition-all duration-300"
        style={{
          transform: isHovered ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg)' : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
        }}
        whileHover={{
          borderColor: '#CCFF00',
          boxShadow: '0 0 30px rgba(204, 255, 0, 0.2)',
        }}
      >
        {/* Card number */}
        <div className="absolute top-4 right-4 font-mono text-xs text-[#333333]">
          [{String(index + 1).padStart(2, '0')}]
        </div>

        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center border border-[#333333] mb-6 group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-all duration-300">
          <div className="text-[#A9A9A9] group-hover:text-[#CCFF00] transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 
          className="text-xl md:text-2xl font-black tracking-wide text-white group-hover:text-[#CCFF00] transition-colors duration-300 mb-3"
          style={{ fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="font-mono text-sm text-[#A9A9A9] mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 font-mono text-xs text-[#A9A9A9]">
              <span className="text-[#CCFF00]">{'>'}</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-[#CCFF00]"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
