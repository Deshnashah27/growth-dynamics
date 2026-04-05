import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, Target, Palette, Rocket, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../RevealOnScroll';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'Understanding your business, mission, audience, and current gaps',
  },
  {
    number: '02',
    icon: Target,
    title: 'Strategy',
    description: 'Defining positioning, brand voice, content direction, and systems',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Identity',
    description: 'Creating a consistent, premium identity across platforms',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Execution',
    description: 'Content, reels, stories, and campaigns aligned to your brand narrative',
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Optimisation',
    description: 'Refining direction through insights, not trends',
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
            Our Framework
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            A Thoughtful Framework Built for <span className="text-gradient">Long-Term Brands</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Built like a consulting framework. Executed with creative precision.
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
                {/* Step indicator — links to /process */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <Link to="/process">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg cursor-pointer"
                      style={{ boxShadow: 'var(--shadow-glow)' }}
                    >
                      <step.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </Link>
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

        {/* See Our Process CTA */}
        <RevealOnScroll delay={0.3}>
          <div className="text-center mt-16">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              See Our Process <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default FunnelSection;
