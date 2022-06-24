import React, { useState } from 'react';
import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import classNames from 'classnames/bind';

// styles
import styles from '../styles/navbar.module.scss';

// icons
import { MdOutlineArrowDropDown } from 'react-icons/md';
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

  let cx = classNames.bind(styles);

  return (
    <AnimatePresence>
      <motion.nav
        className={cx('container', styles.nav)}
        onMouseLeave={() => {
          setHover(false);
          setShowResume(false);
        }}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -72, opacity: 0 }}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        <div className={cx('text-4xl', styles.logo__container)}>
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
              <li>Work</li>
            </Link>
            <Link href='/articles' passHref>
              <li>Articles</li>
            </Link>

            <li onMouseEnter={() => setShowResume(true)}>Resume</li>
          </ul>
        </div>
        <div className={styles.nav__cta}>
          <button type='button' onMouseEnter={() => setHover(true)}>
            Connect with me <MdOutlineArrowDropDown size={35} />
          </button>
        </div>

        {hover && <Connect setHover={setHover} />}
        {showResume && <Resume />}
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
