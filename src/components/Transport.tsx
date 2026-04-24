import { transportTimeline } from '../data/cityData'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Transport() {
  return (
    <section id="transport" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Smart transportation"
          title="Movement in Lumora is clean, quiet, safe, and accessible."
          description="The city avoids traffic chaos by giving priority to public transport, cycling, walking, and intelligent systems that include elderly and disabled citizens."
        />

        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
          <div className="absolute left-10 top-12 hidden h-[calc(100%-6rem)] w-px bg-gradient-to-b from-cyanGlow via-emeraldGlow to-auroraGold md:block" />
          <div className="grid gap-5">
            {transportTimeline.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="relative grid gap-4 rounded-3xl border border-white/10 bg-midnight/45 p-5 transition hover:border-cyanGlow/30 hover:bg-white/[0.07] md:grid-cols-[4rem_1fr] md:p-6">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyanGlow/30 bg-cyanGlow/10 text-cyanGlow shadow-glow">
                    <item.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-emeraldGlow">
                      Route {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{item.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
