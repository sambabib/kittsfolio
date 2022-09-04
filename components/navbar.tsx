import React from 'react';
import type { ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import classNames from 'classnames/bind';

// styles
import styles from '../styles/navbar.module.scss';

const Navbar = (): ReactElement => {
  let cx = classNames.bind(styles);

  return (
    <AnimatePresence>
      <nav className='h-56 container mx-auto mt-16 mb-12 flex flex-col gap-12 lg:flex lg:flex-row lg:justify-between'>
        <Link href='/' passHref>
          <div className=''>
            <span className='text-sm uppercase !leading-none'>
              adekite <br /> akala
            </span>
          </div>
        </Link>

        <div className={cx('', styles.nav__content)}>
          <span className='uppercase text-sm lg:text-xs'>Menu</span>
          <ul className='mt-1 flex flex-col gap-1'>
            <li className='uppercase text-xs'>
              {' '}
              <span>01</span>
              <span className={styles.span__line}></span>Work
            </li>
            <li className='uppercase text-xs'>
              {' '}
              <span>02</span>
              <span className={styles.span__line}></span>Articles
            </li>
            <li className='uppercase text-xs'>
              {' '}
              <span>03</span>
              <span className={styles.span__line}></span>Connect with me
            </li>
          </ul>
        </div>
      </nav>
    </AnimatePresence>
  );
};

export default Navbar;
