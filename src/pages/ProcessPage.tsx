import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, Target, Palette, Rocket, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import RevealOnScroll from '../components/RevealOnScroll';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'Understanding goals, audience, and competitive landscape',
    details: [
      'Deep-dive into your business model, mission, and long-term goals',
      'Audience research — who they are, what they care about, how they decide',
      'Competitive landscape analysis to identify positioning opportunities',
      'Audit of existing brand assets, messaging, and digital presence',
    ],
  },
  {
    number: '02',
    icon: Target,
    title: 'Strategy',
    description: 'Building the marketing roadmap and messaging framework',
    details: [
      'Define your brand positioning — what you stand for and who you are for',
      'Build a messaging framework: core narrative, value propositions, tone',
      'Develop a content and channel strategy aligned to your audience',
      'Set clear KPIs and milestones tied to real business outcomes',
    ],
  },
  {
    number: '03',
    icon: Palette,
    title: 'Identity',
    description: 'Crafting brand voice, visuals, and positioning',
    details: [
      'Define your brand voice — how you sound across every touchpoint',
      'Visual identity refinement: colours, typography, imagery style',
      'Positioning statements and brand story that resonate and differentiate',
      'Platform-specific guidelines to ensure consistency everywhere',
    ],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Execution',
    description: 'Deploying campaigns, content, and creative assets',
    details: [
      'Content creation: reels, carousels, stories, and long-form aligned to strategy',
      'Campaign launches across channels — organic, paid, and earned',
      'Community engagement systems to grow and nurture your audience',
      'AR filters, interactive experiences, and creative assets that stand out',
    ],
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Optimisation',
    description: 'Measuring results, iterating, and scaling what works',
    details: [
      'Regular performance reviews against defined KPIs and benchmarks',
      'Data-driven iteration — doubling down on what works, cutting what doesn\'t',
      'Audience insights fed back into strategy and content refinement',
      'Scaling successful campaigns and systems for compounding growth',
    ],
  },
];

const ProcessPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0.05, 0.85], ['0%', '100%']);

  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 60%)' }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium"
          >
            Our Framework
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
          >
            How We Build Brands<br />
            <span className="text-gradient">That Actually Last</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            A five-stage framework built like a consulting engagement — structured thinking, creative execution, and measurable results.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section ref={containerRef} className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative max-w-5xl mx-auto">
            {/* Progress line — desktop */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/50"
                style={{ height: lineProgress }}
              />
            </div>

            {/* Progress line — mobile */}
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
                <div className={`relative flex items-start gap-8 mb-20 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Step indicator */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg"
                      style={{ boxShadow: 'var(--shadow-glow)' }}
                    >
                      <step.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.01, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`ml-24 md:ml-0 flex-1 max-w-md ${
                      index % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24'
                    }`}
                  >
                    <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                      <span className="text-primary font-display text-sm tracking-wider mb-2 block">
                        Step {step.number}
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                        {step.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className={`flex items-start gap-2 text-sm text-muted-foreground ${
                              index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
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

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-radial)' }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to start the process?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Every engagement begins with a strategy conversation. Let's understand your business before we build anything.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-full transition-all duration-300"
              style={{ boxShadow: 'var(--shadow-glow)' }}
            >
              Schedule a Strategy Call
            </motion.a>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center py-8 border-t border-border/30">
        <p className="text-muted-foreground text-sm">© 2026 Jinanshé. All rights reserved.</p>
      </div>
    </main>
  );
};

export default ProcessPage;
