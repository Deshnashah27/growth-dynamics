import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProofSection from '../components/sections/ProofSection';
import ValuesSection from '../components/sections/ValuesSection';
import FunnelSection from '../components/sections/FunnelSection';
import ContactSection from '../components/sections/ContactSection';
import RevealOnScroll from '../components/RevealOnScroll';
import { scrollToSection } from '../lib/scrollToSection';

const Index = () => {
  const location = useLocation();

  // Scroll to section when hash changes (handles both initial load and in-page nav)
  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const sectionId = hash.slice(1);
    // Wait for React to render, then scroll with navbar offset
    const timer = setTimeout(() => scrollToSection(sectionId), 300);
    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <main className="relative">
      <Navbar />

      <HeroSection />

      {/* Services — cards linking to detail pages */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Proof — 6 stats */}
      <ProofSection />

      {/* Philosophy / Values */}
      <ValuesSection />

      {/* About — Mission teaser */}
      <section id="about" className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <RevealOnScroll>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Our Mission
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-8">
              To turn our clients' missions<br />
              <span className="text-gradient">into real impact.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              At Jinanshé, we believe marketing is not about noise or trends — it is about clarity, consistency, and connection.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              Know More About Us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Process — full FunnelSection */}
      <section id="process">
        <FunnelSection />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
};

export default Index;
