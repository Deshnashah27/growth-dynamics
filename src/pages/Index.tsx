import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProofSection from '../components/sections/ProofSection';
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

      {/* Services — teaser cards linking to detail pages */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Proof — 3 headline stats */}
      <ProofSection />

      {/* About — teaser */}
      <section id="about" className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <RevealOnScroll>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The People Behind It
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
              About the Co-Founders
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Deshna Shah and Pavan Mundaware lead Jinanshé with a focus on brand strategy, creative direction, and long-term growth for businesses that think beyond trends.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              Meet the Founders <ArrowUpRight className="w-4 h-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Process — teaser */}
      <section id="process" className="relative py-20 md:py-28 overflow-hidden bg-card/30">
        <div className="container mx-auto px-6">
          <RevealOnScroll className="text-center mb-12">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Framework
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
              A Thoughtful Framework for{' '}
              <span className="text-gradient">Long-Term Brands</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { num: '01', label: 'Discovery' },
                { num: '02', label: 'Strategy' },
                { num: '03', label: 'Identity' },
                { num: '04', label: 'Execution' },
                { num: '05', label: 'Optimisation' },
              ].map((step, i, arr) => (
                <div key={step.num} className="flex items-center gap-3">
                  <div className="px-5 py-2.5 rounded-full bg-card border border-border/50 text-sm font-medium">
                    <span className="text-primary mr-2">{step.num}</span>
                    {step.label}
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-border hidden sm:block">→</span>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/about#process"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
              >
                See Our Process <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
};

export default Index;
