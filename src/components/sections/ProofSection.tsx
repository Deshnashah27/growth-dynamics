import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import RevealOnScroll from '../RevealOnScroll';

const stats = [
  { number: 150, suffix: '+', label: 'Brands Elevated' },
  { number: 50, suffix: 'M+', label: 'Views Generated' },
  { number: 300, suffix: '+', label: 'Campaigns Delivered' },
  { number: 95, suffix: '%', label: 'Client Retention' },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const achievements = [
  'Featured in Marketing Week',
  'Top 100 Growth Agencies 2024',
  'Meta Business Partner',
  'Google Premier Partner',
];

const ProofSection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-card/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Results That Speak
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Proven <span className="text-gradient">Impact</span>
          </h2>
        </RevealOnScroll>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 md:p-8"
              >
                <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-3">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Achievements */}
        <RevealOnScroll delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 rounded-full border border-border bg-card/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
              >
                {achievement}
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ProofSection;
