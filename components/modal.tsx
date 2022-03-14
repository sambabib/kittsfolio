import type { ReactElement } from 'react';

// styles
import styles from '../styles/modal.module.scss';

// icons
import { FiCode, FiLink, FiX, FiArrowLeft } from 'react-icons/fi';

interface ModalProps {
  item: any;
  open: boolean;
  setOpen: any
}

const Modal = ({ item, open, setOpen }: ModalProps): ReactElement => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__container}>
        <button className={styles.close__button} onClick={() => setOpen(!open)}>
          <FiArrowLeft />
        </button>
        <div className={styles.inner__modal}>
          <div className={styles.heading}>
            <h3>{item.title}</h3>
          </div>
          <div className={styles.description}>
            <h4>Description:</h4>
            <p>{item.description}</p>
          </div>

          <div className={styles.tag}>
            <h4>Stack:</h4>
            <div className={styles.tag__item}>
              {item.tags.map((tag: any, index: any) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          </div>

          <div className={styles.code}>
            <h4>Github:</h4>
            <a href={item.code} target='__blank'>
              <FiCode className={styles.icon} /> {item.code}
            </a>
          </div>
        </div>

        <a href={item.live} target='__blank'>
          <div className={styles.live}>
            <FiLink /> Live Demo
          </div>
        </a>
      </div>
    </div>
  );
};

export default Modal;
