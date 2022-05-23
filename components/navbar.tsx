import React, { useState } from 'react';
import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// styles
import styles from '../styles/navbar.module.scss';

// icons
import { FiArrowDownRight } from 'react-icons/fi';
import Connect from '../components/connect';
import Resume from '../components/resume';

interface navProps {
  onMouseEnter?: () => void;
}

const Navbar: React.FC<navProps> = ({
  onMouseEnter,
}: navProps): ReactElement => {
  const [hover, setHover] = useState<boolean>(false);
  const [showResume, setShowResume] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <motion.nav
        className={styles.nav}
        onMouseLeave={() => {
          setHover(false);
          setShowResume(false);
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
              <li onMouseEnter={() => setShowResume(true)}>Resume</li>
            </Link>
          </ul>
        </div>
        <div className={styles.nav__cta}>
          <button type='button' onMouseEnter={() => setHover(true)}>
            Connect with me <FiArrowDownRight />
          </button>
        </div>

        {hover && <Connect setHover={setHover} />}
        {showResume && <Resume />}
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
