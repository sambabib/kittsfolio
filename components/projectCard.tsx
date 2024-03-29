import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';

// components
import Modal from './modal';

// styling
import styles from '../styles/projectscard.module.scss';

// icons
import { FiCode, FiLink } from 'react-icons/fi';

interface CardProps {
  project: any;
}

const ProjectCard = ({ project }: CardProps): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
    
    }
  }, [open])

  return (
    <>
      <div
        className={styles.projects__card__container}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.card__heading}>
          <h3>{project.title}</h3>
          <span className='leading-relaxed'>{project.tags.join(', ')}</span>
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
      
      <div className='absolute top-0 right-0 bottom-0 h-full'>
        {open && <Modal project={project} open={open} setOpen={setOpen} />}
      </div>
    </>
  );
};

export default ProjectCard;
