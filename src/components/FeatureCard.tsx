import type { LucideIcon } from 'lucide-react'
import { cn } from '../lib/cn'

type FeatureCardProps = {
  title: string
  description: string
  icon: LucideIcon
  accent?: 'cyan' | 'emerald' | 'gold'
  className?: string
}

const accentStyles = {
  cyan: 'border-cyanGlow/25 bg-cyanGlow/10 text-cyanGlow shadow-glow',
  emerald: 'border-emeraldGlow/25 bg-emeraldGlow/10 text-emeraldGlow shadow-emerald',
  gold: 'border-auroraGold/25 bg-auroraGold/10 text-auroraGold',
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  accent = 'cyan',
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        'group rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/35 hover:bg-white/[0.08]',
        className,
      )}
    >
      <div
        className={cn(
          'mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border',
          accentStyles[accent],
        )}
      >
        <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
    </article>
  )
}
