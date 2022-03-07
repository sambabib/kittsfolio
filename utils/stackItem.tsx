import type { ReactElement } from 'react';
import { motion } from 'framer-motion';

// styles
import styles from '../styles/stackItem.module.scss';

interface StackProps {
  title: string;
}

const StackItem = ({ title }: StackProps): ReactElement => {
  const stackContainer: {} = {
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const stackAnimation: {} = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
        delay: 0.7,
        staggerChildren: 0.35,
      },
    },
  };

  return (
    <motion.div
      layoutId='underline'
      initial='hidden'
      animate='visible'
      variants={stackContainer}
      className={styles.stack__items}
    >
      <motion.p initial='hidden' animate='visible' variants={stackAnimation}>
        {title}
      </motion.p>
    </motion.div>
  );
};

export default StackItem;
