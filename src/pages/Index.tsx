
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
