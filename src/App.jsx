
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ReactLenis } from 'lenis/react'
import Lenis from '@studio-freight/lenis'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// register Gsap
gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Components
 */
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useGSAP } from '@gsap/react'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,  // Animation duration in ms
      easing: 'ease-out-cubic', // Type of easing
      once: true,     // Animate only once
      offset: 100,    // Trigger point from the bottom of the screen
    })
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    })

    // Animation frame loop for Lenis
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Handle anchor links like <a href="#about">
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        const target = document.querySelector(link.getAttribute('href'))
        if (target) {
          lenis.scrollTo(target, { offset: -70 }) // adjust offset if you have a navbar
        }
      })
    })

    // Cleanup when component unmounts
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => { })
      })
    }
  }, [])

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')


    elements.forEach(element => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: '-200 bottom',
          end: 'bottom 80%'
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',

      })
    });

  })

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App

