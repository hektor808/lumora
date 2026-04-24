import { Quote } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function DreamCity() {
  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Personal reflection"
          title="Why Lumora is my dream city"
          description="This final reflection explains the idea in Bekir Ozan Demir's voice: a dream city should be beautiful, but it should also be fair, peaceful, and meaningful."
        />

        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] via-white/[0.05] to-emeraldGlow/10 p-7 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-10">
          <Quote className="absolute right-8 top-8 h-20 w-20 text-cyanGlow/10" aria-hidden="true" />
          <div className="relative space-y-5 text-lg leading-9 text-slate-200">
            <p>
              Lumora is my dream city because I want to live in a place where people feel safe,
              respected, and hopeful. In my opinion, the future should not only be faster or more
              technological. It should also be kinder.
            </p>
            <p>
              I want technology to help humanity. It should protect nature, make education better,
              support justice, and give people more freedom in their daily lives. I also want a
              city where nature is not destroyed for progress, but protected as an important part
              of progress.
            </p>
            <p>
              In Lumora, education and justice are available for everyone. Public spaces are safe,
              transportation is clean, and citizens can enjoy art, culture, and community life.
              For me, a dream city is not only beautiful. It is a place where people can build a
              better life together.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
