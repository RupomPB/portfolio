import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';

// Lazy load below-the-fold components for better initial bundle size
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content font-sans">
      {/* Global Premium Effects */}
      <ScrollProgress />
      
      <Navbar />
      
      <Hero />

      <Suspense fallback={
        <div className="min-h-[200px] flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-medium">
          Loading Content...
        </div>
      }>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
