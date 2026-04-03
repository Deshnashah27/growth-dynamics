import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const jinansheLogoImg = '/assets/logos/jinanshe-logo.png';
import { scrollToSection } from '@/lib/scrollToSection';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const serviceLinks = [
  { name: 'Brand Foundation', href: '/services/brand-foundation' },
  { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
  { name: 'Growth Systems', href: '/services/sales-lead-generation' },
  { name: 'AR Experiences', href: '/services/ar-experiences' },
];

// Hash-based in-page sections
const sectionLinks = [
  { name: 'Process', sectionId: 'process' },
  { name: 'Contact', sectionId: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.9)']
  );

  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  // Scroll handler — also closes mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setHasScrolled(scrolled);
      if (scrolled) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  // Navigate to section (cross-page or in-page)
  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 350);
    }
  };

  // Active state helpers
  const isServicePage = location.pathname.startsWith('/services/');
  const isAboutPage = location.pathname === '/about';

  return (
    <motion.nav
      style={isOpen ? { backgroundColor: 'rgba(10, 10, 10, 1)' } : { backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? 'backdrop-blur-xl' : ''
      }`}
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border"
      />

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <img
                src={jinansheLogoImg}
                alt="Jinanshé"
                className="h-12 md:h-16 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`relative text-sm font-medium group flex items-center gap-1 outline-none transition-colors duration-300 ${
                      isServicePage ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${isServicePage ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 bg-background/95 backdrop-blur-xl border-border animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {serviceLinks.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link
                        to={service.href}
                        className={`w-full cursor-pointer transition-colors ${
                          location.pathname === service.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* About page link */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/about"
                className={`relative text-sm font-medium group transition-colors duration-300 ${
                  isAboutPage ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${isAboutPage ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            </motion.div>

            {/* In-page section links */}
            {sectionLinks.map((item, index) => (
              <motion.a
                key={item.name}
                href={`/#${item.sectionId}`}
                onClick={(e) => handleSectionClick(e, item.sectionId)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}

            <motion.a
              href="/#contact"
              onClick={(e) => handleSectionClick(e, 'contact')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-display font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'var(--shadow-glow)' }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            ref={hamburgerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          id="mobile-nav"
          role="navigation"
          aria-label="Mobile navigation"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 space-y-4">
            <div className="space-y-2">
              <span className="text-muted-foreground text-sm font-medium">Services</span>
              <div className="pl-4 space-y-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={() => setIsOpen(false)}
                    className={`block transition-colors text-base ${
                      location.pathname === service.href ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium transition-colors ${
                isAboutPage ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </Link>

            {sectionLinks.map((item) => (
              <a
                key={item.name}
                href={`/#${item.sectionId}`}
                onClick={(e) => handleSectionClick(e, item.sectionId)}
                className="block text-foreground hover:text-primary transition-colors text-lg font-medium cursor-pointer"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/#contact"
              onClick={(e) => handleSectionClick(e, 'contact')}
              className="block w-full mt-4 px-5 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-full text-center cursor-pointer"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
