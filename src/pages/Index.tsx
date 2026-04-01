import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import ValuesSection from '../components/sections/ValuesSection';
import FunnelSection from '../components/sections/FunnelSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProofSection from '../components/sections/ProofSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) {
      // Wait for React to fully render, then scroll to section
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
        // Nudge scroll by 60px after smooth scroll completes so RevealOnScroll
        // IntersectionObservers (which use margin: -50px) fire correctly
        setTimeout(() => window.scrollBy({ top: 60, behavior: 'smooth' }), 900);
      }, 300);
    }
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <section id="process">
        <FunnelSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <ProofSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
};

export default Index;
