import { About } from './components/About'
import { Credits } from './components/Credits'
import { DailyLife } from './components/DailyLife'
import { Districts } from './components/Districts'
import { DreamCity } from './components/DreamCity'
import { EducationCulture } from './components/EducationCulture'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InteractiveMap } from './components/InteractiveMap'
import { JusticeEquality } from './components/JusticeEquality'
import { Navbar } from './components/Navbar'
import { Sustainability } from './components/Sustainability'
import { Transport } from './components/Transport'
import { Vision } from './components/Vision'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-midnight text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Districts />
        <Transport />
        <Sustainability />
        <DailyLife />
        <EducationCulture />
        <JusticeEquality />
        <InteractiveMap />
        <DreamCity />
        <Credits />
      </main>
      <Footer />
    </div>
  )
}

export default App
