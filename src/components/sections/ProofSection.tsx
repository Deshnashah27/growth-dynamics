import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
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

const clientLogos = [
  { name: 'Vertex', initials: 'VX' },
  { name: 'Horizon', initials: 'HZ' },
  { name: 'Quantum', initials: 'QT' },
  { name: 'Nexus', initials: 'NX' },
  { name: 'Pulse', initials: 'PL' },
  { name: 'Apex', initials: 'AX' },
];

const testimonials = [
  {
    quote: "Jinanshé brought clarity to our brand that we couldn't achieve on our own. The long-term impact has been remarkable.",
    author: "Marketing Director",
    company: "Tech Startup",
  },
  {
    quote: "Finally, a team that understands that marketing is about building trust, not just chasing trends.",
    author: "Founder & CEO",
    company: "E-commerce Brand",
  },
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
            Proof & Social Validation
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Proof That Brand-Led Marketing <span className="text-gradient">Works</span>
          </h2>
        </RevealOnScroll>

        {/* Client logos */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center w-20 h-12 md:w-24 md:h-14 rounded-lg border border-border/50 bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
              >
                <span className="font-display text-lg font-bold">{client.initials}</span>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 max-w-3xl mx-auto">
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

        {/* Testimonials */}
        <RevealOnScroll delay={0.3}>
          <div className="mb-12">
            <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-8">
              Client Feedback
            </p>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <Quote className="w-8 h-8 text-primary/50 mb-4" />
                  <p className="text-foreground text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Note about testimonials */}
        <RevealOnScroll delay={0.4}>
          <p className="text-center text-muted-foreground text-sm italic">
            Testimonials focused on clarity, trust, and long-term impact.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ProofSection;