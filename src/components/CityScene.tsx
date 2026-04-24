import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera, Stars } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

const towers = [
  { position: [-1.9, 0, -0.7], scale: [0.34, 1.7, 0.34], color: '#49e6ff' },
  { position: [-1.05, 0, 0.26], scale: [0.42, 2.4, 0.42], color: '#4fffb0' },
  { position: [-0.14, 0, -0.32], scale: [0.52, 3.1, 0.52], color: '#f7cf72' },
  { position: [0.84, 0, 0.2], scale: [0.42, 2.15, 0.42], color: '#49e6ff' },
  { position: [1.68, 0, -0.62], scale: [0.35, 1.45, 0.35], color: '#4fffb0' },
  { position: [1.5, 0, 0.8], scale: [0.3, 1.1, 0.3], color: '#49e6ff' },
] as const

const transitLines = [
  { position: [0, 0.2, 0.95], scale: [4.1, 0.035, 0.035], color: '#49e6ff' },
  { position: [-0.5, 0.22, -1.02], scale: [2.8, 0.035, 0.035], color: '#4fffb0' },
  { position: [0.02, 0.24, -0.06], scale: [0.035, 0.035, 2.35], color: '#f7cf72' },
] as const

function LumoraIsland() {
  const cityRef = useRef<THREE.Group>(null)
  const ringRef = useRef<THREE.Group>(null)

  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, index) => {
        const angle = (index / 26) * Math.PI * 2
        const radius = 2.1 + (index % 4) * 0.2
        return {
          position: [
            Math.cos(angle) * radius,
            0.75 + (index % 5) * 0.16,
            Math.sin(angle) * radius,
          ] as [number, number, number],
          color: index % 3 === 0 ? '#f7cf72' : index % 2 === 0 ? '#4fffb0' : '#49e6ff',
        }
      }),
    [],
  )

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime()
    if (cityRef.current) {
      cityRef.current.rotation.y = Math.sin(elapsed * 0.18) * 0.08
      cityRef.current.position.y = Math.sin(elapsed * 0.7) * 0.05
    }
    if (ringRef.current) {
      ringRef.current.rotation.y = elapsed * 0.22
      ringRef.current.rotation.z = Math.sin(elapsed * 0.3) * 0.08
    }
  })

  return (
    <group ref={cityRef}>
      <mesh position={[0, -0.28, 0]}>
        <cylinderGeometry args={[2.85, 2.25, 0.48, 72]} />
        <meshStandardMaterial color="#0b2b3a" metalness={0.25} roughness={0.5} />
      </mesh>

      <mesh position={[0, -0.02, 0]}>
        <cylinderGeometry args={[2.55, 2.72, 0.12, 72]} />
        <meshStandardMaterial color="#103d43" emissive="#0d6657" emissiveIntensity={0.18} />
      </mesh>

      <mesh position={[-1.15, 0.08, 0.85]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.55, 36]} />
        <meshStandardMaterial color="#1c8c61" emissive="#4fffb0" emissiveIntensity={0.13} />
      </mesh>
      <mesh position={[1.18, 0.09, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.48, 36]} />
        <meshStandardMaterial color="#1c8c61" emissive="#4fffb0" emissiveIntensity={0.1} />
      </mesh>

      {transitLines.map((line) => (
        <mesh key={`${line.position.join('-')}-${line.color}`} position={line.position} scale={line.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={line.color}
            emissive={line.color}
            emissiveIntensity={0.65}
            toneMapped={false}
          />
        </mesh>
      ))}

      {towers.map((tower) => (
        <group key={`${tower.position.join('-')}-${tower.color}`} position={tower.position}>
          <mesh position={[0, tower.scale[1] / 2, 0]} scale={tower.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color="#102c40"
              emissive={tower.color}
              emissiveIntensity={0.16}
              metalness={0.5}
              roughness={0.28}
            />
          </mesh>
          <mesh position={[0, tower.scale[1] + 0.12, 0]}>
            <sphereGeometry args={[0.11, 18, 18]} />
            <meshStandardMaterial
              color={tower.color}
              emissive={tower.color}
              emissiveIntensity={1.7}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}

      <group ref={ringRef} position={[0, 1.2, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.75, 0.012, 12, 128]} />
          <meshStandardMaterial color="#49e6ff" emissive="#49e6ff" emissiveIntensity={1.1} toneMapped={false} />
        </mesh>
        <mesh rotation={[1.18, 0.3, 0.8]}>
          <torusGeometry args={[1.72, 0.01, 12, 96]} />
          <meshStandardMaterial color="#4fffb0" emissive="#4fffb0" emissiveIntensity={0.85} toneMapped={false} />
        </mesh>
      </group>

      {particles.map((particle, index) => (
        <Float key={`${particle.color}-${index}`} speed={1.5 + index * 0.02} floatIntensity={0.35}>
          <mesh position={particle.position}>
            <sphereGeometry args={[0.035, 10, 10]} />
            <meshStandardMaterial
              color={particle.color}
              emissive={particle.color}
              emissiveIntensity={1.4}
              toneMapped={false}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export function CityScene() {
  return (
    <div className="relative h-[390px] w-full overflow-hidden rounded-[2rem] border border-cyanGlow/20 bg-[#04101f]/50 shadow-glow md:h-[540px]">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 2.3, 6.2], fov: 42 }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 2.25, 6.2]} fov={42} />
          <color attach="background" args={['#04101f']} />
          <fog attach="fog" args={['#04101f', 7, 12]} />
          <ambientLight intensity={0.72} />
          <directionalLight position={[3, 4, 5]} intensity={2.3} />
          <pointLight position={[-3.5, 2.4, 3.5]} color="#49e6ff" intensity={14} />
          <pointLight position={[2.5, 2.5, -2.5]} color="#4fffb0" intensity={9} />
          <Stars radius={40} depth={20} count={500} factor={2.1} saturation={0} fade speed={0.45} />
          <Float speed={0.85} rotationIntensity={0.12} floatIntensity={0.18}>
            <LumoraIsland />
          </Float>
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0,transparent_34%,rgba(4,16,31,0.62)_73%)]" />
      <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyanGlow backdrop-blur-xl">
        Live City Model
      </div>
    </div>
  )
}
