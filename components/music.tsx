import type { ReactElement } from 'react';

// styles
import styles from '../styles/music.module.scss';

interface MusicProps {
  num: string;
  title: string;
  link: string;
  type: string;
}

const Music = ({ num, title, link, type }: MusicProps): ReactElement => {
  return (
    <div className={styles.music}>
      <a href={link} target='__blank'>
        <div className={styles.music__container}>
          <div className={styles.num__and__title}>
            <p className={styles.num}>{num}</p>
            <p className={styles.title}>{title}</p>

          </div>
          <p className={styles.type}>{type}</p>
        </div>
      </a>
    </div>
  );
};

export default Music;
