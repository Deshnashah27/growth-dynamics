import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ArrowUpRight, Palette, Share2, LineChart, Box } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RevealOnScroll from '@/components/RevealOnScroll';

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
      { name: 'TechVenture', industry: 'Technology', result: 'Complete rebrand resulting in 150% increase in brand recognition' },
      { name: 'EcoLiving', industry: 'Sustainability', result: 'New identity launch driving 200% social engagement growth' },
      { name: 'FinanceHub', industry: 'FinTech', result: 'Brand refresh achieving 80% positive sentiment increase' },
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
      { name: 'FashionForward', industry: 'E-commerce', result: '500% growth in organic reach within 6 months' },
      { name: 'HealthyLife', industry: 'Wellness', result: '10K to 250K followers in one year' },
      { name: 'StartupX', industry: 'SaaS', result: '3x increase in qualified leads from social' },
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
      { name: 'B2B Solutions', industry: 'Enterprise', result: '400% increase in qualified leads' },
      { name: 'CourseCreator', industry: 'Education', result: '$2M in course sales from funnel campaigns' },
      { name: 'ConsultingPro', industry: 'Professional Services', result: '60% reduction in cost per acquisition' },
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
      { name: 'LuxuryBrand', industry: 'Fashion', result: 'AR try-on feature increasing conversions by 250%' },
      { name: 'FurnitureCo', industry: 'Home Decor', result: 'Room visualization reducing returns by 40%' },
      { name: 'BeverageBrand', industry: 'FMCG', result: 'Viral AR campaign with 5M+ interactions' },
    ],
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug as keyof typeof servicesData];

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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />
        <div className="absolute inset-0 bg-background/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
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
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
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
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {service.clientWork.map((client, index) => (
              <RevealOnScroll key={client.name} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <p className="text-primary text-sm font-medium mb-2">{client.industry}</p>
                  <h3 className="font-display text-2xl font-bold mb-4">{client.name}</h3>
                  <p className="text-muted-foreground">{client.result}</p>
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
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how we can help transform your brand with our {service.title.toLowerCase()} expertise.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-full overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Start a Conversation</span>
              <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AXIS Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetailPage;
