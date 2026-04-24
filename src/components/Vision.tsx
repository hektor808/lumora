import { visionCards } from '../data/cityData'
import { FeatureCard } from './FeatureCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Vision() {
  return (
    <section id="vision" className="relative px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 top-1/3 -z-10 h-80 bg-[radial-gradient(circle,rgba(73,230,255,0.14),transparent_65%)]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="City vision"
          title="The philosophy of Lumora is simple: progress must protect life."
          description="The city is guided by six values that shape every street, school, park, building, and public decision."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visionCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <FeatureCard {...card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
