import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { StatsBar } from '../components/StatsBar'
import { Services } from '../components/Services'
import { Approach } from '../components/Approach'
import { Founder } from '../components/Founder'
import { Team } from '../components/Team'
import { Testimonials } from '../components/Testimonials'
import { Insights } from '../components/Insights'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Approach />
        <Founder />
        <Team />
        <Testimonials />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
