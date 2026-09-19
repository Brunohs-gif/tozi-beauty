import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { AboutSection } from './components/sections/AboutSection'
import { ProceduresSection } from './components/sections/ProceduresSection'
import { BeforeAfterSection } from './components/sections/BeforeAfterSection'
import { HowItWorks } from './components/sections/HowItWorks'
import { ClinicianSection } from './components/sections/ClinicianSection'
import { Differentiators } from './components/sections/Differentiators'
import { Testimonials } from './components/sections/Testimonials'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { BookingForm } from './components/sections/BookingForm'

function App() {
  return (
    <div className="bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProceduresSection />
        <BeforeAfterSection />
        <HowItWorks />
        <ClinicianSection />
        <Differentiators />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
