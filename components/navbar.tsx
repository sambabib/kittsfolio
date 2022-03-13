import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// styles
import styles from '../styles/navbar.module.scss';

// icons
import { FiSend } from 'react-icons/fi';

const Navbar = (): ReactElement => {
  return (
    <AnimatePresence>
      <motion.nav
        className={styles.nav}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 1.6,
        }}
      >
        <div className={styles.logo__container}>
          <Link href='/' passHref>
            <p>aa.</p>
          </Link>
        </div>
        <div className={styles.nav__items}>
          <ul>
            <Link href='/about' passHref>
              <li>About</li>
            </Link>
            <Link href='/work' passHref>
              <li>Work & Stuff</li>
            </Link>
            <Link href='/articles' passHref>
              <li>Articles</li>
            </Link>
            <Link href='/resume' passHref>
              <li>Resume</li>
            </Link>
          </ul>
        </div>
        <div className={styles.nav__cta}>
          <button type='button'>
            <FiSend /> Connect with me
          </button>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
