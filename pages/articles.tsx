import Head from 'next/head';
import type { ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';

// components
import Layout from '../components/layout';
import BlogPostsCard from '../components/blogpostsCard';

// utils
import { posts } from '../utils/posts';

// styles
import styles from '../styles/articles.module.scss';


const Articles = (): ReactElement => {
  return (
    <>
        <AnimatePresence>
          <Head>
            <title>Kite | Folio - Articles</title>
            <meta name='description' content='Kittsfolio Articles page' />
          </Head>
          <div className={styles.articles}>
            <div className={styles.articles__container}>
              <h2>Articles.</h2>

              <div className={styles.articles__posts}>
                {posts.map((item) => (
                  <BlogPostsCard item={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </AnimatePresence>
    </>
  );
};

Articles.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Articles;
