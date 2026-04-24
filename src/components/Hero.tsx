import { ArrowDown, Compass, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Suspense, lazy } from 'react'

const CityScene = lazy(() =>
  import('./CityScene').then((module) => ({ default: module.CityScene })),
)

function CitySceneFallback() {
  return (
    <div className="grid h-[390px] w-full place-items-center rounded-[2rem] border border-cyanGlow/20 bg-cyanGlow/10 shadow-glow md:h-[540px]">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 rounded-full border border-cyanGlow/30 bg-cyanGlow/20 shadow-glow" />
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.24em] text-cyanGlow">
          Loading Lumora
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative isolate min-h-dvh overflow-hidden px-5 pb-16 pt-32 md:px-8 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(73,230,255,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(79,255,176,0.16),transparent_32%),linear-gradient(180deg,#04101f_0%,#07182b_62%,#04101f_100%)]" />
      <div className="absolute inset-0 -z-10 bg-radial-grid bg-[length:34px_34px] opacity-40" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-4 py-2 text-sm font-bold text-cyanGlow shadow-glow backdrop-blur">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Bekir Ozan Demir's Dream City
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] text-white md:text-7xl xl:text-8xl">
            Welcome to <span className="text-cyanGlow">Lumora</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-emeraldGlow md:text-2xl">
            The City Where Nature, Technology, and Human Dreams Live Together
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Lumora is a peaceful futuristic city imagined for people, not only for buildings.
            It combines clean energy, green architecture, safe neighborhoods, creative schools,
            public art, and smart technology that helps humanity live with more dignity.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#districts"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyanGlow px-6 py-3 font-bold text-midnight shadow-glow transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
            >
              <Compass className="h-5 w-5" aria-hidden="true" />
              Explore the City
            </a>
            <a
              href="#vision"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldGlow focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
            >
              View City Vision
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            {[
              ['6', 'Dream Districts'],
              ['92%', 'Clean Energy'],
              ['24/7', 'Safe Air'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl"
              >
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-5 -z-10 rounded-[3rem] bg-cyanGlow/10 blur-3xl" />
          <Suspense fallback={<CitySceneFallback />}>
            <CityScene />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
