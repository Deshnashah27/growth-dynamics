import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import RevealOnScroll from '../RevealOnScroll';

const stats = [
  { number: 170, suffix: '+', label: 'Qualified Leads in 45 Days' },
  { number: 3, suffix: 'x', label: 'Stronger Engagement in 60 Days' },
  { number: 41.7, suffix: 'M+', label: 'Total Plays Across Filters', decimals: 1 },
  { number: 56.2, suffix: 'M+', label: 'Views Generated via Snapchat', decimals: 1 },
  { number: 24.5, suffix: 'M+', label: 'Audience Reach Achieved', decimals: 1 },
  { number: 135, suffix: '+', label: 'Snapchat AR Filters Created' },
];

const AnimatedCounter = ({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) => {
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
        setCount(Number(current.toFixed(decimals)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? count.toFixed(decimals) : count}{suffix}
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border/50"
              >
                <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-3">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-muted-foreground text-xs md:text-sm">
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
