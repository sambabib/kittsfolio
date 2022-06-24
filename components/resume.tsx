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
        <span className='px-8'>
          <a
            href='https://drive.google.com/file/d/1i0eSKoyhVLLDLMyDuZwV49yKDH026Gad/view?usp=sharing'
            target='__blank'
          >
            <span>
              <FcFile />
            </span>
            <p>My Resume</p>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Resume;
