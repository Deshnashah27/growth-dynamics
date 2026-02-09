import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Check, ArrowUpRight, Palette, Share2, LineChart, Box, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RevealOnScroll from '@/components/RevealOnScroll';
import ClientWorkModal from '@/components/ClientWorkModal';

// Import logos
import krushnarpanLogo from '@/assets/logos/krushnarpan-logo.png';
import evaraLogo from '@/assets/logos/evara-logo.png';
import absLogo from '@/assets/logos/abs-logo.png';
import ruaCrystalsLogo from '@/assets/logos/rua-crystals-logo.png';
import moryaDevelopersLogo from '@/assets/logos/morya-developers-logo.png';

// Import Wonderful Toyland images
import wonderfulToyland1 from '@/assets/wonderful-toyland-1.jpg';
import wonderfulToyland2 from '@/assets/wonderful-toyland-2.jpg';
import wonderfulToyland3 from '@/assets/wonderful-toyland-3.jpg';
import wonderfulToyland4 from '@/assets/wonderful-toyland-4.jpg';
import wonderfulToyland5 from '@/assets/wonderful-toyland-5.jpg';
import wonderfulToyland6 from '@/assets/wonderful-toyland-6.jpg';

interface ClientWork {
  name: string;
  industry: string;
  result: string;
  image: string;
  images?: string[];
  description?: string[];
}

const servicesData = {
  'brand-foundation': {
    icon: Palette,
    title: 'Brand Foundation',
    tagline: 'Identity that resonates',
    heroDescription: 'We craft compelling brand identities that capture your essence and connect deeply with your audience. From strategy to execution, we build brands that stand the test of time.',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    features: [
      { title: 'Brand Strategy', description: 'Deep-dive research and positioning that defines your unique market advantage.' },
      { title: 'Visual Identity', description: 'Logo design, color systems, and typography that embody your brand essence.' },
      { title: 'Brand Guidelines', description: 'Comprehensive documentation ensuring consistent brand expression.' },
      { title: 'Messaging Framework', description: 'Voice, tone, and key messages that resonate with your audience.' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'We immerse ourselves in your business, market, and audience.' },
      { step: '02', title: 'Strategy', description: 'Define positioning, personality, and competitive differentiation.' },
      { step: '03', title: 'Design', description: 'Create visual systems that bring your brand to life.' },
      { step: '04', title: 'Delivery', description: 'Comprehensive brand assets and guidelines for implementation.' },
    ],
    clientWork: [
      { 
        name: 'Krushnarpan Builders', 
        industry: 'Real Estate', 
        result: 'Cultural symbolism meets modern credibility',
        image: krushnarpanLogo,
        description: [
          'Inspired by Krishna\'s tilak to reflect trust, protection, and auspicious beginnings',
          'Blends cultural symbolism with structural clarity suited for a real estate brand',
          'Designed to feel emotionally rooted while remaining professionally credible'
        ]
      },
      { 
        name: 'Evara Ventures', 
        industry: 'Investment', 
        result: 'Growth-oriented identity for multi-vertical brand',
        image: evaraLogo,
        description: [
          'Conceptualised as a growth-oriented parent brand focused on trust and scalability',
          'Upward visual movement symbolises progress and long-term vision',
          'Clean, adaptable identity suitable across multiple business verticals'
        ]
      },
      { 
        name: 'ABS Realty', 
        industry: 'Real Estate', 
        result: 'Bold visibility in competitive markets',
        image: absLogo,
        description: [
          'Built with bold typography for strong visibility in competitive real estate markets',
          'Focuses on strength, stability, and sales-driven clarity',
          'Designed for instant recognition across digital and offline platforms'
        ]
      },
      { 
        name: 'RUA Crystals', 
        industry: 'Luxury Jewellery', 
        result: 'Minimal luxury reflecting purity',
        image: ruaCrystalsLogo,
        description: [
          'Crafted as a soft, minimal luxury identity reflecting delicacy and purity',
          'Restrained typography keeps the product as the visual hero',
          'Designed to appeal to conscious, premium jewellery buyers'
        ]
      },
      { 
        name: 'Morya Developers', 
        industry: 'Real Estate', 
        result: 'Cultural relevance with modern form',
        image: moryaDevelopersLogo,
        description: [
          'Subtle integration of Lord Ganesha\'s outline symbolising prosperity and new beginnings',
          'Cultural relevance balanced with a modern, uncluttered form',
          'Created to build trust without overt or heavy symbolism'
        ]
      },
      { 
        name: 'Wonderful Toyland', 
        industry: 'Product Photography', 
        result: 'Long-term brand asset, not just catalog photography',
        image: wonderfulToyland1,
        images: [
          wonderfulToyland1,
          wonderfulToyland2,
          wonderfulToyland3,
          wonderfulToyland4,
          wonderfulToyland5,
          wonderfulToyland6
        ],
        description: [
          'Executed as a long-term brand asset, not just catalog photography',
          'Visual consistency maintained across toys and books for brand coherence',
          'Assets designed for reuse across brochures, campaigns, and digital branding'
        ]
      },
    ],
  },
  'social-media-marketing': {
    icon: Share2,
    title: 'Social Media Marketing',
    tagline: 'Presence that performs',
    heroDescription: 'Transform your social presence into a powerful growth engine. We create data-driven strategies that build engaged communities and deliver measurable business results.',
    gradient: 'from-primary/20 via-yellow-500/10 to-transparent',
    features: [
      { title: 'Content Strategy', description: 'Strategic content planning that drives engagement and conversions.' },
      { title: 'Community Management', description: 'Building and nurturing authentic relationships with your audience.' },
      { title: 'Paid Social', description: 'High-ROI advertising campaigns across all major platforms.' },
      { title: 'Analytics & Reporting', description: 'Data-driven insights to optimize performance continuously.' },
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Comprehensive analysis of your current social presence and competitors.' },
      { step: '02', title: 'Strategy', description: 'Platform-specific strategies aligned with business objectives.' },
      { step: '03', title: 'Execute', description: 'Content creation, publishing, and community engagement.' },
      { step: '04', title: 'Optimize', description: 'Continuous improvement based on performance data.' },
    ],
    clientWork: [
      { 
        name: 'The Choupaal', 
        industry: 'Commercial Real Estate', 
        result: 'Positioned as a premium community-driven commercial hub',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
        description: [
          'Crafted content to portray true luxury, exclusivity, and a premium work ecosystem',
          'Positioned the project as a community-driven commercial hub enabling work–life balance',
          'Focused on aspiration, lifestyle, and long-term brand perception'
        ]
      },
      { 
        name: 'Monalisa Training Institute & Salon', 
        industry: 'Beauty & Education', 
        result: 'Knowledge-led platform empowering women',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
        description: [
          'Built educational content to upskill existing and aspiring beauticians',
          'Positioned the brand as a knowledge-led platform empowering women',
          'Focused on community building and long-term trust over promotions'
        ]
      },
      { 
        name: 'Durvankur', 
        industry: 'Agri Brand – Regional Markets', 
        result: 'Multi-language content breaking regional barriers',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
        description: [
          'Solved language and regional entry barriers through multi-language content',
          'Used farmer psychology and AI-led localization to build personal connection',
          'Created relatable content that educated, built trust, and supported sales'
        ]
      },
      { 
        name: 'Peethmart', 
        industry: 'Instant Mix Brand', 
        result: 'Franchise expansion through digital storytelling',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
        description: [
          'Showcased on-ground brand expansion through franchise launch content',
          'Developed recipe reels to position the product as easy, reliable, and everyday-ready',
          'Focused on clarity, consistency, and recall across digital platforms'
        ]
      },
    ],
  },
  'sales-lead-generation': {
    icon: LineChart,
    title: 'Sales & Lead Generation',
    tagline: 'Growth that scales',
    heroDescription: 'Turn cold traffic into qualified leads and loyal customers. Our high-converting funnels and strategic campaigns deliver consistent, scalable growth.',
    gradient: 'from-yellow-500/20 via-amber-500/10 to-transparent',
    features: [
      { title: 'Funnel Design', description: 'Strategic conversion funnels optimized for maximum ROI.' },
      { title: 'Lead Magnets', description: 'Compelling offers that attract and capture qualified prospects.' },
      { title: 'Email Sequences', description: 'Automated nurture campaigns that convert leads to customers.' },
      { title: 'Conversion Optimization', description: 'Continuous testing and improvement of conversion rates.' },
    ],
    process: [
      { step: '01', title: 'Analyze', description: 'Map your customer journey and identify conversion opportunities.' },
      { step: '02', title: 'Build', description: 'Create high-converting landing pages and lead capture systems.' },
      { step: '03', title: 'Automate', description: 'Set up email sequences and retargeting campaigns.' },
      { step: '04', title: 'Scale', description: 'Optimize and expand successful campaigns for growth.' },
    ],
    clientWork: [
      { 
        name: 'The Choupaal – Ads & Lead Generation', 
        industry: 'Commercial Real Estate', 
        result: 'Targeted ads attracting serious buyers',
        image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop',
        description: [
          'Strategised and executed targeted ad campaigns for a premium commercial hub',
          'Focused on attracting serious buyers and decision-makers, not mass enquiries',
          'Creatives aligned with luxury positioning and community-driven workspace vision'
        ]
      },
      { 
        name: 'SEWAH Education Hub', 
        industry: 'Education', 
        result: 'Lead-focused creatives driving enrolments',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        description: [
          'Created performance-driven creatives and videos for orientation enrolments',
          'Content designed to build trust, clarity, and intent before conversion',
          'Supported a funnel-based approach to attract high-quality prospects'
        ]
      },
      { 
        name: 'Oxanto – Pharmaceutical Website', 
        industry: 'Pharmaceutical Manufacturing', 
        result: 'Credibility-driven website for B2B markets',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
        description: [
          'Designed a credibility-driven website for a medicine manufacturing company',
          'Focused on clarity, structure, and trust for B2B and regulated markets',
          'Website positioned as a long-term asset for enquiries and brand authority'
        ]
      },
      { 
        name: 'Reliant Lab – Google Business', 
        industry: 'Healthcare', 
        result: 'Optimised local discovery and trust',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
        description: [
          'Optimised Google Business profile to improve visibility and trust',
          'Structured listing to support local discovery and healthcare credibility',
          'Focused on consistency and accuracy over promotional noise'
        ]
      },
      { 
        name: 'Monalisa Beauty Parlour – Brochure', 
        industry: 'Beauty & Education', 
        result: 'Professional course brochures',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop',
        description: [
          'Designed structured brochures for professional beauty courses',
          'Focused on clear communication and aspirational positioning',
          'Assets used across digital and offline promotions'
        ]
      },
      { 
        name: 'Krushnarpan Builders – Stationery', 
        industry: 'Real Estate', 
        result: 'Brand-aligned corporate identity',
        image: krushnarpanLogo,
        description: [
          'Visiting cards and letterheads aligned with brand identity',
          'Ensured consistency across official business communication',
          'Professional assets reinforcing brand credibility'
        ]
      },
    ],
  },
  'ar-experiences': {
    icon: Box,
    title: 'AR Experiences',
    tagline: 'Immersive innovation',
    heroDescription: 'Step into the future with augmented reality. We create immersive AR experiences that transform customer engagement and create unforgettable brand interactions.',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    features: [
      { title: 'AR Filters & Effects', description: 'Custom social media filters that go viral and boost brand awareness.' },
      { title: 'Product Visualization', description: '3D product try-ons and virtual showrooms for enhanced shopping.' },
      { title: 'Interactive Campaigns', description: 'Gamified AR experiences that drive engagement and shares.' },
      { title: 'WebAR Solutions', description: 'Browser-based AR accessible without app downloads.' },
    ],
    process: [
      { step: '01', title: 'Concept', description: 'Define objectives and design immersive experience concepts.' },
      { step: '02', title: 'Design', description: 'Create 3D assets, animations, and interaction flows.' },
      { step: '03', title: 'Develop', description: 'Build and test AR experiences across platforms.' },
      { step: '04', title: 'Launch', description: 'Deploy, monitor, and optimize for maximum engagement.' },
    ],
    clientWork: [
      { 
        name: 'PNR Puff n Rolls', 
        industry: 'Cafe', 
        result: 'Turning loyal customers into brand promoters',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
        description: [
          'Turned loyal customers into brand promoters by making the cafe part of their social moments',
          'AR filter designed for shareability and organic reach',
          'Strengthened community connection through interactive experiences'
        ]
      },
      { 
        name: 'Cafe Nivara', 
        industry: 'Cafe', 
        result: 'Boosted local footfall through AR storytelling',
        image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop',
        description: [
          'Boosted local footfall by turning customer stories into address-led brand touchpoints',
          'Location-embedded AR experience driving discovery',
          'Social sharing amplified organic brand awareness'
        ]
      },
      { 
        name: 'Sunburn Holi 2025 – Martin Garrix', 
        industry: 'Events & Entertainment', 
        result: 'Personalised concert experience filter',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
        description: [
          'Amplified event buzz and brand association by letting attendees share a personalised concert experience',
          'Name filter created memorable, shareable moments',
          'Viral potential maximised through event-specific design'
        ]
      },
      { 
        name: 'Peethmart – AR Filter', 
        industry: 'Instant Mix Brand', 
        result: 'Logo-led AR increasing brand recognition',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
        description: [
          'Used a logo-led AR filter to increase brand recognition through organic user sharing',
          'Simple, memorable design for maximum recall',
          'Extended brand presence into social interactions'
        ]
      },
      { 
        name: 'Kabra Saree', 
        industry: 'Retail', 
        result: 'Store awareness through customer stories',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=400&fit=crop',
        description: [
          'Drove store awareness by embedding the brand name and location directly into customer stories',
          'AR filter designed for traditional retail engagement',
          'Cultural relevance driving local connection'
        ]
      },
      { 
        name: 'Durvankur – AR Filter', 
        industry: 'Agri Products', 
        result: 'Brand discovery for farmers and dealers',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
        description: [
          'Helped farmers and dealers easily discover the brand location while engaging digitally',
          'Location-focused AR bridging digital and physical presence',
          'Accessible design for rural and regional audiences'
        ]
      },
      { 
        name: 'Suyog Hospital', 
        industry: 'Multi & Critical Care', 
        result: 'Trust and local recall through AR',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
        description: [
          'Built trust and local recall by reinforcing the hospital\'s presence in everyday digital interactions',
          'Healthcare-appropriate AR maintaining professional credibility',
          'Community trust built through consistent digital presence'
        ]
      },
    ],
  },
};

const socialLinks = [
  { icon: Instagram, name: 'Instagram', href: 'https://instagram.com/yourhandle', color: '#E4405F' },
  { icon: Linkedin, name: 'LinkedIn', href: 'https://linkedin.com/company/yourcompany', color: '#0A66C2' },
  { icon: Youtube, name: 'YouTube', href: 'https://youtube.com/@yourchannel', color: '#FF0000' },
  { icon: Mail, name: 'Email', href: 'mailto:hello@example.com', color: '#D44638' },
];

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug as keyof typeof servicesData];
  const [selectedClient, setSelectedClient] = useState<ClientWork | null>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Client Work Modal */}
      <ClientWorkModal 
        isOpen={!!selectedClient} 
        onClose={() => setSelectedClient(null)} 
        client={selectedClient} 
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />
        <div className="absolute inset-0 bg-background/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 text-primary mb-8">
              <Icon className="w-10 h-10" />
            </div>
            
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              {service.tagline}
            </p>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              {service.title}
            </h1>
            
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl leading-relaxed">
              {service.heroDescription}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mt-10"
          >
            <span className="text-muted-foreground text-sm">Follow us:</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: social.color }}
                  className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <RevealOnScroll className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              What's <span className="text-gradient">Included</span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <RevealOnScroll key={feature.title} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="container mx-auto px-6">
          <RevealOnScroll className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <RevealOnScroll key={step.step} delay={index * 0.15}>
                <div className="relative">
                  <span className="font-display text-6xl font-bold text-primary/20">{step.step}</span>
                  <h3 className="font-display text-xl font-bold mb-2 -mt-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-border to-transparent" />
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Client Work Section - Portfolio */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="container mx-auto px-6">
          <RevealOnScroll className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Client <span className="text-gradient">Results</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Real results from real clients. See how we've helped brands transform their digital presence.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {service.clientWork.map((client, index) => (
              <RevealOnScroll key={client.name} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedClient(client)}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-muted flex items-center justify-center p-6">
                    <motion.img
                      src={client.image}
                      alt={`${client.name} project`}
                      className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Industry badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary backdrop-blur-sm">
                        {client.industry}
                      </span>
                    </div>

                    {/* Multi-image indicator */}
                    {client.images && client.images.length > 1 && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-background/80 text-foreground backdrop-blur-sm">
                          {client.images.length} photos
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{client.result}</p>
                    
                    {/* View Project button - always visible, bigger */}
                    <motion.div 
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 mb-4"
            >
              <span className="relative z-10">
                {slug === 'brand-foundation' && "Let's Build Your Brand the Right Way"}
                {slug === 'social-media-marketing' && "Create a Social Presence That Actually Represents You"}
                {slug === 'sales-lead-generation' && "Discuss a Lead Strategy That Fits Your Business"}
                {slug === 'ar-experiences' && "Turn Your Customers into Brand Advocates with AR"}
              </span>
              <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
            <p className="text-muted-foreground text-base max-w-xl mx-auto mt-4">
              {slug === 'brand-foundation' && "For businesses ready to move from scattered identity to a clear, respected brand."}
              {slug === 'social-media-marketing' && "No random posts. Only content aligned with your vision, values, and long-term goals."}
              {slug === 'sales-lead-generation' && "Focused on quality conversations, not empty enquiries or vanity numbers."}
              {slug === 'ar-experiences' && "Interactive experiences designed to be shared, remembered, and talked about."}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Jinanshé. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetailPage;
