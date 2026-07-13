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
import { useDocumentHead } from '../hooks/useDocumentHead'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '../lib/seo'

export function Home() {
  useDocumentHead({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: '/' })

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
