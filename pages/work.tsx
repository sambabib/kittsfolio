import Head from 'next/head';
import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';

// components
import Layout from '../components/layout';
import ProjectCard from '../components/projectCard';
import Wip from '../components/wip';

// styling
import styles from '../styles/work.module.scss';

// utils
import { projectData } from '../utils/projects';
import { viewportContext } from '../utils/viewportlayout';

const Work = (): ReactElement => {
  const { width }: any = useContext(viewportContext);

  return (
    <>
      {width <= 969 ? (
        <Wip />
      ) : (
        <AnimatePresence>
          <Head>
            <title>Kite | Folio - Work</title>
            <meta name='description' content='Kittsfolio Work page' />
          </Head>
          <motion.div className={styles.work}>
            <div className={styles.work__container}>
              <h2>Work & Stuff.</h2>

              <div className={styles.work__projects}>
                {projectData.map((item) => (
                  <ProjectCard item={item} key={item.id} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

Work.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Work;
