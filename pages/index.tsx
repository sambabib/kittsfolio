import Head from 'next/head';
import type { ReactElement } from 'react';

// components
import Layout from '../components/layout';

// styles
import styles from '../styles/home.module.scss';

interface Stack {
  id: number;
  title: String;
}

const stack: Stack[] = [
  {
    id: 1,
    title: `Javascript`,
  },
  {
    id: 2,
    title: `Typescript`,
  },
  {
    id: 3,
    title: `CSS`,
  },
  {
    id: 4,
    title: `SCSS`,
  },
  {
    id: 5,
    title: `React`,
  },
  {
    id: 6,
    title: `Nextjs`,
  },
  {
    id: 7,
    title: `Vue`,
  },
  {
    id: 7,
    title: `Firebase`,
  },
  {
    id: 8,
    title: `MongoDB`,
  },
  {
    id: 9,
    title: `...`,
  },
];

const Home = () => {
  return (
    <>
      <Head>Kite | Folio</Head>
      <div className={styles.home}>
        <section className={styles.home__section}>
          <article>
            <section className={styles.about__paragraph}>
              <h2>My name's Adekite.</h2>
              <p>
                I am a <span>frontend engineer</span> living in Lagos, Nigeria.
                I love <span>sitcoms</span> & <span>sports</span>. I'm also
                really fascinated by web3, smart doggos, art & gym heads. Yo
                hablo un poco de <span>espano</span>l!
              </p>
            </section>

            <section className={styles.stack}>
              <h4>stack:</h4>
              {stack.map((item) => (
                <p key={item.id} className={styles.stack__items}>
                  {item.title}
                </p>
              ))}
            </section>
          </article>
        </section>
        <section className={styles.home__background}>
          <p>Hola! Es mi portfolio.</p>
        </section>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
