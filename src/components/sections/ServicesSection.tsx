import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../RevealOnScroll';

const services = [
  {
    title: 'Brand Foundation',
    slug: 'brand-foundation',
    description: 'Clear brand positioning and identity. Visual and narrative consistency across platforms.',
    gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
  },
  {
    title: 'Social Media Brand Engine',
    slug: 'social-media-marketing',
    description: 'Story-driven reels, educational carousels, and value-based content published with intent.',
    gradient: 'from-primary/10 via-yellow-500/5 to-transparent',
  },
  {
    title: 'Growth Systems',
    slug: 'sales-lead-generation',
    description: 'Structured systems for discovery, trust, conversion, and long-term business credibility.',
    gradient: 'from-yellow-500/10 via-amber-500/5 to-transparent',
  },
  {
    title: 'AR Experiences',
    slug: 'ar-experiences',
    description: 'Custom AR filters that turn your audience into active brand participants.',
    gradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            What We Deliver
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            What You Get When You <span className="text-gradient">Work With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Everything we deliver works toward one purpose — building a recognizable brand and an engaged community that grows with you over time.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 0.1}>
              <Link to={`/services/${service.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full cursor-pointer"
                >
                  <div className="relative h-full p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 overflow-hidden flex flex-col">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                    <div className="relative z-10 flex flex-col flex-1">
                      <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {service.description}
                      </p>
                      <div className="mt-8 flex items-center gap-2 text-primary font-medium group/btn">
                        <span>Learn More</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
