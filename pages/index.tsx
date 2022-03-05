import Head from 'next/head';
import type { ReactElement } from 'react';

// components
import Layout from '../components/layout';

const Home = () => {
  return (
    <>
      <Head>Kite | Folio</Head>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
