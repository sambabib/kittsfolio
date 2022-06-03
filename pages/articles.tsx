import Head from 'next/head';
import type { ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';

// components
import Layout from '../components/layout';
import BlogPostsCard from '../components/blogpostsCard';
import Wip from '../components/wip';

// utils
import { posts } from '../utils/posts';
import { viewportContext } from '../utils/viewportlayout';

// styles
import styles from '../styles/articles.module.scss';


const Articles = (): ReactElement => {
  const { width }: any = useContext(viewportContext);

  return (
    <>
      {width <= 969 ? (
        <Wip />
      ) : (
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
      )}
    </>
  );
};

Articles.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Articles;
