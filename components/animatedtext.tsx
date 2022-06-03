import type { ReactElement } from 'react';
import { motion } from 'framer-motion';

// styles
import styles from '../styles/animatedtext.module.scss';

interface TextProps {
  title: string;
}

const textContain: {} = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const animateText: {} = {
  initial: { y: 50 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedText = ({ title }: TextProps): ReactElement => {
  return (
    <motion.div
      className={styles.animated__text}
      variants={textContain}
      initial='initial'
      animate='animate'
    >
      {[...title].map((letter) => (
        <motion.span className={styles.letters} variants={animateText}>
          {letter.split('').join(' ')}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
