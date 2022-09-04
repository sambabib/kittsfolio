import { useEffect } from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';

// styles
import styles from '../styles/modal.module.scss';

// icons
import { FiCode, FiLink, FiGitBranch, FiArrowLeft } from 'react-icons/fi';

interface ModalProps {
  project: any;
  open: boolean;
  setOpen: any;
}

const Modal = ({ project, open, setOpen }: ModalProps): ReactElement => {
  let cx = classNames.bind(styles);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return (): any => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className={cx('h-screen fixed right-0 bottom-0 md:w-1/2 lg:w-1/3', styles.modal)}
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
          <div className='flex flex-row justify-between items-center mt-8'>
            <button
              className={styles.close__button}
              onClick={() => setOpen(!open)}
            >
              <FiArrowLeft />
            </button>

            <span className='text-sm font-semibold px-8'>Go Back</span>
          </div>

          <div className={cx('p-8 relative', styles.inner__modal)}>
            <div className={cx('font-semibold text-lg', styles.heading)}>
              <h3>{project.title}</h3>
            </div>

            <div className='flex flex-col gap-2 my-12'>
              <h4 className='text-sm font-semibold'>Description</h4>
              <p className='text-sm font-light'>{project.description}</p>
            </div>

            <div className={cx('flex flex-col gap-2 my-12', styles.tag)}>
              <h4 className='text-sm font-semibold'>Stack</h4>
              <div className='flex flex-row gap-2'>
                {project.tags.map((tag: any, index: any) => (
                  <span className='text-xs font-medium' key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={cx('flex flex-col gap-2 my-12', styles.code)}>
              <h4 className='text-sm font-semibold'>Github</h4>
              {project.code === '' ? (
                <span className='text-xs'>
                  <FiGitBranch className={styles.icon} /> Private
                </span>
              ) : (
                <a
                  className='text-xs font-semibold'
                  href={project.code}
                  target='__blank'
                >
                  <FiCode className={styles.icon} /> {project.code}
                </a>
              )}
            </div>
          </div>

          <a
            className={`${
              project.live === '' && 'cursor-not-allowed pointer-events-none'
            }`}
            href={project.live}
            target='__blank'
          >
            <div
              className={cx(
                'flex flex-row items-center justify-center gap-2',
                styles.live
              )}
            >
              {project.live === '' ? (
                <p className='text-white text-sm'>
                  This project currently lives on my local machine
                </p>
              ) : (
                <>
                  <p className='text-white text-sm'>Live Demo</p>
                  <span>
                    <FiLink />
                  </span>
                </>
              )}
            </div>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
