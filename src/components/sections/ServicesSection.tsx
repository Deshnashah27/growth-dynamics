import { motion } from 'framer-motion';
import { Palette, Share2, LineChart, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll';

const services = [
  {
    icon: Palette,
    title: 'Brand Foundation',
    tagline: 'Identity that resonates',
    description: 'Strategic brand development from positioning to visual identity. We create brands that connect, convert, and endure.',
    features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Messaging Framework'],
    gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    tagline: 'Presence that performs',
    description: 'Data-driven social strategies that build engaged communities and drive measurable business results.',
    features: ['Content Strategy', 'Community Management', 'Paid Social', 'Analytics & Reporting'],
    gradient: 'from-primary/10 via-yellow-500/5 to-transparent',
  },
  {
    icon: LineChart,
    title: 'Sales & Lead Generation',
    tagline: 'Growth that scales',
    description: 'High-converting funnels and campaigns that turn cold traffic into qualified leads and loyal customers.',
    features: ['Funnel Design', 'Lead Magnets', 'Email Sequences', 'Conversion Optimization'],
    gradient: 'from-yellow-500/10 via-amber-500/5 to-transparent',
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Premium <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your brand and accelerate growth.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full"
              >
                <div className="relative h-full p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Glow effect */}
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    {/* Icon and arrow */}
                    <div className="flex items-start justify-between mb-8">
                      <motion.div
                        whileHover={{ rotate: -5, scale: 1.1 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary"
                      >
                        <service.icon className="w-8 h-8" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ArrowUpRight className="w-6 h-6 text-primary" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <p className="text-primary text-sm font-medium mb-2">
                      {service.tagline}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-8 flex items-center gap-2 text-primary font-medium group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
