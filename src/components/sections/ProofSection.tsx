import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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

const testimonials = [
  { quote: "Jinanshé understood our vision from the beginning. The brand identity they created reflects trust and professionalism exactly the way we wanted. Their approach is thoughtful and long-term.", author: "Mr. Shivaji Gaikhe", company: "Krushnarpan Builders" },
  { quote: "They don't just design — they think. The identity built for Evara feels scalable and future-ready. It truly represents our growth vision.", author: "Mr. Rushabh Rambhia", company: "Evara Ventures" },
  { quote: "The branding created clarity in our market positioning. Everything from logo to stationery feels strong and consistent. It gave us a professional edge.", author: "Mr. Sankhpal", company: "ABS Realty" },
  { quote: "They balanced cultural elements of Shree Ganesha with modern branding beautifully. The logo carries meaning without being overwhelming. Exactly what we were looking for.", author: "Mr. Sandip", company: "Morya Developers" },
  { quote: "The product shoot was executed very professionally. The photos gave our brand a clean and consistent digital presence across platforms.", author: "Miss. Rutuja Kotkar", company: "Wonderful Toyland" },
  { quote: "The team positioned our project as more than just commercial space — they highlighted lifestyle and community. The content truly reflects our premium vision.", author: "Mrs. Rutuja Tiwari", company: "The Choupaal" },
  { quote: "They helped us build educational content that actually connects with aspiring beauticians. The response and engagement have been very positive.", author: "Mrs. Jayashree Mundaware", company: "Monalisa Beauty Parlour" },
  { quote: "They understood the farmer mindset and language gap very well. The regional content helped us connect better with our audience.", author: "Mr. Rahul Sanap", company: "Durvankur" },
  { quote: "The reels and franchise coverage strengthened our digital presence. The content feels aligned and consistent with our brand.", author: "Mr. Vedant Kotkar", company: "Peethmart" },
  { quote: "The creatives and videos were strategically aligned to attract the right audience for our orientation. The approach was structured and result-focused.", author: "Mrs. Ashwini Dhuppe", company: "SEWAH Education Hub" },
  { quote: "Our Google presence improved in terms of clarity and professionalism. It helped strengthen our credibility locally.", author: "Mrs. Archana Joshi", company: "Reliant Lab" },
  { quote: "The website built for us is clean, informative, and structured. It represents our pharmaceutical business professionally.", author: "Mr. Mahesh Chavan", company: "Oxanto" },
  { quote: "The branded filter with our address helped increase store awareness. It was a creative way to stay visible in customer stories.", author: "Mrs. Poonam Kabra", company: "Kabra Fashionista" },
  { quote: "The AR filter helped customers share their experience while keeping our location visible. It added a modern touch to our cafe branding.", author: "Miss. Mahima Lad", company: "Cafe Nivara" },
];

const ProofSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pairCount = Math.ceil(testimonials.length / 2);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % pairCount);
  }, [pairCount]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + pairCount) % pairCount);
  }, [pairCount]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const pair = testimonials.slice(currentIndex * 2, currentIndex * 2 + 2);

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

        {/* Testimonials carousel */}
        <RevealOnScroll delay={0.3}>
          <div className="mb-12">
            <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-8">
              Client Feedback
            </p>
            <div className="relative max-w-4xl mx-auto">
              {/* Nav arrows */}
              <button
                onClick={prev}
                className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={next}
                className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {pair.map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-card border border-border/50"
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

              {/* Dot indicators */}
              <div className="flex justify-center gap-1.5 mt-6">
                {Array.from({ length: pairCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-border'}`}
                    aria-label={`Go to testimonials ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

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