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
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='title' content='Kitts | Folio' />
        <meta
          name='description'
          content='Software Engineer with a business card that lives on the internet.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/resagratia/image/upload/v1662559310/imgs/my_avatar_vk5vob.png'
        />
        <meta property="og:type" content="website" />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content='https://kitts.xyz' />
        <meta property='twitter:title' content='Kitts | Folio' />
        <meta
          property='twitter:description'
          content='Software Engineer with a business card that lives on the internet.'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/resagratia/image/upload/v1662559310/imgs/my_avatar_vk5vob.png'
        />

        <meta property='og:url' content='https://kitts.xyz' />
        <meta property='og:title' content='Kitts | Folio' />
        <meta
          property='og:description'
          content='Software Engineer with a business card that lives on the internet.'
        />
        <meta
          property='og:image'
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
