import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../RevealOnScroll';

const services = [
  {
    title: 'Brand Foundation',
    slug: 'brand-foundation',
    tagline: 'From vision to a recognizable brand',
    description: 'Clear brand positioning and identity. Visual and narrative consistency across platforms.',
    features: ['Brand Positioning', 'Visual Identity', 'Narrative Consistency', 'Platform Alignment'],
    gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
  },
  {
    title: 'Social Media Brand Engine',
    slug: 'social-media-marketing',
    tagline: "We don't post to fill calendars. We publish with intent.",
    description: 'Reels built on storytelling, relevance, and meaning. Posts and carousels that educate, connect, and reflect your values.',
    features: ['Story-Driven Reels', 'Educational Carousels', 'Community Stories', 'Value-Based Content'],
    gradient: 'from-primary/10 via-yellow-500/5 to-transparent',
  },
  {
    title: 'Growth Systems',
    slug: 'sales-lead-generation',
    tagline: 'Strong brands need more than visibility',
    description: 'Structured systems that support discovery, trust, conversion, and long-term business credibility.',
    features: [
      'Performance-driven ad and lead systems',
      'Websites structured for credibility and enquiries',
      'Google presence optimisation for local discovery',
      'Conversion-focused brochures and communication assets',
      'Corporate touchpoints aligned with brand identity',
    ],
    gradient: 'from-yellow-500/10 via-amber-500/5 to-transparent',
  },
  {
    title: 'AR Experiences',
    slug: 'ar-experiences',
    tagline: 'Engage, involve, and organically amplify your brand',
    description: 'Custom AR filters designed to turn your audience into active brand participants. Drives organic reach through user-generated content and social sharing.',
    features: ['Custom AR Filters', 'User-Generated Content', 'Social Sharing', 'Campaign Integration'],
    gradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
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
            What We Deliver
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            What You Get When You <span className="text-gradient">Work With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Everything we deliver works toward one purpose — building a recognizable brand and an engaged community that grows with you over time.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 0.1}>
              <Link to={`/services/${service.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full cursor-pointer"
                >
                  <div className="relative h-full p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    {/* Glow effect */}
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10">
                      {/* Content */}
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-4">
                        {service.tagline}
                      </p>
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
                      <div className="mt-8 flex items-center gap-2 text-primary font-medium group/btn">
                        <span>View Details</span>
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
