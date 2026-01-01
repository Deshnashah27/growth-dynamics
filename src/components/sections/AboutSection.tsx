import { motion } from 'framer-motion';
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

const AboutSection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Editorial layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Mission */}
          <RevealOnScroll>
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
                Our Mission
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                To transform how brands <span className="text-gradient">connect</span> with their audiences.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe in marketing that matters — strategies that create genuine value, 
                build authentic relationships, and drive sustainable growth. Every campaign 
                we craft is designed to resonate, convert, and endure.
              </p>
            </div>
          </RevealOnScroll>

          {/* Vision */}
          <RevealOnScroll delay={0.2}>
            <div className="lg:pt-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
                Our Vision
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                Where creativity meets <span className="text-gradient">precision.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We envision a future where data-driven insights and creative excellence 
                work in perfect harmony. Where every brand has the tools and strategy 
                to reach its full potential and make a meaningful impact.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Client logos infinite scroll */}
        <RevealOnScroll>
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
