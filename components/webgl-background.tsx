'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const { mouse } = useThree()

  const particlesCount = 5000
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    
    const time = state.clock.getElapsedTime()
    
    // Subtle rotation
    ref.current.rotation.x = time * 0.02
    ref.current.rotation.y = time * 0.03
    
    // Mouse interaction
    ref.current.rotation.x += mouse.y * 0.1
    ref.current.rotation.y += mouse.x * 0.1
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#CCFF00"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  )
}

function WireframeMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.getElapsedTime()
    
    meshRef.current.rotation.x = time * 0.1 + mouse.y * 0.3
    meshRef.current.rotation.y = time * 0.15 + mouse.x * 0.3
    
    // Pulsing scale
    const scale = 1 + Math.sin(time * 0.5) * 0.1
    meshRef.current.scale.setScalar(scale)
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial 
        color="#CCFF00" 
        wireframe 
        transparent 
        opacity={0.15}
      />
    </mesh>
  )
}

function GridPlane() {
  const gridRef = useRef<THREE.GridHelper>(null)

  useFrame((state) => {
    if (!gridRef.current) return
    const time = state.clock.getElapsedTime()
    gridRef.current.position.z = (time * 0.5) % 1
  })

  return (
    <group position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper 
        ref={gridRef}
        args={[30, 30, '#CCFF00', '#1a1a1a']} 
      />
    </group>
  )
}

export function WebGLBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 5, 25]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#CCFF00" />
        
        <ParticleField />
        <WireframeMesh />
        <GridPlane />
      </Canvas>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
    </div>
  )
}
