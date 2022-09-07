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

  if (loading) return <Preloader setLoading={setLoading} />;

  return (
    <>
      <Head>
        <title>Kitts | Folio</title>
        <meta property='og:url' content='kitts.xyz' />
        <meta property='og:type' content='Kitts Folio' />
        <meta property='og:title' content='Folio Homepage' />
        <meta name='twitter:card' content='Kitts Folio' />
        <meta
          property='og:description'
          content='My business card that lives on the internet'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/resagratia/image/upload/v1662559310/imgs/my_avatar_vk5vob.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@__kitts' />
        <meta name='twitter:title' content='Folio Homepage' />
        <meta
          name='twitter:description'
          content='My business card that lives on the internet'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/resagratia/image/upload/v1662559310/imgs/my_avatar_vk5vob.png'
        />
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
