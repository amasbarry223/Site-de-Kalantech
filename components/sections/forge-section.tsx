'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'AI Crop Analysis',
    category: 'Intelligence Artificielle',
    description: 'Systeme de detection des maladies des cultures utilisant le deep learning et la vision par ordinateur.',
    tech: ['TensorFlow', 'Python', 'AWS', 'React'],
    status: 'COMPLETED',
  },
  {
    id: 2,
    title: 'Cloud Migration Platform',
    category: 'Cloud',
    description: 'Plateforme de migration automatisee vers le cloud avec monitoring en temps reel.',
    tech: ['Kubernetes', 'Terraform', 'GCP', 'Go'],
    status: 'COMPLETED',
  },
  {
    id: 3,
    title: 'Blockchain Supply Chain',
    category: 'Blockchain',
    description: 'Solution de tracabilite des produits agricoles basee sur la blockchain Ethereum.',
    tech: ['Solidity', 'Web3.js', 'Node.js', 'MongoDB'],
    status: 'IN PROGRESS',
  },
  {
    id: 4,
    title: 'Predictive Analytics Dashboard',
    category: 'Data Science',
    description: 'Tableau de bord analytique avec predictions basees sur le machine learning.',
    tech: ['Python', 'Scikit-learn', 'PostgreSQL', 'D3.js'],
    status: 'COMPLETED',
  },
]

export function ForgeSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="forge" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
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
              The Forge
            </span>
            <div className="w-12 h-px bg-[#CCFF00]" />
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6"
            style={{ fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif' }}
          >
            NOS <span className="text-[#CCFF00]">PROJETS</span>
          </h2>

          <p className="font-mono text-[#A9A9A9] max-w-2xl mx-auto text-sm md:text-base">
            {"Decouvrez les projets realises par nos apprenants et notre equipe d'experts."}
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
              data-interactive
            >
              <div 
                className={`border border-[#333333] p-6 md:p-8 transition-all duration-300 ${
                  hoveredProject === project.id 
                    ? 'border-[#CCFF00] bg-[#CCFF00]/5' 
                    : 'hover:border-[#A9A9A9]'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left side */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-mono text-xs text-[#CCFF00]">
                        [{String(index + 1).padStart(2, '0')}]
                      </span>
                      <span className="font-mono text-xs text-[#A9A9A9] uppercase border border-[#333333] px-2 py-1">
                        {project.category}
                      </span>
                      <span 
                        className={`font-mono text-xs px-2 py-1 ${
                          project.status === 'COMPLETED' 
                            ? 'text-[#CCFF00] border border-[#CCFF00]' 
                            : 'text-[#ff9900] border border-[#ff9900]'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 
                      className="text-xl md:text-2xl font-black text-white group-hover:text-[#CCFF00] transition-colors duration-300 mb-2"
                      style={{ fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif' }}
                    >
                      {project.title}
                    </h3>

                    <p className="font-mono text-sm text-[#A9A9A9]">
                      {project.description}
                    </p>
                  </div>

                  {/* Right side - Tech stack */}
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="font-mono text-xs text-[#A9A9A9] bg-[#1a1a1a] px-3 py-1 border border-[#333333]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress bar animation on hover */}
                <motion.div
                  className="h-px bg-[#CCFF00] mt-6"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredProject === project.id ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
