import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

// styles
import styles from '../styles/preloader.module.scss';

interface PreloaderProps {
  setLoading: any;
}

const Preloader = ({ setLoading }: PreloaderProps): ReactElement => {
  const [progress, setProgress] = useState<any>(0);

  let cx = classNames.bind(styles);

  //   const animateNumber = {
  //     initial: { y: 100, opacity: 0 },
  //     animate: {
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         duration: 1,
  //         ease: [0.6, 0.05, -0.01, 0.9],
  //       },
  //     },
  //   };

  useEffect(() => {
    if (progress < 100) {
      const timeout = setInterval(
        () => setProgress((prev: any) => (prev += 2)),
        50
      );
      return () => clearInterval(timeout);
    }

    if (progress === 100) {
      const exitLoader = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(exitLoader);
    }
  }, [progress]);

  return (
    <>
      <div className={cx('', styles.preloader)}>
        <div className='container mx-auto mt-16'>
          <span className='text-sm text-white uppercase !leading-none'>
            adekite <br /> akala
          </span>
        </div>

        <div className={cx('', styles.preloader__progress)}>
          <span className='text-white text-xs uppercase'>Loading...</span>
          <div className={cx(``, styles.progress__bar)}>
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: '#eee',
                transition: 'width 0.5s cubic-bezier(0.4, 1, 0.8, 1)',
              }}
            ></div>
            <motion.span
              // variants={animateNumber}
              // initial='initial'
              // animate='animate'
              className={cx('text-sm', styles.progress__number)}
            >
              {progress}%
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
