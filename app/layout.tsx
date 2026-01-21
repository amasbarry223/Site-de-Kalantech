import React from "react"
import type { Metadata, Viewport } from 'next'
import { Archivo_Black, IBM_Plex_Mono, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const archivoBlack = Archivo_Black({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo'
})

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800']
})

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-mono'
})

export const metadata: Metadata = {
  title: 'KALANTECH // L\'APPRENTISSAGE EN MODE ACCELERE',
  description: 'Devenez l\'Architecte de l\'Ere de l\'Intelligence Artificielle et du Cloud. Formation IA, Cloud, Data Science et Blockchain.',
  keywords: ['IA', 'Intelligence Artificielle', 'Cloud', 'Formation', 'Machine Learning', 'Deep Learning', 'DevOps', 'Blockchain', 'Kalantech', 'Mali'],
  authors: [{ name: 'Kalantech' }],
  openGraph: {
    title: 'KALANTECH // L\'APPRENTISSAGE EN MODE ACCELERE',
    description: 'Devenez l\'Architecte de l\'Ere de l\'Intelligence Artificielle et du Cloud.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${archivoBlack.variable} ${syne.variable} ${ibmPlexMono.variable} font-mono antialiased bg-black text-white overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
