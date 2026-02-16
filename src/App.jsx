import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content font-sans cursor-none"> {/* Hide default cursor here if desired, or let CustomCursor hande it via CSS override if needed */}
       {/* Global Premium Effects */}
      <CustomCursor />
      <ScrollProgress />
      
      <Navbar />
      
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
