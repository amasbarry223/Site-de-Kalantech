'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = [
  { href: '#nexus', label: 'THE NEXUS' },
  { href: '#lab', label: 'THE LAB' },
  { href: '#vision', label: 'THE VISION' },
  { href: '#forge', label: 'THE FORGE' },
  { href: '#terminal', label: 'TERMINAL' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-[#333333] bg-black">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#nexus" className="flex items-center gap-2 mb-4" data-interactive>
              <div className="w-3 h-3 bg-[#CCFF00] rotate-45" />
              <span className="font-bold text-xl tracking-wider text-white">
                KALAN<span className="text-[#CCFF00]">TECH</span>
              </span>
            </Link>
            <p className="font-mono text-sm text-[#A9A9A9] leading-relaxed">
              {"L'apprentissage en mode accelere. Formation en IA, Cloud, Data Science et Blockchain."}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest mb-4">
              // Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="font-mono text-sm text-[#A9A9A9] hover:text-[#CCFF00] transition-colors"
                    data-interactive
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Formations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest mb-4">
              // Formations
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="font-mono text-sm text-[#A9A9A9]">Intelligence Artificielle</span>
              </li>
              <li>
                <span className="font-mono text-sm text-[#A9A9A9]">Technologies Cloud</span>
              </li>
              <li>
                <span className="font-mono text-sm text-[#A9A9A9]">Data Science</span>
              </li>
              <li>
                <span className="font-mono text-sm text-[#A9A9A9]">Blockchain</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest mb-4">
              // Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:service@kalantech.tech"
                  className="font-mono text-sm text-[#A9A9A9] hover:text-[#CCFF00] transition-colors"
                  data-interactive
                >
                  service@kalantech.tech
                </a>
              </li>
              <li>
                <a 
                  href="tel:+22373546243"
                  className="font-mono text-sm text-[#A9A9A9] hover:text-[#CCFF00] transition-colors"
                  data-interactive
                >
                  +223 73 54 62 43
                </a>
              </li>
              <li>
                <span className="font-mono text-sm text-[#A9A9A9]">
                  Medina Coura Rue 14<br />Bamako, Mali
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-[#333333] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-xs text-[#A9A9A9]">
            &copy; {new Date().getFullYear()} KALANTECH. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-[#A9A9A9]">
              <span className="w-2 h-2 bg-[#CCFF00] rounded-full animate-pulse" />
              STATUS: ONLINE
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
