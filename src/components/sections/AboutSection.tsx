import { motion } from 'framer-motion';
import { Shield, Users, Cog } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll';

const clientLogos = [
  { name: 'Vertex', initials: 'VX' },
  { name: 'Horizon', initials: 'HZ' },
  { name: 'Quantum', initials: 'QT' },
  { name: 'Nexus', initials: 'NX' },
  { name: 'Pulse', initials: 'PL' },
  { name: 'Apex', initials: 'AX' },
  { name: 'Zenith', initials: 'ZN' },
  { name: 'Vector', initials: 'VC' },
];

const pillars = [
  { icon: Shield, title: 'Brand Trust' },
  { icon: Users, title: 'Community Building' },
  { icon: Cog, title: 'Long-Term Marketing Systems' },
];

const AboutSection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main content */}
        <div className="max-w-4xl mx-auto mb-24">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
                Why Jinanshé
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                We aren't here to post content. <br />
                <span className="text-gradient">We're here to build your brand.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At Jinanshé, marketing is never random. Every campaign is rooted in clarity — your mission, your values, and your long-term vision.
              </p>
              <p>
                We work with established businesses that are tired of trend-chasing agencies and directionless content. Instead of dumping posts, we create systems, narratives, and identity-driven marketing that helps your audience recognize you, trust you, and stay connected.
              </p>
              <p className="text-foreground font-medium">
                We work with a limited number of clients each month to protect focus, consistency, and brand integrity.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Our Pillars */}
        <RevealOnScroll delay={0.2}>
          <div className="mb-24">
            <p className="text-center text-primary text-sm tracking-[0.3em] uppercase mb-12 font-medium">
              Our Pillars
            </p>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500 text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4"
                  >
                    <pillar.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Client logos infinite scroll */}
        <RevealOnScroll delay={0.3}>
          <div className="relative">
            <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-12">
              Trusted by Industry Leaders
            </p>

            {/* Gradient masks */}
            <div className="absolute left-0 top-12 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-12 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-12"
                animate={{ x: [0, '-50%'] }}
                transition={{
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Double the logos for seamless loop */}
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-32 h-16 rounded-lg border border-border/30 bg-card/30 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="font-display text-xl font-bold text-muted-foreground">
                      {client.initials}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;