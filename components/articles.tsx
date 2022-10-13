import React from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames/bind';

// components
import BlogPostsCard from './blogpostsCard';

// utils
import { posts } from '../utils/posts';

// styles
import styles from '../styles/articles.module.scss';

const Articles = (): ReactElement => {
  let cx = classNames.bind(styles);

  return (
    <div id='articles' className='container mx-auto my-20'>
      <section className=''>
        <div className=''>
          <h3 className='leading-relaxed text-xs uppercase font-light mb-8'>
            Articles.
          </h3>
        </div>

        <section className=''>
          <div className={cx('flex flex-row flex-wrap justify-between items-center')}>
            {posts.map((post, index) => (
              <div key={index} className={styles.articles__card}>
                <BlogPostsCard post={post} />
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Articles;
