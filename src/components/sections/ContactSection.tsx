import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Instagram, Linkedin, Facebook, Send, CheckCircle, Calendar, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import RevealOnScroll from '../RevealOnScroll';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialIcons = [
  { icon: Instagram, name: 'Instagram', color: '#E4405F', delay: 0, href: 'https://instagram.com/jinanshe' },
  { icon: Facebook, name: 'Facebook', color: '#1877F2', delay: 0.1, href: 'https://facebook.com/jinanshe' },
  { icon: Linkedin, name: 'LinkedIn', color: '#0A66C2', delay: 0.2, href: 'https://linkedin.com/company/jinanshe' },
  { icon: MessageCircle, name: 'WhatsApp', color: '#25D366', delay: 0.3, href: 'https://wa.me/918433994339' },
];

const ContactSection = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
    setTimeout(() => setIsSubmitted(false), 3000);
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
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            If you want marketing that aligns with your vision and grows with your business, let's talk.
          </p>
        </RevealOnScroll>

        {/* CTA Buttons */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="#"
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
          <div className="max-w-xl mx-auto mb-20">
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
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
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

        {/* Contact Info */}
        <RevealOnScroll delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <a href="tel:+918433994339" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 84339 94339</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Nashik, Maharashtra, India</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Social Icons */}
        <RevealOnScroll delay={0.3}>
          <div className="flex items-center justify-center gap-4 mb-16">
            {socialIcons.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, backgroundColor: social.color }}
                className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-white transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </RevealOnScroll>

        {/* Footer info */}
        <RevealOnScroll delay={0.4}>
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