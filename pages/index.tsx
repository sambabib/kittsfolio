import Head from 'next/head';
import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// components
import Layout from '../components/layout';
import Fab from '../components/fab';

// styles
import styles from '../styles/home.module.scss';

const Home = () => {
  const backgroundText: {} = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
    },
  };

  const container: {} = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.2,
        delay: 1.6,
      },
    },
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.2,
    },
  };

  const stackHeading: {} = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.2,
        delay: 1.2,
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
        <div className={styles.home}>
          <section className={styles.home__section}>
            <article>
              <motion.section
                variants={container}
                className={styles.about__paragraph}
              >
                <motion.h2
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 2,
                  }}
                >
                  My name&lsquo;s Adekite.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 1.7,
                  }}
                >
                  I am a <span>frontend engineer</span> living in Lagos,
                  Nigeria. I love <span>sitcoms</span> & <span>sports</span>.
                  I&lsquo;m also really fascinated by web3, smart doggos, art &
                  gym heads. Yo hablo un poco de <span>espano</span>l!
                </motion.p>
              </motion.section>
            </article>
            <Fab />
          </section>
          <motion.section
            initial='hidden'
            animate='visible'
            variants={backgroundText}
            className={styles.home__background}
          >
            <p>Hola! Es mi portfolio.</p>
          </motion.section>
        </div>
      </AnimatePresence>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
