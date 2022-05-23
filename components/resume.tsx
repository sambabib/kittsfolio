import type { ReactElement } from 'react';
import Image from 'next/image';

// icons
import { FcFile } from 'react-icons/fc';

// styling
import styles from '../styles/resume.module.scss';

const Resume = (): ReactElement => {
  return (
    <div className={styles.resume}>
      <div className={styles.resume__container}>
        <h3>
          <a href='' target='__blank'>
            <span>
              <FcFile />
            </span>
            <p>My Resume</p>
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Resume;
