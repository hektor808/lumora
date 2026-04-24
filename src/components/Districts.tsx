import { districts } from '../data/cityData'
import { cn } from '../lib/cn'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const districtAccent = {
  cyan: 'from-cyanGlow/20 via-cyanGlow/5 text-cyanGlow',
  emerald: 'from-emeraldGlow/20 via-emeraldGlow/5 text-emeraldGlow',
  gold: 'from-auroraGold/20 via-auroraGold/5 text-auroraGold',
}

export function Districts() {
  return (
    <section id="districts" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Districts of Lumora"
          title="Six districts, each with a clear purpose and personality."
          description="Lumora feels real because every district has a role in the city’s balance: energy, nature, education, justice, culture, and peaceful water life."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {districts.map((district, index) => (
            <Reveal key={district.name} delay={index * 0.05}>
              <article className="group relative min-h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/35">
                <div
                  className={cn(
                    'absolute inset-x-0 top-0 h-36 bg-gradient-to-b to-transparent opacity-80 transition group-hover:opacity-100',
                    districtAccent[district.accent],
                  )}
                />
                <div className="relative">
                  <div className="mb-16 flex items-start justify-between">
                    <div
                      className={cn(
                        'grid h-14 w-14 place-items-center rounded-2xl border border-current/25 bg-current/10',
                        districtAccent[district.accent].split(' ').at(-1),
                      )}
                    >
                      <district.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                      District {index + 1}
                    </span>
                  </div>

                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                    {district.subtitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{district.name}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{district.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {district.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-semibold text-slate-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
