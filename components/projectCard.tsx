import { useState } from 'react';
import type { ReactElement } from 'react';

// components
import Modal from './modal';

// styling
import styles from '../styles/projectscard.module.scss';

// icons
import { FiCode, FiLink } from 'react-icons/fi';

interface CardProps {
  item: any;
}

const ProjectCard = ({ item }: CardProps): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={styles.projects__card__container}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.card__heading}>
          <h3>{item.title}</h3>
          <p>{item.tags.join(' + ')}</p>
        </div>
        <div className={styles.card__details}>
          <div className={styles.live}>
            <FiLink />
            Live
          </div>
          <div className={styles.code}>
            <FiCode />
            Code
          </div>
        </div>
      </div>
      {open && <Modal item={item} open={open} setOpen={setOpen} />}
    </>
  );
};

export default ProjectCard;
