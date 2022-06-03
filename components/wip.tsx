import type { ReactElement } from 'react';

// icons
import { FiBatteryCharging } from 'react-icons/fi';

// styles
import styles from '../styles/wip.module.scss';

const Wip = (): ReactElement => {
  return (
    <div className={styles.wip}>
      <div className={styles.icon}>
        <FiBatteryCharging size={100} />
      </div>
      <div className={styles.wip__text}>
        <p>
          {' '}
          The mobile version of my portfoio is a WIP a.k.a CHARGING. You can only
          view my portfolio on desktop at the moment.
        </p>
      </div>
    </div>
  );
};

export default Wip;
