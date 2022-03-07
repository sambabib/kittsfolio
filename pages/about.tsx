import type { ReactElement } from 'react';

// components
import Layout from '../components/layout';
import Music from '../components/music';
import Sitcoms from '../components/sitcoms';

// styles
import styles from '../styles/about.module.scss';

// utils
import { music } from '../utils/musicUtils';
import { sitcoms } from '../utils/sitcomsUtils';

const About = (): ReactElement => {
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <h2>About</h2>
        <section className={styles.section}>
          <p>
            Okay. You already know a number of things about me. Here's some more
            stuff: <br />
          </p>
          <p>
            Away from building really cool web apps that scale with Javascript,
            Typescript, React, Nextjs, Vue. I also write some Flutter/Dart.{' '}
            <br /> I have worked as a <span>Fullstack developer</span> building
            an erp software, an e-learning app as well as CMS to manage it's
            content. I hope to wrap up a Solidity course in the coming months
            (yay web3!) <br /> When I'm not writing code, I'm fan-boying Lebron
            James, listening to some pretty decent music, having a good laugh
            with sitcoms, <span>eating oreo</span> or painting rainbows in the
            sky.
          </p>
        </section>

        <div className={styles.my__shit__intro}>
          <h4>
            It's difficult to share all the things I absolutely love on one
            page, so here are two of my favorite albums & two of my favorite tv
            shows:
          </h4>
        </div>

        <section className={styles.my__shit}>
          <div className={styles.my__music__container}>
            {music.map((item) => (
              <Music
                key={item.num}
                num={item.num}
                title={item.title}
                link={item.link}
                type={item.type}
              />
            ))}
          </div>

          <div className={styles.my__sitcoms__container}>
            {sitcoms.map((sitcom) => (
              <Sitcoms
                key={sitcom.num}
                num={sitcom.num}
                title={sitcom.title}
                type={sitcom.type}
              />
            ))}
          </div>
        </section>
      </div>

      <section className={styles.about__background}>
        <p>Como Estas?</p>
      </section>
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
