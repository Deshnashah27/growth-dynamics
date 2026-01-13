import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import RevealOnScroll from '../RevealOnScroll';

const ValuesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-40"
      >
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Our Philosophy
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Why Brands <span className="text-gradient">Stay With Us</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border/50">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  Most businesses don't fail because of weak offerings — they fail because their audience never truly understands them.
                </p>
                <p className="text-foreground font-medium text-xl">
                  At Jinanshé, we believe marketing should build meaning before momentum.
                </p>
                <p className="text-muted-foreground">
                  We collaborate with businesses that think long-term — those willing to invest in identity, systems, and community rather than shortcuts.
                </p>
                <p className="text-muted-foreground">
                  We work selectively so every brand we represent stays consistent, intentional, and respected.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ValuesSection;