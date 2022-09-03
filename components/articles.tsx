import React from 'react';
import type { ReactElement } from 'react';

// components
import BlogPostsCard from './blogpostsCard';

// utils
import { posts } from '../utils/posts';

const Articles = (): ReactElement => {
  return (
    <div className='container mx-auto my-20'>
      <section className=' px-8'>
        <div className=''>
          <h3 className='leading-relaxed text-xs uppercase font-light mb-8'>
            Articles.
          </h3>
        </div>

        <section>
          <div className=''>
            {posts.map((post, index) => (
              <div className=''>
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
