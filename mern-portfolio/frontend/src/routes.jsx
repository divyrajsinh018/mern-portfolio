import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects standalone={false} />
      <Contact />
    </>
  )
}

export default function AppRoutes() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <ScrollToTop />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects standalone />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
