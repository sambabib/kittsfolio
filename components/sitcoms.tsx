import type { ReactElement } from 'react';

// styles
import styles from '../styles/sitcoms.module.scss';

interface SitcomProps {
  num: string;
  title: string;
  type: string;
}

const Sitcoms = ({ num, title, type }: SitcomProps): ReactElement => {
  return (
    <div className={styles.sitcoms}>
      <div className={styles.sitcoms__container}>
        <div className={styles.num__and__title}>
          <p className={styles.num}>{num}</p>
          <p className={styles.title}>{title}</p>
        </div>
        <p className={styles.type}>{type}</p>
      </div>
    </div>
  );
};

export default Sitcoms;
