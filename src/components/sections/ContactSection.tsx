import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Instagram, Mail, Linkedin, Youtube, Facebook, Send, CheckCircle } from 'lucide-react';
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
  { icon: Instagram, name: 'Instagram', color: '#E4405F', delay: 0 },
  { icon: Mail, name: 'Email', color: '#D44638', delay: 0.1 },
  { icon: Linkedin, name: 'LinkedIn', color: '#0A66C2', delay: 0.2 },
  { icon: Youtube, name: 'YouTube', color: '#FF0000', delay: 0.3 },
  { icon: Facebook, name: 'Facebook', color: '#1877F2', delay: 0.4 },
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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Let's Connect
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Ready to <span className="text-gradient">Grow?</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Transform your brand's potential into measurable results. 
            Let's start a conversation about your growth.
          </p>
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
                </motion.div>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Footer info */}
        <RevealOnScroll delay={0.5}>
          <div className="text-center mt-16 pt-16 border-t border-border/30">
            <p className="text-muted-foreground text-sm">
              © 2024 Jinanshé. All rights reserved.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ContactSection;
