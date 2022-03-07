import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// components
import Layout from '../components/layout';
import Music from '../components/music';
import Sitcoms from '../components/sitcoms';

// styles
import styles from '../styles/about.module.scss';

// utils
import { music } from '../utils/musicUtils';
import { sitcoms } from '../utils/sitcomsUtils';

const About = (): ReactElement => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className={styles.about}>
        <div className={styles.about__container}>
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 2.6,
            }}
          >
            About
          </motion.h2>
          <section className={styles.section}>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 2.4,
              }}
            >
              Okay. You already know a number of things about me. Here&lsquo;s some
              more stuff: <br />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 2,
              }}
            >
              Away from building really cool web apps that scale with
              Javascript, Typescript, React, Nextjs, Vue. I also write some
              Flutter/Dart. <br /> I have worked as a{' '}
              <span>Fullstack developer</span> building an erp software, an
              e-learning app as well as CMS to manage it&lsquo;s content. I hope to
              wrap up a Solidity course in the coming months (yay web3!) <br />{' '}
              When I&lsquo;m not writing code, I&lsquo;m fan-boying Lebron James, listening
              to some pretty decent music, having a good laugh with sitcoms,{' '}
              <span>eating oreo</span> or painting rainbows in the sky.
            </motion.p>
          </section>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 1.8,
            }}
            className={styles.my__shit__intro}
          >
            <h4>
              It&lsquo;s difficult to share all the things I absolutely love on one
              page, so here are two of my favorite albums & two of my favorite
              tv shows:
            </h4>
          </motion.div>

          <section className={styles.my__shit}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
                delay: 3,
              }}
              className={styles.my__music__container}
            >
              {music.map((item) => (
                <Music
                  key={item.num}
                  num={item.num}
                  title={item.title}
                  link={item.link}
                  type={item.type}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
                delay: 3.2,
              }}
              className={styles.my__sitcoms__container}
            >
              {sitcoms.map((sitcom) => (
                <Sitcoms
                  key={sitcom.num}
                  num={sitcom.num}
                  title={sitcom.title}
                  type={sitcom.type}
                />
              ))}
            </motion.div>
          </section>

          <section className={styles.connect}>
            <motion.h3
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
                delay: 3.5,
              }}
            >
              Think I&lsquo;m awesome? <br />{' '}
              <motion.span
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1,
                  delay: 3.6,
                }}
              >
                Connect with me <FiArrowRight className={styles.icon} />
              </motion.span>
            </motion.h3>
          </section>
        </div>

        <section className={styles.about__background}>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ ease: 'easeInOut', delay: 1, duration: 1 }}
          >
            Como Estas?
          </motion.p>
        </section>
      </div>
    </AnimatePresence>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
