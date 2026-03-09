import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import RevealOnScroll from '../RevealOnScroll';

const stats = [
  { number: 170, suffix: '+', label: 'Qualified Leads in 45 Days' },
  { number: 3, suffix: 'x', label: 'Stronger Engagement in 60 Days' },
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

const ProofSection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-card/50">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Proof & Social Validation
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Proof That Brand-Led Marketing <span className="text-gradient">Works</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-8 md:p-10 rounded-2xl bg-card border border-border/50"
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
      </div>
    </section>
  );
};

export default ProofSection;
