import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Layers, Rocket, BarChart3 } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll';

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Discovery',
    description: 'Deep dive into your brand, audience, and market positioning.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Craft a tailored roadmap aligned with your business goals.',
  },
  {
    number: '03',
    icon: Layers,
    title: 'Build',
    description: 'Execute campaigns with precision and creative excellence.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'Deploy optimized content across strategic channels.',
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'Scale',
    description: 'Analyze, iterate, and amplify what works.',
  },
];

const FunnelSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden bg-card/30">
      <div className="container mx-auto px-6">
        <RevealOnScroll className="text-center mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Our Process
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            The Growth <span className="text-gradient">Framework</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A proven 5-step methodology that transforms marketing into measurable business outcomes.
          </p>
        </RevealOnScroll>

        {/* Steps container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/50"
              style={{ height: lineProgress }}
            />
          </div>

          {/* Mobile progress line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/50"
              style={{ height: lineProgress }}
            />
          </div>

          {steps.map((step, index) => (
            <RevealOnScroll 
              key={step.number}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Step indicator */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg"
                    style={{ boxShadow: 'var(--shadow-glow)' }}
                  >
                    <step.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`ml-24 md:ml-0 flex-1 max-w-md ${
                    index % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24'
                  }`}
                >
                  <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="text-primary font-display text-sm tracking-wider mb-2 block">
                      Step {step.number}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 max-w-md" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunnelSection;
