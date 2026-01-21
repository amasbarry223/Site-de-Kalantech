'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Apprenants formes' },
  { value: '12+', label: 'Formations disponibles' },
  { value: '95%', label: 'Taux de satisfaction' },
  { value: '50+', label: 'Projets realises' },
]

const features = [
  {
    title: 'Education accessible',
    description: 'Des formations pratiques basees sur des projets reels pour une experience immersive.',
  },
  {
    title: 'Experts certifies',
    description: 'Une equipe de formateurs experimentes et certifies dans leurs domaines respectifs.',
  },
  {
    title: 'Accompagnement personnalise',
    description: 'Un suivi individuel pour maximiser votre potentiel et atteindre vos objectifs.',
  },
  {
    title: 'Certifications reconnues',
    description: 'Des certifications valorisees sur le marche du travail national et international.',
  },
]

export function VisionSection() {
  return (
    <section id="vision" className="relative py-32 overflow-hidden">
      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #CCFF00 0, #CCFF00 1px, transparent 1px, transparent 50px)',
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
              The Vision
            </span>
            <div className="w-12 h-px bg-[#CCFF00]" />
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6"
            style={{ fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif' }}
          >
            QUI <span className="text-[#CCFF00]">SOMMES-NOUS ?</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass border border-[#333333] p-8 md:p-10">
              <p className="font-mono text-[#A9A9A9] leading-relaxed mb-8">
                <span className="text-[#CCFF00]">{'>'}</span> Kalantech est une startup dediee a combler le fosse des competences en IA et technologies Cloud. Fondee par une equipe d experts, nous sommes passionnes par l idee de former individus et entreprises avec des programmes pratiques.
              </p>
              <p className="font-mono text-[#A9A9A9] leading-relaxed">
                <span className="text-[#CCFF00]">{'>'}</span> Nous vous accompagnons a chaque etape de votre parcours d apprentissage, de la theorie a la mise en pratique, pour vous preparer aux defis du monde numerique d aujourd hui.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-[#CCFF00] pl-4 py-2"
                  >
                    <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="font-mono text-xs text-[#A9A9A9]">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group border border-[#333333] p-6 md:p-8 text-center hover:border-[#CCFF00] transition-colors duration-300"
                  data-interactive
                >
                  <div 
                    className="text-4xl md:text-5xl font-black text-[#CCFF00] mb-2"
                    style={{ fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-[#A9A9A9] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 border border-[#CCFF00] p-6 md:p-8"
            >
              <div className="font-mono text-xs text-[#CCFF00] mb-3 uppercase tracking-wider">
                // Notre Mission
              </div>
              <p 
                className="text-xl md:text-2xl font-black text-white leading-tight"
                style={{ fontFamily: 'var(--font-archivo), var(--font-syne), sans-serif' }}
              >
                {"DEMOCRATISER L'ACCES AUX TECHNOLOGIES DE DEMAIN EN AFRIQUE"}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
