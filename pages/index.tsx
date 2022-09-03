import Head from 'next/head';
import type { ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';

// components
import Layout from '../components/layout';
import Landing from '../components/landing';
import Work from '../components/work';
import Articles from '../components/articles';

const Home = () => {
  return (
    <>
      <Head>
        <title>Kite | Folio</title>
        <meta name='description' content='Kittsfolio Homepage' />
      </Head>

      <AnimatePresence>
        <Landing />
        <Work />
        <Articles />
      </AnimatePresence>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
