import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll';

const values = [
  {
    icon: Shield,
    title: 'Trust',
    description: 'Building authentic relationships that form the foundation of lasting brand loyalty.',
    accent: 'from-amber-500/20 to-orange-500/5',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Transforming audiences into engaged communities that champion your brand.',
    accent: 'from-primary/20 to-primary/5',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Data-driven strategies that deliver measurable, sustainable business expansion.',
    accent: 'from-yellow-500/20 to-amber-500/5',
  },
];

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
        <RevealOnScroll className="text-center mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Our Foundation
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Built on <span className="text-gradient">Principles</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <RevealOnScroll key={value.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6"
                  >
                    <value.icon className="w-7 h-7" />
                  </motion.div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div 
                    className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
