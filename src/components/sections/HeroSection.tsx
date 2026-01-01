import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import KineticText from '../KineticText';
import FloatingElement from '../FloatingElement';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-background">
        <div 
          className="absolute inset-0 opacity-50"
          style={{ background: 'var(--gradient-radial)' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
          style={{ background: 'var(--gradient-glow)' }}
        />
      </div>

      {/* Floating UI elements */}
      <FloatingElement 
        className="absolute top-[15%] left-[10%] w-32 h-32 rounded-2xl glass-card opacity-40" 
        speed={0.3}
        rotateAmount={8}
      >
        <div className="w-full h-full p-4 flex flex-col gap-2">
          <div className="w-8 h-2 bg-primary/50 rounded-full" />
          <div className="w-16 h-2 bg-muted-foreground/30 rounded-full" />
          <div className="w-12 h-2 bg-muted-foreground/20 rounded-full" />
        </div>
      </FloatingElement>

      <FloatingElement 
        className="absolute top-[25%] right-[12%] w-24 h-40 rounded-2xl glass-card opacity-30" 
        speed={0.5}
        rotateAmount={-6}
      >
        <div className="w-full h-full p-3 flex flex-col gap-2">
          <div className="w-full h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg" />
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="w-full h-2 bg-muted-foreground/20 rounded-full" />
            <div className="w-3/4 h-2 bg-muted-foreground/15 rounded-full" />
          </div>
        </div>
      </FloatingElement>

      <FloatingElement 
        className="absolute bottom-[20%] left-[15%] w-40 h-24 rounded-2xl glass-card opacity-35" 
        speed={0.4}
        rotateAmount={5}
      >
        <div className="w-full h-full p-4 flex items-end gap-2">
          {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8].map((height, i) => (
            <div 
              key={i}
              className="flex-1 bg-gradient-to-t from-primary/40 to-primary/10 rounded-sm"
              style={{ height: `${height * 100}%` }}
            />
          ))}
        </div>
      </FloatingElement>

      <FloatingElement 
        className="absolute bottom-[25%] right-[8%] w-28 h-28 rounded-full glass-card opacity-25" 
        speed={0.6}
        rotateAmount={0}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary/70 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </FloatingElement>

      {/* Main content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-8"
        >
          Growth-Driven Marketing
        </motion.p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight mb-8">
          <KineticText text="We Build" delay={0.3} />
          <br />
          <span className="text-gradient">
            <KineticText text="Trust." delay={0.5} />
          </span>
          <br />
          <KineticText text="We Scale" delay={0.7} />
          <br />
          <span className="text-gradient">
            <KineticText text="Brands." delay={0.9} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Strategic marketing that transforms communities into loyal customers 
          and vision into measurable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-full overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">Start Your Growth</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-foreground"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-1.5"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
