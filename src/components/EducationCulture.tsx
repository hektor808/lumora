import { educationCulture } from '../data/cityData'
import { FeatureCard } from './FeatureCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function EducationCulture() {
  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Education and culture"
            title="In Lumora, learning is a public treasure."
            description="Education is one of the strongest parts of the city because a dream city should help young people become thoughtful, brave, creative, and responsible."
          />
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 leading-8 text-slate-300 backdrop-blur-xl md:p-9">
            <p>
              Lumora has multilingual schools, free libraries, debate clubs, science centers,
              technology labs, music rooms, and international culture festivals. Students do not
              only memorize information. They ask questions, build projects, discuss global
              problems, and learn how to respect different opinions.
            </p>
            <p className="mt-5">
              Art and science are never separated. A student can design a clean-energy model in
              the morning, read literature in the afternoon, and perform music in a public square
              in the evening. This makes education feel connected to real life.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {educationCulture.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
