import { motion } from 'framer-motion';
import RevealOnScroll from '../RevealOnScroll';
const deshnaShah = '/assets/deshna-shah.jpg';
const pavanMundaware = '/assets/pavan-mundaware.jpg';

const founders = [
  {
    name: 'Deshna Shah',
    role: 'Co-Founder',
    title: 'Brand & Creative Strategist',
    image: deshnaShah,
    bio: [
      'Deshna leads the creative and brand direction at Jinanshé. With a deep understanding of visual identity, storytelling, and digital perception, she ensures every brand we work with communicates clearly and consistently.',
      'Her focus lies in transforming ideas into structured brand narratives — balancing creativity with strategic intent. From identity systems to content ecosystems, her work is rooted in long-term positioning rather than short-term trends.',
    ],
  },
  {
    name: 'Pavan Mundaware',
    role: 'Co-Founder',
    title: 'Marketing & Growth Strategist',
    image: pavanMundaware,
    bio: [
      'Pavan drives the strategic and performance side of Jinanshé. With a strong focus on brand positioning, community building, and business alignment, he works closely with clients to ensure marketing decisions support long-term growth.',
      'His approach combines structured thinking, audience psychology, and execution discipline — ensuring brands don\'t just look good, but move forward with clarity and purpose.',
    ],
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Our Mission */}
        <div className="max-w-4xl mx-auto mb-32">
          <RevealOnScroll>
            <div className="mb-12">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
                Our Mission
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-10">
                To turn our clients' missions<br />
                <span className="text-gradient">into real impact.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At Jinanshé, we believe marketing is not about noise or trends — it is about clarity, consistency, and connection.
              </p>
              <p>
                Every business carries a deeper purpose. Our role is to translate that purpose into meaningful brand presence, trusted communication, and long-term community.
              </p>
              <div className="pl-6 border-l-2 border-primary/50 space-y-3 my-10">
                <p className="text-foreground font-medium text-xl">
                  We don't create content to fill calendars.
                </p>
                <p className="text-foreground font-medium text-xl">
                  We build systems that help brands grow with intention.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Co-Founders */}
        <RevealOnScroll delay={0.15}>
          <div className="mb-16 text-center">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The People Behind It
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              About the Co-Founders
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <RevealOnScroll key={founder.name} delay={0.2 + index * 0.15}>
              <div
                className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 transition-colors duration-500"
              >
                {/* Portrait */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {/* Role badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary backdrop-blur-sm border border-primary/20">
                      {founder.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                      {founder.name}
                    </h3>
                    <p className="text-primary text-sm font-medium tracking-wide">
                      {founder.title}
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                    {founder.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
