import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import ValuesSection from '../components/sections/ValuesSection';
import FunnelSection from '../components/sections/FunnelSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProofSection from '../components/sections/ProofSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
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
