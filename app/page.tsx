'use client'

import dynamic from 'next/dynamic'
import { CustomCursor } from '@/components/custom-cursor'
import { Navigation } from '@/components/navigation'
import { LoadingScreen } from '@/components/loading-screen'
import { HeroSection } from '@/components/sections/hero-section'
import { LabSection } from '@/components/sections/lab-section'
import { VisionSection } from '@/components/sections/vision-section'
import { ForgeSection } from '@/components/sections/forge-section'
import { TerminalSection } from '@/components/sections/terminal-section'
import { Footer } from '@/components/footer'

// Dynamically import WebGL background to avoid SSR issues
const WebGLBackground = dynamic(
  () => import('@/components/webgl-background').then((mod) => mod.WebGLBackground),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navigation />
      
      <main className="relative">
        {/* WebGL Background */}
        <WebGLBackground />
        
        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
          <LabSection />
          <VisionSection />
          <ForgeSection />
          <TerminalSection />
        </div>
      </main>

      <Footer />
    </>
  )
}
