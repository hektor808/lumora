import { sustainabilityStats, sustainabilitySystems } from '../data/cityData'
import { FeatureCard } from './FeatureCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Sustainability() {
  return (
    <section id="sustainability" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sustainability system"
          title="Lumora treats the environment as a responsibility, not a decoration."
          description="Energy, water, waste, farming, and air quality are connected through smart systems so the city can grow without harming the planet."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sustainabilityStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <article className="min-h-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emeraldGlow/30">
                <stat.icon className="h-8 w-8 text-emeraldGlow" aria-hidden="true" />
                <p className="mt-5 text-4xl font-black text-white md:text-5xl">{stat.value}</p>
                <h3 className="mt-2 text-lg font-semibold text-emeraldGlow">{stat.label}</h3>
                <p className="mt-3 leading-7 text-slate-300">{stat.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {sustainabilitySystems.map((system, index) => (
            <Reveal key={system.title} delay={index * 0.06}>
              <FeatureCard {...system} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
