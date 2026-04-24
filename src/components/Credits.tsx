import { credits } from '../data/cityData'
import { Reveal } from './Reveal'

export function Credits() {
  return (
    <section id="credits" className="px-5 py-24 md:px-8">
      <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/25 backdrop-blur-xl">
        <div className="border-b border-white/10 bg-gradient-to-r from-cyanGlow/15 via-emeraldGlow/10 to-auroraGold/15 p-7 text-center md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyanGlow">
            English Project
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">
            My Dream City
          </h2>
        </div>
        <dl className="divide-y divide-white/10">
          {credits.map(([label, value]) => (
            <div key={label} className="grid gap-1 px-6 py-5 sm:grid-cols-[12rem_1fr] sm:px-10">
              <dt className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">{label}</dt>
              <dd className="text-lg font-semibold text-white">{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
