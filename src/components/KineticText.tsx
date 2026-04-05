import { motion } from 'framer-motion';

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const KineticText = ({ text, className = '', delay = 0, staggerDelay = 0.04 }: KineticTextProps) => {
  const words = text.split(' ');

  // On mobile, render static text to avoid overflow clipping and long animation delays
  if (isMobile) {
    return <span className={`inline-block ${className}`}>{text}</span>;
  }

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
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
