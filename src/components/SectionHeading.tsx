import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={
        align === 'center'
          ? 'mx-auto mb-10 max-w-3xl text-center md:mb-14'
          : 'mb-10 max-w-3xl md:mb-14'
      }
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyanGlow">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{description}</p>
    </Reveal>
  )
}
