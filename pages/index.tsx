import { useState, useEffect } from 'react';
import Head from 'next/head';
import type { ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';

// components
import Layout from '../components/layout';
import Landing from '../components/landing';
import Work from '../components/work';
import Articles from '../components/articles';
import Connect from '../components/connect';
import Preloader from '../components/preloader';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // setLoading(false);
    }, 5000);

    return (): void => clearTimeout(timeout);
  }, []);

  if (loading) return <Preloader setLoading={setLoading} />

  return (
    <>
      <Head>
        <title>Kite | Folio</title>
        <meta name='description' content='Kittsfolio Homepage' />
      </Head>

      <AnimatePresence>
        <>
          <Landing />
          <Work />
          <Articles />
          <Connect />
        </>
      </AnimatePresence>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
