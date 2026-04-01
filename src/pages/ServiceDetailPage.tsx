import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Check, ArrowUpRight, Palette, Share2, LineChart, Box, Quote, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RevealOnScroll from '@/components/RevealOnScroll';
import ClientWorkModal from '@/components/ClientWorkModal';

// Import logos
import krushnarpanLogo from '@/assets/logos/krushnarpan-logo.png';
import evaraLogo from '@/assets/logos/evara-logo.png';
import absLogo from '@/assets/logos/abs-logo.png';
import ruaCrystalsMockup from '@/assets/logos/rua-crystals-mockup.png';
import moryaDevelopersLogo from '@/assets/logos/morya-developers-logo.png';

// Import AR snapcode images
import pnrSnapcode from '@/assets/ar/pnr-snapcode.png';
import nivaraSnapcode from '@/assets/ar/nivara-snapcode.png';
import sunburnSnapcode from '@/assets/ar/sunburn-snapcode.png';
import peethmartSnapcode from '@/assets/ar/peethmart-snapcode.png';
import kabraSnapcode from '@/assets/ar/kabra-snapcode.png';
import durvankurSnapcode from '@/assets/ar/durvankur-snapcode.png';
import suyogSnapcode from '@/assets/ar/suyog-snapcode.png';

// Import Wonderful Toyland images
import wonderfulToylandThumbnail from '@/assets/wonderful-toyland-thumbnail.png';
import wonderfulToyland1 from '@/assets/wonderful-toyland-1.jpg';
import wonderfulToyland2 from '@/assets/wonderful-toyland-2.jpg';
import wonderfulToyland3 from '@/assets/wonderful-toyland-3.jpg';
import wonderfulToyland4 from '@/assets/wonderful-toyland-4.jpg';
import wonderfulToyland5 from '@/assets/wonderful-toyland-5.jpg';
import wonderfulToyland6 from '@/assets/wonderful-toyland-6.jpg';

// Import client thumbnails
import cafeNivaraThumbnail from '@/assets/thumbnails/cafe-nivara.png';
import durvankurThumbnail from '@/assets/thumbnails/durvankur.png';
import kabraFashionistaThumbnail from '@/assets/thumbnails/kabra-fashionista.png';
import monalisaThumbnail from '@/assets/thumbnails/monalisa.png';
import oxantoThumbnail from '@/assets/thumbnails/oxanto.png';
import peethmartThumbnail from '@/assets/thumbnails/peethmart.png';
import pnrThumbnail from '@/assets/thumbnails/pnr-puff-n-rolls.avif';
import reliantLabThumbnail from '@/assets/thumbnails/reliant-lab.png';
import sewahThumbnail from '@/assets/thumbnails/sewah.png';
import suyogHospitalThumbnail from '@/assets/thumbnails/suyog-hospital.png';
import theChoupaalThumbnail from '@/assets/thumbnails/the-choupaal.png';
import sunburnHoliThumbnail from '@/assets/thumbnails/sunburn-holi.png';

interface ClientWork {
  name: string;
  industry: string;
  result: string;
  image: string;
  images?: string[];
  description?: string[];
  link?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  company: string;
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
      { name: 'Krushnarpan Builders', industry: 'Real Estate', result: 'Cultural symbolism meets modern credibility', image: krushnarpanLogo, description: ['Inspired by Krishna\'s tilak to reflect trust, protection, and auspicious beginnings', 'Blends cultural symbolism with structural clarity suited for a real estate brand', 'Designed to feel emotionally rooted while remaining professionally credible'] },
      { name: 'Evara Ventures', industry: 'Investment', result: 'Growth-oriented identity for multi-vertical brand', image: evaraLogo, description: ['Conceptualised as a growth-oriented parent brand focused on trust and scalability', 'Upward visual movement symbolises progress and long-term vision', 'Clean, adaptable identity suitable across multiple business verticals'] },
      { name: 'ABS Realty', industry: 'Real Estate', result: 'Bold visibility in competitive markets', image: absLogo, description: ['Built with bold typography for strong visibility in competitive real estate markets', 'Focuses on strength, stability, and sales-driven clarity', 'Designed for instant recognition across digital and offline platforms'] },
      { name: 'RUA Crystals', industry: 'Luxury Jewellery', result: 'Minimal luxury reflecting purity', image: ruaCrystalsMockup, images: [ruaCrystalsMockup], description: ['Crafted as a soft, minimal luxury identity reflecting delicacy and purity', 'Restrained typography keeps the product as the visual hero', 'Designed to appeal to conscious, premium jewellery buyers'] },
      { name: 'Morya Developers', industry: 'Real Estate', result: 'Cultural relevance with modern form', image: moryaDevelopersLogo, description: ['Subtle integration of Lord Ganesha\'s outline symbolising prosperity and new beginnings', 'Cultural relevance balanced with a modern, uncluttered form', 'Created to build trust without overt or heavy symbolism'] },
      { name: 'Wonderful Toyland', industry: 'Product Photography', result: 'Long-term brand asset, not just catalog photography', image: wonderfulToylandThumbnail, images: [wonderfulToyland1, wonderfulToyland2, wonderfulToyland3, wonderfulToyland4, wonderfulToyland5, wonderfulToyland6], description: ['Executed as a long-term brand asset, not just catalog photography', 'Visual consistency maintained across toys and books for brand coherence', 'Assets designed for reuse across brochures, campaigns, and digital branding'] },
    ],
    testimonials: [
      { quote: "Jinanshé understood our vision from the beginning. The brand identity they created reflects trust and professionalism exactly the way we wanted. Their approach is thoughtful and long-term.", author: "Mr. Shivaji Gaikhe", company: "Krushnarpan Builders" },
      { quote: "They don't just design — they think. The identity built for Evara feels scalable and future-ready. It truly represents our growth vision.", author: "Mr. Rushabh Rambhia", company: "Evara Ventures" },
      { quote: "The branding created clarity in our market positioning. Everything from logo to stationery feels strong and consistent. It gave us a professional edge.", author: "Mr. Sankhpal", company: "ABS Realty" },
      { quote: "They balanced cultural elements of Shree Ganesha with modern branding beautifully. The logo carries meaning without being overwhelming. Exactly what we were looking for.", author: "Mr. Sandip", company: "Morya Developers" },
      { quote: "The product shoot was executed very professionally. The photos gave our brand a clean and consistent digital presence across platforms.", author: "Miss. Rutuja Kotkar", company: "Wonderful Toyland" },
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
      { name: 'The Choupaal', industry: 'Commercial Real Estate', result: 'Positioned as a premium community-driven commercial hub', image: theChoupaalThumbnail, description: ['Crafted content to portray true luxury, exclusivity, and a premium work ecosystem', 'Positioned the project as a community-driven commercial hub enabling work–life balance', 'Focused on aspiration, lifestyle, and long-term brand perception'] },
      { name: 'Monalisa Training Institute & Salon', industry: 'Beauty & Education', result: 'Knowledge-led platform empowering women', image: monalisaThumbnail, description: ['Built educational content to upskill existing and aspiring beauticians', 'Positioned the brand as a knowledge-led platform empowering women', 'Focused on community building and long-term trust over promotions'] },
      { name: 'Durvankur', industry: 'Agri Brand – Regional Markets', result: 'Multi-language content breaking regional barriers', image: durvankurThumbnail, description: ['Solved language and regional entry barriers through multi-language content', 'Used farmer psychology and AI-led localization to build personal connection', 'Created relatable content that educated, built trust, and supported sales'] },
      { name: 'Peethmart', industry: 'Instant Mix Brand', result: 'Franchise expansion through digital storytelling', image: peethmartThumbnail, description: ['Showcased on-ground brand expansion through franchise launch content', 'Developed recipe reels to position the product as easy, reliable, and everyday-ready', 'Focused on clarity, consistency, and recall across digital platforms'] },
    ],
    testimonials: [
      { quote: "The team positioned our project as more than just commercial space — they highlighted lifestyle and community. The content truly reflects our premium vision.", author: "Mrs. Rutuja Tiwari", company: "The Choupaal" },
      { quote: "They helped us build educational content that actually connects with aspiring beauticians. The response and engagement have been very positive.", author: "Mrs. Jayashree Mundaware", company: "Monalisa Beauty Parlour" },
      { quote: "They understood the farmer mindset and language gap very well. The regional content helped us connect better with our audience.", author: "Mr. Rahul Sanap", company: "Durvankur" },
      { quote: "The reels and franchise coverage strengthened our digital presence. The content feels aligned and consistent with our brand.", author: "Mr. Vedant Kotkar", company: "Peethmart" },
    ],
  },
  'sales-lead-generation': {
    icon: LineChart,
    title: 'Growth Systems',
    tagline: 'Growth that scales',
    heroDescription: 'Strong brands need more than visibility. They need structured systems that support discovery, trust, conversion, and long-term business credibility. At Jinanshé, we build and optimise the assets that move businesses forward — from lead engines to brand touchpoints.',
    gradient: 'from-yellow-500/20 via-amber-500/10 to-transparent',
    features: [
      { title: 'Ad & Lead Systems', description: 'Performance-driven ad and lead systems designed for qualified conversions.' },
      { title: 'Website Development', description: 'Websites structured for credibility and enquiries.' },
      { title: 'Google Presence', description: 'Google presence optimisation for local discovery.' },
      { title: 'Communication Assets', description: 'Conversion-focused brochures and communication assets aligned with brand identity.' },
    ],
    process: [
      { step: '01', title: 'Analyze', description: 'Map your customer journey and identify conversion opportunities.' },
      { step: '02', title: 'Build', description: 'Create high-converting landing pages and lead capture systems.' },
      { step: '03', title: 'Automate', description: 'Set up email sequences and retargeting campaigns.' },
      { step: '04', title: 'Scale', description: 'Optimize and expand successful campaigns for growth.' },
    ],
    clientWork: [
      { name: 'The Choupaal – Ads & Lead Generation', industry: 'Commercial Real Estate', result: 'Targeted ads attracting serious buyers', image: theChoupaalThumbnail, description: ['Strategised and executed targeted ad campaigns for a premium commercial hub', 'Focused on attracting serious buyers and decision-makers, not mass enquiries', 'Creatives aligned with luxury positioning and community-driven workspace vision'] },
      { name: 'SEWAH Education Hub', industry: 'Education', result: 'Lead-focused creatives driving enrolments', image: sewahThumbnail, description: ['Created performance-driven creatives and videos for orientation enrolments', 'Content designed to build trust, clarity, and intent before conversion', 'Supported a funnel-based approach to attract high-quality prospects'] },
      { name: 'Oxanto – Pharmaceutical Website', industry: 'Pharmaceutical Manufacturing', result: 'Credibility-driven website for B2B markets', image: oxantoThumbnail, description: ['Designed a credibility-driven website for a medicine manufacturing company', 'Focused on clarity, structure, and trust for B2B and regulated markets', 'Website positioned as a long-term asset for enquiries and brand authority'] },
      { name: 'Reliant Lab – Google Business', industry: 'Healthcare', result: 'Optimised local discovery and trust', image: reliantLabThumbnail, description: ['Optimised Google Business profile to improve visibility and trust', 'Structured listing to support local discovery and healthcare credibility', 'Focused on consistency and accuracy over promotional noise'] },
      { name: 'Monalisa Beauty Parlour – Brochure', industry: 'Beauty & Education', result: 'Professional course brochures', image: monalisaThumbnail, description: ['Designed structured brochures for professional beauty courses', 'Focused on clear communication and aspirational positioning', 'Assets used across digital and offline promotions'] },
      { name: 'Krushnarpan Builders – Stationery', industry: 'Real Estate', result: 'Brand-aligned corporate identity', image: krushnarpanLogo, description: ['Visiting cards and letterheads aligned with brand identity', 'Ensured consistency across official business communication', 'Professional assets reinforcing brand credibility'] },
    ],
    testimonials: [
      { quote: "The creatives and videos were strategically aligned to attract the right audience for our orientation. The approach was structured and result-focused.", author: "Mrs. Ashwini Dhuppe", company: "SEWAH Education Hub" },
      { quote: "Our Google presence improved in terms of clarity and professionalism. It helped strengthen our credibility locally.", author: "Mrs. Archana Joshi", company: "Reliant Lab" },
      { quote: "The website built for us is clean, informative, and structured. It represents our pharmaceutical business professionally.", author: "Mr. Mahesh Chavan", company: "Oxanto" },
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
      { name: 'PNR Puff n Rolls', industry: 'Cafe', result: 'Turning loyal customers into brand promoters', image: pnrThumbnail, images: [pnrSnapcode], description: ['Turned loyal customers into brand promoters by making the cafe part of their social moments', 'AR filter designed for shareability and organic reach', 'Strengthened community connection through interactive experiences'], link: 'https://snapchat.com/unlock/?type=SNAPCODE&uuid=a1b2c3' },
      { name: 'Cafe Nivara', industry: 'Cafe', result: 'Boosted local footfall through AR storytelling', image: cafeNivaraThumbnail, images: [nivaraSnapcode], description: ['Boosted local footfall by turning customer stories into address-led brand touchpoints', 'Location-embedded AR experience driving discovery', 'Social sharing amplified organic brand awareness'], link: 'https://snapchat.com/unlock/?type=SNAPCODE&uuid=d4e5f6' },
      { name: 'Sunburn Holi 2025 – Martin Garrix', industry: 'Events & Entertainment', result: 'Personalised concert experience filter', image: sunburnHoliThumbnail, images: [sunburnSnapcode], description: ['Amplified event buzz and brand association by letting attendees share a personalised concert experience', 'Name filter created memorable, shareable moments', 'Viral potential maximised through event-specific design'], link: 'https://snapchat.com/t/Qk0d0njz' },
      { name: 'Peethmart – AR Filter', industry: 'Instant Mix Brand', result: 'Logo-led AR increasing brand recognition', image: peethmartThumbnail, images: [peethmartSnapcode], description: ['Used a logo-led AR filter to increase brand recognition through organic user sharing', 'Simple, memorable design for maximum recall', 'Extended brand presence into social interactions'], link: 'https://snapchat.com/unlock/?type=SNAPCODE&uuid=g7h8i9' },
      { name: 'Kabra Saree', industry: 'Retail', result: 'Store awareness through customer stories', image: kabraFashionistaThumbnail, images: [kabraSnapcode], description: ['Drove store awareness by embedding the brand name and location directly into customer stories', 'AR filter designed for traditional retail engagement', 'Cultural relevance driving local connection'], link: 'https://snapchat.com/unlock/?type=SNAPCODE&uuid=j0k1l2' },
      { name: 'Durvankur – AR Filter', industry: 'Agri Products', result: 'Brand discovery for farmers and dealers', image: durvankurThumbnail, images: [durvankurSnapcode], description: ['Helped farmers and dealers easily discover the brand location while engaging digitally', 'Location-focused AR bridging digital and physical presence', 'Accessible design for rural and regional audiences'], link: 'https://snapchat.com/unlock/?type=SNAPCODE&uuid=m3n4o5' },
      { name: 'Suyog Hospital', industry: 'Multi & Critical Care', result: 'Trust and local recall through AR', image: suyogHospitalThumbnail, images: [suyogSnapcode], description: ['Built trust and local recall by reinforcing the hospital\'s presence in everyday digital interactions', 'Healthcare-appropriate AR maintaining professional credibility', 'Community trust built through consistent digital presence'], link: 'https://snapchat.com/unlock/?type=SNAPCODE&uuid=p6q7r8' },
    ],
    testimonials: [
      { quote: "The branded filter with our address helped increase store awareness. It was a creative way to stay visible in customer stories.", author: "Mrs. Poonam Kabra", company: "Kabra Fashionista" },
      { quote: "The AR filter helped customers share their experience while keeping our location visible. It added a modern touch to our cafe branding.", author: "Miss. Mahima Lad", company: "Cafe Nivara" },
    ],
  },
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/jinanshe' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/jinanshe' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/jinanshe' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/jinanshe' },
];

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug as keyof typeof servicesData];
  const [selectedClient, setSelectedClient] = useState<ClientWork | null>(null);

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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all text-xs absolute top-4 right-6 z-20"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back to Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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

      {/* Client Work Section */}
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
                  <div className="relative h-56 overflow-hidden bg-muted flex items-center justify-center p-6">
                    <motion.img
                      src={client.image}
                      alt={`${client.name} project`}
                      className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    {client.images && client.images.length > 1 && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-background/80 text-foreground backdrop-blur-sm">
                          {client.images.length} photos
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{client.result}</p>
                    <motion.div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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

      {/* Testimonials Section */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="py-20 md:py-32 border-t border-border/30 bg-card/30">
          <div className="container mx-auto px-6">
            <RevealOnScroll className="mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Client Feedback
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                What Our Clients <span className="text-gradient">Say</span>
              </h2>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {service.testimonials.map((testimonial: Testimonial, index: number) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-card border border-border/50">
                    <Quote className="w-8 h-8 text-primary/40 mb-4" />
                    <p className="text-foreground text-lg mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <motion.button
              onClick={() => {
                window.location.href = '/#contact';
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
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
            © 2026 Jinanshé. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetailPage;
