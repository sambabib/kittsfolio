import Head from 'next/head';
import type { ReactElement } from 'react';

// components
import Layout from '../components/layout';
import ProjectCard from '../components/projectCard';

// styling
import styles from '../styles/work.module.scss';

// utils
import { projectData } from '../utils/projects';

const Work = () => {
  return (
    <>
      <Head>
        <title>Kite | Folio - Work</title>
        <meta name='description' content='Kittsfolio Work page' />
      </Head>
      <div className={styles.work}>
        <div className={styles.work__container}>
          <h2>Work & Stuff.</h2>

          <section className={styles.work__projects}>
            <h3 className={styles.title}></h3>
            {projectData.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

Work.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Work;
