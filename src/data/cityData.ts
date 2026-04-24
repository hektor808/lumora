import {
  Accessibility,
  Bike,
  BookOpen,
  Bus,
  CloudSun,
  Cpu,
  Droplets,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Landmark,
  Leaf,
  LibraryBig,
  Lightbulb,
  Music2,
  Palette,
  Recycle,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
  TrainFront,
  TreePine,
  Waves,
  Wind,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type FeatureCardData = {
  title: string
  description: string
  icon: LucideIcon
  accent: 'cyan' | 'emerald' | 'gold'
}

export type DistrictData = {
  name: string
  subtitle: string
  description: string
  features: string[]
  icon: LucideIcon
  accent: 'cyan' | 'emerald' | 'gold'
}

export type TimelineItem = {
  title: string
  detail: string
  icon: LucideIcon
}

export type StatData = {
  value: string
  label: string
  detail: string
  icon: LucideIcon
}

export type MapNodeData = {
  title: string
  system: string
  position: string
  accent: 'cyan' | 'emerald' | 'gold'
}

export const visionCards: FeatureCardData[] = [
  {
    title: 'Sustainability',
    description:
      'Lumora protects nature with renewable energy, clean air policies, green rooftops, and buildings that produce more energy than they use.',
    icon: Leaf,
    accent: 'emerald',
  },
  {
    title: 'Equality',
    description:
      'Every citizen has fair access to education, healthcare, culture, safe public spaces, and opportunities to build a meaningful life.',
    icon: Scale,
    accent: 'gold',
  },
  {
    title: 'Innovation',
    description:
      'Technology in Lumora is designed to serve people: it makes transport cleaner, learning smarter, and daily life easier without replacing human connection.',
    icon: Lightbulb,
    accent: 'cyan',
  },
  {
    title: 'Culture',
    description:
      'Art is not hidden inside museums only. Music, theatre, digital art, street performances, and festivals are part of everyday city life.',
    icon: Palette,
    accent: 'gold',
  },
  {
    title: 'Education',
    description:
      'Schools and libraries are the heart of Lumora, encouraging curiosity, debate, languages, science, creativity, and responsible citizenship.',
    icon: GraduationCap,
    accent: 'cyan',
  },
  {
    title: 'Peaceful Living',
    description:
      'The city is calm, safe, and walkable. It gives people room to breathe, meet, think, study, and enjoy their neighborhoods.',
    icon: HeartHandshake,
    accent: 'emerald',
  },
]

export const districts: DistrictData[] = [
  {
    name: 'Solara District',
    subtitle: 'Renewable energy and solar towers',
    description:
      'Solara is the bright power center of Lumora. Its elegant solar towers follow the sun during the day and store clean energy for the whole city at night.',
    features: ['Solar towers', 'Energy labs', 'Smart batteries'],
    icon: Sun,
    accent: 'gold',
  },
  {
    name: 'Verdant Garden',
    subtitle: 'Parks, forests, and vertical gardens',
    description:
      'Verdant Garden is a living green district where apartment walls bloom with plants, quiet paths run under trees, and every citizen is close to fresh air.',
    features: ['Urban forests', 'Vertical gardens', 'Quiet walking paths'],
    icon: TreePine,
    accent: 'emerald',
  },
  {
    name: 'Aurora Academy Zone',
    subtitle: 'Schools, libraries, and research centers',
    description:
      'Aurora Academy Zone is built for students and thinkers. Smart classrooms, open libraries, language studios, and science labs turn learning into a city-wide habit.',
    features: ['Smart classrooms', 'Free libraries', 'Research studios'],
    icon: BookOpen,
    accent: 'cyan',
  },
  {
    name: 'Civic Harmony Center',
    subtitle: 'Justice, equality, and community services',
    description:
      'This district gives citizens a voice. It includes transparent public offices, community support centers, accessible services, and peaceful places for discussion.',
    features: ['Community courts', 'Support centers', 'Public forums'],
    icon: Landmark,
    accent: 'gold',
  },
  {
    name: 'Artlight Quarter',
    subtitle: 'Museums, music, theatre, and digital art',
    description:
      'Artlight Quarter glows after sunset with concerts, exhibitions, theatre stages, and digital galleries where young artists can show their imagination.',
    features: ['Digital galleries', 'Music halls', 'Open-air theatre'],
    icon: Music2,
    accent: 'cyan',
  },
  {
    name: 'Blueway Harbor',
    subtitle: 'Water, clean transport, and peaceful public spaces',
    description:
      'Blueway Harbor is Lumora’s calm waterfront. Electric ferries, shaded bridges, clean canals, and wide public squares make the harbor both useful and peaceful.',
    features: ['Clean canals', 'Electric ferries', 'Waterfront plazas'],
    icon: Waves,
    accent: 'emerald',
  },
]

export const transportTimeline: TimelineItem[] = [
  {
    title: 'Electric Buses',
    detail:
      'Silent buses arrive often, use clean energy, and connect every neighborhood without traffic stress.',
    icon: Bus,
  },
  {
    title: 'Cycling Roads',
    detail:
      'Protected cycling lanes are wide, well-lit, and separated from cars so students and families feel safe.',
    icon: Bike,
  },
  {
    title: 'Autonomous Shuttles',
    detail:
      'Small clean shuttles help elderly and disabled citizens travel comfortably from door to door.',
    icon: Accessibility,
  },
  {
    title: 'Magnetic Trains',
    detail:
      'Quiet magnetic trains move quickly between districts without pollution, noise, or crowded streets.',
    icon: TrainFront,
  },
  {
    title: 'Pedestrian Priority',
    detail:
      'Streets are designed first for people, with shaded sidewalks, public seating, and safe crossings.',
    icon: Route,
  },
]

export const sustainabilityStats: StatData[] = [
  {
    value: '92%',
    label: 'Renewable Energy',
    detail: 'Solar towers, wind bridges, smart batteries, and shared energy grids power the city.',
    icon: Zap,
  },
  {
    value: '70%',
    label: 'Green Public Space',
    detail: 'Parks, rooftop gardens, forests, and planted streets make nature part of daily life.',
    icon: Sprout,
  },
  {
    value: '0',
    label: 'Fossil-Fuel Public Transport',
    detail: 'Buses, trains, ferries, and shuttles run on clean electric or magnetic systems.',
    icon: TrainFront,
  },
  {
    value: '24/7',
    label: 'Clean Air Monitoring',
    detail: 'Sensors measure air quality continuously and guide city decisions in real time.',
    icon: CloudSun,
  },
]

export const sustainabilitySystems: FeatureCardData[] = [
  {
    title: 'Solar and Wind Energy',
    description: 'Rooftops, towers, and bridge turbines collect clean energy from the sky.',
    icon: Wind,
    accent: 'cyan',
  },
  {
    title: 'Rainwater Collection',
    description: 'Rain is stored, cleaned, and reused for gardens, fountains, and city farms.',
    icon: Droplets,
    accent: 'emerald',
  },
  {
    title: 'Smart Recycling',
    description: 'Waste stations sort materials automatically and teach citizens how to reduce waste.',
    icon: Recycle,
    accent: 'gold',
  },
]

export const dailyLifeMoments: TimelineItem[] = [
  {
    title: 'Morning in Green Neighborhoods',
    detail:
      'The day begins with sunlight on rooftop gardens, quiet streets, and neighbors walking under trees instead of breathing traffic smoke.',
    icon: CloudSun,
  },
  {
    title: 'A Safe Journey to School',
    detail:
      'Students travel by electric bus, bicycle, or clean shuttle. Crossings are bright, vehicles are slow, and everyone can move independently.',
    icon: ShieldCheck,
  },
  {
    title: 'Learning with Purpose',
    detail:
      'In smart classrooms, students use technology to research, create, debate, and solve real problems in their city.',
    icon: GraduationCap,
  },
  {
    title: 'Evening Community Life',
    detail:
      'After school, parks and plazas fill with concerts, sports, family walks, and peaceful conversations under soft city lights.',
    icon: Sparkles,
  },
]

export const educationCulture: FeatureCardData[] = [
  {
    title: 'Multilingual Schools',
    description:
      'Students learn languages to understand the world and communicate with confidence.',
    icon: LibraryBig,
    accent: 'cyan',
  },
  {
    title: 'Science and Art Together',
    description:
      'Technology labs stand beside music rooms and art studios because creativity and knowledge belong together.',
    icon: Cpu,
    accent: 'emerald',
  },
  {
    title: 'Debate and Culture Festivals',
    description:
      'Students practice speaking, listening, and respecting different ideas through clubs and international festivals.',
    icon: Palette,
    accent: 'gold',
  },
]

export const equalityFeatures: FeatureCardData[] = [
  {
    title: 'Respect for Everyone',
    description:
      'People are valued regardless of background, age, disability, language, belief, or economic situation.',
    icon: HandHeart,
    accent: 'gold',
  },
  {
    title: 'Smart Emergency Systems',
    description:
      'Fast, connected safety systems protect public spaces while respecting privacy and human rights.',
    icon: ShieldCheck,
    accent: 'cyan',
  },
  {
    title: 'Accessible City Design',
    description:
      'Ramps, clear signs, quiet zones, safe crossings, and helpful transport make the city usable for all citizens.',
    icon: Accessibility,
    accent: 'emerald',
  },
]

export const mapNodes: MapNodeData[] = [
  {
    title: 'Energy Spine',
    system: 'Solar, wind, and battery storage',
    position: 'left-[9%] top-[22%]',
    accent: 'gold',
  },
  {
    title: 'Green Loop',
    system: 'Parks, gardens, farms, and clean air corridors',
    position: 'left-[31%] top-[13%]',
    accent: 'emerald',
  },
  {
    title: 'Learning Axis',
    system: 'Schools, libraries, labs, and debate halls',
    position: 'left-[57%] top-[23%]',
    accent: 'cyan',
  },
  {
    title: 'Civic Core',
    system: 'Justice, community support, and public services',
    position: 'left-[42%] top-[48%]',
    accent: 'gold',
  },
  {
    title: 'Culture Signal',
    system: 'Museums, theatre, music, and digital arts',
    position: 'left-[72%] top-[58%]',
    accent: 'cyan',
  },
  {
    title: 'Blueway Net',
    system: 'Clean water, ferries, bridges, and calm plazas',
    position: 'left-[18%] top-[67%]',
    accent: 'emerald',
  },
]

export const credits = [
  ['Prepared by', 'Bekir Ozan Demir'],
  ['School', 'TED Konya College'],
  ['Teacher', 'Merve Kılıçoğlu'],
  ['Topic', 'My Dream City'],
  ['City Name', 'Lumora'],
] as const
