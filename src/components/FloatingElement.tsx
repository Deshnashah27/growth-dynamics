import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  rotateAmount?: number;
}

const FloatingElement = ({ 
  children, 
  className = '', 
  speed = 0.5,
  rotateAmount = 5 
}: FloatingElementProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-rotateAmount, rotateAmount]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
