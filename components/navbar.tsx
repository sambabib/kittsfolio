import type { ReactElement } from 'react';

// styles
import styles from '../styles/navbar.module.scss';

// icons
import { FiSend } from 'react-icons/fi';

const Navbar = (): ReactElement => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo__container}>
        <p>aa.</p>
      </div>
      <div className={styles.nav__items}>
        <ul>
          <li>About</li>
          <li>Work & Stuff</li>
          <li>Articles</li>
          <li>Resume</li>
        </ul>
      </div>
      <div className={styles.nav__cta}>
        <button type='button'>
          <FiSend /> Connect with me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
