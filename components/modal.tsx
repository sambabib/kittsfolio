import type { ReactElement } from 'react';
import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';

// styles
import styles from '../styles/modal.module.scss';

// icons
import { FiCode, FiLink, FiX, FiArrowLeft } from 'react-icons/fi';

interface ModalProps {
  item: any;
  open: boolean;
  setOpen: any;
}

const Modal = ({ item, open, setOpen }: ModalProps): ReactElement => {
  let cx = classNames.bind(styles);

  return (
    <AnimatePresence>
      <motion.div
        className={cx('h-screen fixed right-0 bottom-0 w-1/3', styles.modal)}
        initial={{ x: '100%' }}
        exit={{ x: '100%' }}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <div
          className={cx(
            'h-full flex flex-col justify-between',
            styles.modal__container
          )}
        >
          <button
            className={styles.close__button}
            onClick={() => setOpen(!open)}
          >
            <FiArrowLeft />
          </button>

          <div
            className={cx(
              'flex flex-col justify-between items-start p-8 relative top-16',
              styles.inner__modal
            )}
          >
            <div className={styles.heading}>
              <h3>{item.title}</h3>
            </div>

            <div className={styles.description}>
              <h4 className='text-lg font-semibold pb-5'>Description:</h4>
              <p>{item.description}</p>
            </div>

            <div className={styles.tag}>
              <h4 className='text-lg font-semibold pb-5'>Stack:</h4>
              <div className={styles.tag__item}>
                {item.tags.map((tag: any, index: any) => (
                  <p className='text-sm' key={index}>
                    {tag}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.code}>
              <h4 className='text-lg font-semibold pb-5'>Github:</h4>
              <a href={item.code} target='__blank'>
                <FiCode className={styles.icon} /> {item.code}
              </a>
            </div>
          </div>

          <a href={item.live} target='__blank'>
            <div
              className={cx(
                'flex items-center justify-center gap-4',
                styles.live
              )}
            >
              <FiLink /> <p className='text-white'>Live Demo</p>
            </div>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
