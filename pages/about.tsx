import Head from 'next/head';
import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// components
import Layout from '../components/layout';

// styles
import styles from '../styles/about.module.scss';

const stagger: {} = {
  animate: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const fadeAbout: {} = {
  hidden: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 1.4,
    },
  },
};

const About = (): ReactElement => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <title>Kite | Folio - About</title>
        <meta name='description' content='Kittsfolio About page' />
      </Head>
      <div className={styles.about}>
        <motion.div className={styles.about__container} variants={stagger}>
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 2,
            }}
          >
            About.
          </motion.h2>
          <section className={styles.section}>
            <motion.p variants={fadeAbout} initial='hidden' animate='visible'>
              Okay. You already know a number of things about me. Here&lsquo;s
              some more stuff: <br />
            </motion.p>
            <motion.p variants={fadeAbout} initial='hidden' animate='visible'>
              Away from building really cool web apps that scale with
              Javascript, Typescript, React, Nextjs, Vue. I also write some
              Flutter/Dart. <br /> I have worked as a{' '}
              <span>Fullstack developer</span> building an erp software, an
              e-learning app as well as CMS to manage it&lsquo;s content. I hope
              to wrap up a Solidity course in the coming months (yay web3!){' '}
              <br /> When I&lsquo;m not writing code, I&lsquo;m fan-boying
              Lebron James, listening to some pretty decent music, having a good
              laugh with sitcoms, <span>eating oreo</span> or painting rainbows
              in the sky.
            </motion.p>
          </section>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
