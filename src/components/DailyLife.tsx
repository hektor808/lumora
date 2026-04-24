import { dailyLifeMoments } from '../data/cityData'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function DailyLife() {
  return (
    <section id="life" className="relative px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 top-20 -z-10 h-96 bg-[radial-gradient(circle,rgba(247,207,114,0.12),transparent_64%)]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Daily life in Lumora"
          title="A normal day feels calm, creative, and full of possibility."
          description="Lumora is impressive because of its technology, but it becomes meaningful through ordinary human moments: going to school, meeting friends, enjoying parks, and returning home safely."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {dailyLifeMoments.map((moment, index) => (
            <Reveal key={moment.title} delay={index * 0.07}>
              <article className="min-h-full rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-auroraGold/25 bg-auroraGold/10 text-auroraGold">
                    <moment.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="font-display text-3xl text-white/20">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{moment.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{moment.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyanGlow/10 via-white/[0.055] to-emeraldGlow/10 p-7 text-center backdrop-blur-xl md:p-10">
          <p className="mx-auto max-w-4xl text-xl leading-9 text-slate-200">
            At night, Lumora does not become noisy or frightening. Its lights are soft, its
            transport remains safe, and families can walk beside clean water while music comes
            from public squares. The city feels alive, but never overwhelming.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
