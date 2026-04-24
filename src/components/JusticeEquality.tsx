import { equalityFeatures } from '../data/cityData'
import { FeatureCard } from './FeatureCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function JusticeEquality() {
  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Safety, justice, and equality"
          title="A beautiful city is not enough. It must also be fair."
          description="Lumora is designed with a mature idea: people can only dream freely when they feel respected, protected, and included."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-auroraGold/10 via-white/[0.055] to-cyanGlow/10 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
            <h3 className="font-display text-3xl font-semibold text-white">A city with dignity</h3>
            <p className="mt-5 text-lg leading-9 text-slate-300">
              In Lumora, public spaces are bright, open, and welcoming. Emergency systems respond
              quickly, but the city does not feel controlled or frightening. Citizens can ask for
              help at community support centers, and public services are designed for people of
              all ages and abilities.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-300">
              Equality is not only written in laws. It is visible in ramps, safe crossings, free
              libraries, accessible transport, anti-discrimination values, and opportunities for
              every person to learn and contribute.
            </p>
          </Reveal>

          <div className="grid gap-5">
            {equalityFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
