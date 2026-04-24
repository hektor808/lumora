import { useState } from 'react'
import { mapNodes } from '../data/cityData'
import { cn } from '../lib/cn'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const nodeAccent = {
  cyan: 'border-cyanGlow bg-cyanGlow text-cyanGlow shadow-glow',
  emerald: 'border-emeraldGlow bg-emeraldGlow text-emeraldGlow shadow-emerald',
  gold: 'border-auroraGold bg-auroraGold text-auroraGold shadow-[0_0_34px_rgba(247,207,114,0.2)]',
}

export function InteractiveMap() {
  const [active, setActive] = useState(0)
  const activeNode = mapNodes[active]

  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Interactive city map"
          title="Lumora’s systems work like a living control panel."
          description="Hover or focus the glowing nodes to see how the districts connect energy, nature, learning, culture, justice, and water into one balanced city."
        />

        <Reveal className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/25 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[430px] overflow-hidden border-b border-white/10 bg-[#061526] lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-radial-grid bg-[length:42px_42px] opacity-40" />
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="map-line" x1="0" x2="1">
                  <stop stopColor="#49e6ff" stopOpacity="0.65" />
                  <stop offset="1" stopColor="#4fffb0" stopOpacity="0.45" />
                </linearGradient>
              </defs>
              <path
                d="M 70 120 C 200 40, 330 80, 450 150 S 670 260, 820 210"
                fill="none"
                stroke="url(#map-line)"
                strokeWidth="2"
                strokeDasharray="8 10"
              />
              <path
                d="M 120 330 C 280 250, 410 250, 520 300 S 690 360, 790 250"
                fill="none"
                stroke="url(#map-line)"
                strokeWidth="2"
                strokeDasharray="6 12"
              />
            </svg>

            {mapNodes.map((node, index) => (
              <button
                key={node.title}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={cn(
                  'absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-midnight',
                  node.position,
                  nodeAccent[node.accent],
                  active === index ? 'scale-150' : 'scale-100',
                )}
                aria-label={`Show ${node.title}`}
              >
                <span className="absolute inset-[-14px] rounded-full border border-current/40" />
              </button>
            ))}

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-midnight/74 p-5 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyanGlow">
                Active system
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{activeNode.title}</h3>
              <p className="mt-2 leading-7 text-slate-300">{activeNode.system}</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid gap-3">
              {mapNodes.map((node, index) => (
                <button
                  key={node.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    'rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow',
                    active === index
                      ? 'border-cyanGlow/35 bg-cyanGlow/10'
                      : 'border-white/10 bg-white/[0.04] hover:bg-white/[0.075]',
                  )}
                >
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                    Node {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{node.title}</h3>
                  <p className="mt-1 leading-6 text-slate-300">{node.system}</p>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
