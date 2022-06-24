import Head from 'next/head';
import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';

// components
import Layout from '../components/layout';

// styles
import styles from '../styles/about.module.scss';

const About = (): ReactElement => {
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
      <AnimatePresence exitBeforeEnter>
        <Head>
          <title>Kite | Folio - About</title>
          <meta name='description' content='Kittsfolio About page' />
        </Head>
        <div className={styles.about}>
          <motion.div className='w-full h-full'>
            <motion.h2
              className={cx(styles.about__container)}
              variants={container}
              initial='initial'
              animate='animate'
            >
              About.
            </motion.h2>
            <section className='container mx-auto relative w-full h-full'>
              <motion.span
                className='absolute left-0 bottom-0 w-1/3 text-4xl'
                variants={secondItem}
                initial='initial'
                animate='animate'
              >
                Away from building really cool web apps that scale with
                Javascript, Typescript, React, Nextjs, Vue. I also write some
                Flutter/Dart.
              </motion.span>

              <motion.span
                className='absolute bottom-0 right-0 text-right w-1/2 text-4xl'
                variants={secondItem}
                initial='initial'
                animate='animate'
              >
                I have worked as a <span>Fullstack developer</span> building
                enterprise software, an e-learning app, CMS to manage it&lsquo;s
                content. I hope to wrap up a Solidity course in the coming
                months (yay web3!)
              </motion.span>

              <motion.span
                className='absolute right-6 top-4 w-1/2 text-4xl'
                variants={secondItem}
                initial='initial'
                animate='animate'
              >
                When I&lsquo;m not writing code, I&lsquo;m fan-boying Lebron
                James, listening to some pretty decent music, having a good
                laugh with sitcoms, <span>eating oreo</span> or painting
                rainbows in the sky.
              </motion.span>
            </section>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
