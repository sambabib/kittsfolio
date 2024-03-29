import React from 'react';
import type { ReactElement } from 'react';
import { projects } from '../utils/projects';
import classNames from 'classnames/bind';

// components
import Layout from './layout';

// utils
import ProjectCard from './projectCard';

// styles
import styles from '../styles/work.module.scss';

const Work = (): ReactElement => {
  let cx = classNames.bind(styles);

  return (
    <div id='work' className='container mx-auto my-20'>
      <section className=''>
        <div className=''>
          <h3 className='leading-relaxed text-xs uppercase font-light mb-8'>
            Work.
          </h3>
        </div>

        <section className='container mx-auto'>
          <div className={cx('max-w-full mx-auto', styles.project__grid)}>
            {projects.map((project, index) => (
              <div key={index} className={styles.grid__card}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

Work.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Work;
