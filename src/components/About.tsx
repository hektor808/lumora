import { Building2, Heart, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const principles = [
  {
    icon: Heart,
    title: 'Human First',
    text: 'Lumora is planned around daily happiness, public trust, and places where people naturally meet.',
  },
  {
    icon: Building2,
    title: 'Nature in Architecture',
    text: 'Buildings are not walls against nature. They are living structures with gardens, light, water, and clean energy.',
  },
  {
    icon: ShieldCheck,
    title: 'Freedom with Safety',
    text: 'Citizens can walk, learn, create, and express themselves in public spaces that feel calm and protected.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About the city"
          title="A dream city built for people, not just buildings."
          description="Lumora is a fictional future city where progress does not mean losing nature, silence, culture, or kindness. It is designed to prove that a modern city can be intelligent and emotional at the same time."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
            <p className="text-lg leading-9 text-slate-200">
              In my imagination, Lumora is a place where technology is never cold or selfish.
              It helps students arrive at school safely, helps elderly people move comfortably,
              protects clean air, saves energy, and gives citizens more time for family,
              learning, sport, and art.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-300">
              The city has bright towers, but it also has quiet gardens. It has smart systems,
              but it also respects human feelings. Its streets are peaceful, its schools are
              creative, and its public spaces belong to everyone. Lumora is my answer to one
              question: what if the future became more human, not less?
            </p>
          </Reveal>

          <div className="grid gap-4">
            {principles.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] p-6 backdrop-blur-xl"
              >
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-emeraldGlow/25 bg-emeraldGlow/10 text-emeraldGlow">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
