import { motion } from 'framer-motion';

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const KineticText = ({ text, className = '', delay = 0, staggerDelay = 0.04 }: KineticTextProps) => {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em] overflow-hidden">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              className="inline-block"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: delay + (wordIndex * word.length + charIndex) * staggerDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default KineticText;
