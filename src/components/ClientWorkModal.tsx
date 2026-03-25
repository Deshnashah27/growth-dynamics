import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ClientWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: {
    name: string;
    industry: string;
    result: string;
    image: string;
    images?: string[];
    description?: string[];
    link?: string;
  } | null;
}

const ClientWorkModal = ({ isOpen, onClose, client }: ClientWorkModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get image array - prioritize images array if it exists, otherwise use single image
  const images = client?.images && client.images.length > 0 ? client.images : (client?.image ? [client.image] : []);
  const hasMultipleImages = images.length > 1;

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (!isOpen || !hasMultipleImages) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isOpen, hasMultipleImages, images.length]);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!client) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/90 backdrop-blur-md z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-6xl mx-auto bg-card rounded-3xl border border-border/50 overflow-hidden flex flex-col md:flex-row">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Image section */}
              <div className="w-full md:w-1/2 h-64 md:h-full relative bg-muted flex items-center justify-center p-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`${client.name} image ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-full max-h-full object-contain"
                  />
                </AnimatePresence>

                {/* Navigation arrows - only show if multiple images */}
                {hasMultipleImages && (
                  <>
                    <motion.button
                      onClick={goToPrevImage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      onClick={goToNextImage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </>
                )}

                {/* Image indicators */}
                {hasMultipleImages && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {Array.from({ length: images.length }).map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/40'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-background/90 text-foreground border border-border/50">
                    {client.industry}
                  </span>
                  
                  <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
                    {client.name}
                  </h2>
                  
                  <p className="text-primary font-medium mb-6">{client.result}</p>
                  
                  {client.description && client.description.length > 0 && (
                    <div className="space-y-4">
                      {client.description.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                  
                  {client.link && (
                    <motion.a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <span>Try AR Filter</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ClientWorkModal;
