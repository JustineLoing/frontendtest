import { useState, useEffect, useRef } from 'react'
import Lenis from 'lenis'

import SpotifyPlayer from './components/SpotifyPlayer.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import SideIndicators from './components/SideIndicators.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import SocialSection from './components/SocialSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const lenisRef = useRef(null)

  // Lenis & Scroll Viewport Transitions Setup
  useEffect(() => {
    // Initialize Lenis for buttery cinematic smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    let animationFrameId
    function raf(time) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }
    animationFrameId = requestAnimationFrame(raf)

    // IntersectionObserver for cinematic in-view transitions
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            const sectionId = entry.target.closest('section')?.id
            if (sectionId) {
              setActiveSection(sectionId)
            }
          }
        })
      },
      { threshold: 0.25 }
    )

    const panels = document.querySelectorAll('.glass-panel')
    panels.forEach((panel) => observer.observe(panel))

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
      panels.forEach((panel) => observer.unobserve(panel))
    }
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (lenisRef.current && el) {
      lenisRef.current.scrollTo(el, {
        duration: 1.2,
        offset: 0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white font-sans antialiased selection:bg-white/20 selection:text-white">
      {/* Background Anime Scene Layer with High Quality Blur & Dark Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=2160&q=85"
          alt="Anime Scene Background"
          className="w-full h-full object-cover filter blur-xl scale-110 brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/50 to-slate-950/80 backdrop-blur-[2px]" />

        {/* Ambient Light Highlights */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-white/5 blur-[140px] rounded-full" />
      </div>

      {/* Fixed UI Overlays */}
      <SpotifyPlayer />
      <NavigationBar activeSection={activeSection} scrollToSection={scrollToSection} />
      <SideIndicators activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Content Wrapper */}
      <main className="relative z-10 w-full flex flex-col items-center pb-24 sm:pb-28">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <SocialSection />
      </main>

      {/* Fixed Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
