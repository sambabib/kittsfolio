import Head from 'next/head';
import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';

// components
import Layout from '../components/layout';
import Fab from '../components/fab';
// import AnimatedText from '../components/animatedtext';

// styles
import styles from '../styles/home.module.scss';

const Home = () => {
  let cx = classNames.bind(styles);

  const container = {
    initial: { y: 100 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const secondItem = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <>
      <Head>
        <title>Kite | Folio</title>
        <meta name='description' content='Kittsfolio Homepage' />
      </Head>
      <AnimatePresence>
        <motion.div
          className={cx(styles.home)}
          variants={container}
          initial='initial'
          animate='animate'
        >
          <section className={cx('container', styles.home__section)}>
            <article>
              <motion.section className='flex flex-col absolute left-0 bottom-[7rem]'>
                <motion.span
                  className='text-4xl'
                  variants={item}
                  initial='initial'
                  animate='animate'
                >
                  Hi.
                </motion.span>
                <motion.span
                  className='text-4xl'
                  variants={secondItem}
                  initial='initial'
                  animate='animate'
                >
                  My name&lsquo;s <br /> Adekite.
                </motion.span>
              </motion.section>

              <motion.section className='relative w-full h-full'>
                <motion.span
                  className='text-4xl w-1/4 absolute right-0 text-right'
                  variants={secondItem}
                  initial='initial'
                  animate='animate'
                >
                  I am a <span>frontend engineer</span> living in Lagos,
                  Nigeria.
                </motion.span>

                <motion.span
                  className='text-4xl w-1/4 absolute left-16'
                  variants={secondItem}
                  initial='initial'
                  animate='animate'
                >
                  I love <span>sitcoms</span> and <span>sports</span>. I&lsquo;m
                  oddly fascinated by funny videos on the internet, smart
                  doggos, art and gym heads.
                </motion.span>

                <motion.span
                  className='text-4xl absolute bottom-0 left-1/2 right-1/2 w-2/4'
                  variants={secondItem}
                  initial='initial'
                  animate='animate'
                >
                  Yo hablo un poco de espanol.
                </motion.span>
              </motion.section>
            </article>
            <Fab />
          </section>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
