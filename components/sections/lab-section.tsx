'use client'

import { motion } from 'framer-motion'
import { DataCard } from '@/components/data-card'

const formations = [
  {
    title: 'Intelligence Artificielle',
    description: 'Apprentissage automatique, traitement du langage naturel, et solutions IA innovantes.',
    features: ['Machine Learning', 'Deep Learning', 'NLP & Computer Vision', 'Projets pratiques'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Technologies Cloud',
    description: 'Infrastructure Cloud, DevOps, et services SaaS/PaaS/IaaS pour la transformation digitale.',
    features: ['GCP, AWS & Azure', 'Docker & Kubernetes', 'DevOps & CI/CD', 'Architecture Cloud'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 17.5a5 5 0 01-3.927-8.116 4 4 0 016.15-4.859A6 6 0 0120.5 9a4.5 4.5 0 01-.5 8.973" />
        <path d="M12 12v9M8 17l4 4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Data Science',
    description: 'Analyse des donnees, Big Data, visualisation des donnees et insights strategiques.',
    features: ['Python & R', 'Big Data Analytics', 'Data Visualization', 'Machine Learning'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
  },
  {
    title: 'Blockchain',
    description: 'Systemes distribues, smart contracts, crypto-actifs et tracabilite securisee.',
    features: ['Smart Contracts', 'DeFi & Web3', 'Cryptocurrency', 'DApps Development'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <path d="M10 6.5h4M17.5 10v4M10 17.5h4M6.5 10v4" />
      </svg>
    ),
  },
]

export function LabSection() {
  return (
    <section id="lab" className="relative py-32 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #CCFF00 1px, transparent 1px),
              linear-gradient(to bottom, #CCFF00 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#CCFF00]" />
            <span className="font-mono text-sm text-[#CCFF00] uppercase tracking-widest">
              The Lab
            </span>
            <div className="w-12 h-px bg-[#CCFF00]" />
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6"
            style={{ fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif' }}
          >
            NOS <span className="text-[#CCFF00]">FORMATIONS</span>
          </h2>

          <p className="font-mono text-[#A9A9A9] max-w-2xl mx-auto text-sm md:text-base">
            {"Explorez nos domaines d'expertise et decouvrez comment nous pouvons transformer votre carriere."}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {formations.map((formation, index) => (
            <DataCard
              key={formation.title}
              title={formation.title}
              description={formation.description}
              features={formation.features}
              icon={formation.icon}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#terminal"
            className="inline-flex items-center gap-3 border border-[#333333] px-8 py-4 font-mono text-sm uppercase tracking-wider text-[#A9A9A9] hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all duration-300"
            data-interactive
          >
            <span>DEMANDER UNE CONSULTATION</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
