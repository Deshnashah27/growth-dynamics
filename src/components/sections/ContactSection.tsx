import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Instagram, Mail, Linkedin, MessageCircle, Facebook, Send, CheckCircle, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import RevealOnScroll from '../RevealOnScroll';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useToast } from '@/hooks/use-toast';

// Replace these with your actual EmailJS credentials from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialIcons = [
  { icon: Instagram, name: 'Instagram', color: '#E4405F', delay: 0, href: 'https://www.instagram.com/jinanshe_ar/' },
  { icon: Mail, name: 'Email', color: '#D44638', delay: 0.1, href: 'mailto:info.jinanshe@gmail.com' },
  { icon: Linkedin, name: 'LinkedIn', color: '#0A66C2', delay: 0.2, href: 'https://www.linkedin.com/company/jinansh%C3%A9-marketing/' },
  { icon: MessageCircle, name: 'WhatsApp', color: '#25D366', delay: 0.3, href: 'https://wa.me/918433994339' },
  { icon: Facebook, name: 'Facebook', color: '#1877F2', delay: 0.4, href: 'https://www.facebook.com/people/Jinansh%C3%A9-Marketing/61581153410106/' },
];

const ContactSection = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: 'info.jinanshe@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: 'var(--gradient-radial)' }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-40"
          style={{ background: 'var(--gradient-glow)' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Ready to build a brand, <span className="text-gradient">not just content?</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            If you want marketing that aligns with your vision and grows with your business, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
            <a href="tel:+918433994339" className="flex items-center gap-2 hover:text-primary transition-colors">
              📞 +91 84339 94339
            </a>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">📍 Nashik, Maharashtra, India</span>
          </div>
        </RevealOnScroll>

        {/* CTA Buttons */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-full overflow-hidden transition-all duration-300"
            >
              <Calendar className="relative z-10 w-5 h-5" />
              <span className="relative z-10">Schedule a Strategy Call</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-foreground"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.a>

          </div>
        </RevealOnScroll>

        {/* Contact Form */}
        <RevealOnScroll delay={0.2}>
          <div id="contact-form" className="max-w-xl mx-auto mb-20">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="bg-card/50 border-border/50 focus:border-primary/50 transition-colors min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isLoading || isSubmitted}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 mr-2 border-2 border-current border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </div>
        </RevealOnScroll>

        {/* 3D Orbiting Social Icons */}
        <RevealOnScroll delay={0.3}>
          <div className="relative h-[300px] md:h-[400px] flex items-center justify-center perspective-1000">
            {/* Central glow */}
            <div className="absolute w-24 h-24 rounded-full bg-primary/20 blur-xl" />

            {/* Orbit path (decorative) */}
            <div className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border border-border/20" />

            {/* Social icons */}
            {socialIcons.map((social, index) => {
              const angle = (index / socialIcons.length) * 360;
              const radius = 120;
              const isHovered = hoveredIcon === social.name;

              return (
                <motion.div
                  key={social.name}
                  className="absolute"
                  initial={{
                    x: Math.cos((angle * Math.PI) / 180) * radius,
                    y: Math.sin((angle * Math.PI) / 180) * radius,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    x: Math.cos(((angle + (Date.now() / 50)) * Math.PI) / 180) * radius,
                    y: Math.sin(((angle + (Date.now() / 50)) * Math.PI) / 180) * radius,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    opacity: { delay: social.delay, duration: 0.5 },
                    scale: { delay: social.delay, duration: 0.5 },
                  }}
                  style={{
                    animation: `orbit ${20 + index * 2}s linear infinite`,
                    animationDelay: `${-index * 4}s`,
                  }}
                  onHoverStart={() => setHoveredIcon(social.name)}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="relative cursor-pointer"
                    >
                      <motion.div
                        animate={{
                          backgroundColor: isHovered ? social.color : 'hsl(var(--card))',
                          boxShadow: isHovered
                            ? `0 0 30px ${social.color}80`
                            : '0 0 0 transparent',
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-border/50 flex items-center justify-center"
                      >
                        <social.icon
                          className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-300"
                          style={{ color: isHovered ? '#fff' : 'hsl(var(--muted-foreground))' }}
                        />
                      </motion.div>

                      {/* Platform name tooltip */}
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-medium whitespace-nowrap text-foreground"
                      >
                        {social.name}
                      </motion.span>
                    </motion.div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Footer info */}
        <RevealOnScroll delay={0.5}>
          <div className="text-center mt-16 pt-16 border-t border-border/30">
            <p className="text-muted-foreground text-sm">
              © 2026 Jinanshé. All rights reserved.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ContactSection;
