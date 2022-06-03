import { useState } from 'react';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';

// icons
import { FcBriefcase } from 'react-icons/fc';

// utils
import { tech } from '../utils/stack';

// styling
import styles from '../styles/fab.module.scss';

const Fab = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const mouseEnter = () => setOpen(true);

  const mouseLeave = () => setOpen(false);

  let cx = classNames.bind(styles);

  return (
    <motion.ul
      className={styles.fab__container}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: .3,
        delay: 2,
      }}
    >
      <li className={styles.fab__button}>
        <FcBriefcase />
      </li>

      {tech.map((item, index) => (
        <li
          style={{ transitionDelay: `${index * 25}ms` }}
          className={cx(styles.fab__action, { open })}
          key={item.id}
        >
          <Image src={item.image} alt={item.title} width={20} height={20} />
          <span className={styles.tooltip}>{item.title}</span>
        </li>
      ))}
    </motion.ul>
  );
};

export default Fab;
