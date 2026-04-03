import Navbar from '../components/Navbar';
import ValuesSection from '../components/sections/ValuesSection';
import AboutSection from '../components/sections/AboutSection';
import FunnelSection from '../components/sections/FunnelSection';

const AboutPage = () => {
  return (
    <main className="relative">
      <Navbar />
      <ValuesSection />
      <AboutSection />
      <section id="process">
        <FunnelSection />
      </section>
    </main>
  );
};

export default AboutPage;
