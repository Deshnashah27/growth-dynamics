import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ClientWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: {
    name: string;
    industry: string;
    result: string;
    image: string;
    description?: string[];
  } | null;
}

const ClientWorkModal = ({ isOpen, onClose, client }: ClientWorkModalProps) => {
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
              <div className="w-full md:w-1/2 h-64 md:h-full relative bg-muted flex items-center justify-center p-8">
                <motion.img
                  src={client.image}
                  alt={`${client.name} logo`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Content section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
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
                  
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 px-6 py-3 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Close
                  </motion.button>
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
