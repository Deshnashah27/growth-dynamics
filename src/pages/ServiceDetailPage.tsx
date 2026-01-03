import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Check, ArrowUpRight, Palette, Share2, LineChart, Box, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
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
      { 
        name: 'TechVenture', 
        industry: 'Technology', 
        result: 'Complete rebrand resulting in 150% increase in brand recognition',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop'
      },
      { 
        name: 'EcoLiving', 
        industry: 'Sustainability', 
        result: 'New identity launch driving 200% social engagement growth',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop'
      },
      { 
        name: 'FinanceHub', 
        industry: 'FinTech', 
        result: 'Brand refresh achieving 80% positive sentiment increase',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
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
        name: 'FashionForward', 
        industry: 'E-commerce', 
        result: '500% growth in organic reach within 6 months',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop'
      },
      { 
        name: 'HealthyLife', 
        industry: 'Wellness', 
        result: '10K to 250K followers in one year',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop'
      },
      { 
        name: 'StartupX', 
        industry: 'SaaS', 
        result: '3x increase in qualified leads from social',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
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
        name: 'B2B Solutions', 
        industry: 'Enterprise', 
        result: '400% increase in qualified leads',
        image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop'
      },
      { 
        name: 'CourseCreator', 
        industry: 'Education', 
        result: '$2M in course sales from funnel campaigns',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop'
      },
      { 
        name: 'ConsultingPro', 
        industry: 'Professional Services', 
        result: '60% reduction in cost per acquisition',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop'
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
        name: 'LuxuryBrand', 
        industry: 'Fashion', 
        result: 'AR try-on feature increasing conversions by 250%',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
      },
      { 
        name: 'FurnitureCo', 
        industry: 'Home Decor', 
        result: 'Room visualization reducing returns by 40%',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop'
      },
      { 
        name: 'BeverageBrand', 
        industry: 'FMCG', 
        result: 'Viral AR campaign with 5M+ interactions',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop'
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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />
        <div className="absolute inset-0 bg-background/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
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
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
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
                  className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={client.image}
                      alt={`${client.name} project`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    
                    {/* Industry badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary backdrop-blur-sm">
                        {client.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{client.result}</p>
                    
                    {/* View Project link */}
                    <div className="mt-4 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
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
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how we can help transform your brand with our {service.title.toLowerCase()} expertise.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-full overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Start a Conversation</span>
              <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
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