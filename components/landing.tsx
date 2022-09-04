import React from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames/bind';

// componrnts
import Layout from './layout';

// styles
import styles from '../styles/home.module.scss';

const Landing = (): ReactElement => {
  let cx = classNames.bind(styles);

  return (
    <section className='container mx-auto'>
      <section className='my-12'>
        <div className=''>
          <h3 className='leading-relaxed text-xs uppercase font-light mb-1'>
            About.
          </h3>
          <p className='leading-relaxed text-sm font-light md:w-[300px]'>
            I am a software engineer focusing on creating intuitive experiences
            on the web that scale.
          </p>
        </div>
      </section>

      <section className='my-24'>
        <div className='flex flex-col w-full'>
          <span className='text-sm lg:text-xs uppercase w-full text-right'>
            Frontend Developer
          </span>
          <span className='text-sm lg:text-xs uppercase w-full text-right'>
            Technical Writer
          </span>
          <span className='text-sm lg:text-xs uppercase w-full text-right'>
            Flutter Developer
          </span>
        </div>
      </section>
    </section>
  );
};

Landing.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Landing;
