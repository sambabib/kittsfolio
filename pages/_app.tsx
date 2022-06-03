import '../styles/globals.scss';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { motion } from 'framer-motion';

// utils
import ViewportLayout from '../utils/viewportlayout';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <motion.div
      key={router.route}
      initial='pageInitial'
      animate='pageAnimate'
      exit='pageExit'
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            delay: 0.6,
          },
        },
        pageExit: {
          opacity: 0,
        },
      }}
    >
      <ViewportLayout>
        <Component {...pageProps} />
      </ViewportLayout>
    </motion.div>
  );
}

export default MyApp;
