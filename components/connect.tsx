import type { ReactElement } from 'react';
import Image from 'next/image';
import LinkedIn from '../public/assets/linkedin.png';
import Github from '../public/assets/github.png';
import Outlook from '../public/assets/outlook.png';

// styling
import styles from '../styles/connect.module.scss';

interface connectProps {
  setHover: any;
}

const Connect = ({ setHover }: connectProps): ReactElement => {
  return (
    <div
      className={styles.connect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
      <div className={styles.connect__container}>
        <ul>
          <li>
            <a href='http://www.linkedin.com/in/adekite' target='__blank'>
              <span>
                <Image src={LinkedIn} alt='linkedin' width={20} height={20} />
              </span>
              LinkedIn
            </a>
          </li>
          <li>
            <a href='mailto:adekyte@hotmail.com' target='__blank'>
              <span>
                <Image src={Outlook} alt='outlook' width={20} height={20} />
              </span>
              Outlook
            </a>
          </li>
          <li>
            <a href='http://www.github.com/sambabib' target='__blank'>
              <span>
                <Image src={Github} alt='github' width={20} height={20} />
              </span>
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Connect;
