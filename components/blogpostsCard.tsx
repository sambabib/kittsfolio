import type { ReactElement } from 'react';

// styling
import styles from '../styles/blogpostscard.module.scss';

// icons
import { FiCalendar } from 'react-icons/fi';

interface BlogProps {
  item: any;
}

const BlogPostsCard = ({ item }: BlogProps): ReactElement => {
  return (
    <>
      <a href={item.link} target='__blank'>
        <div className={styles.posts__card__container}>
          <div className={styles.card__heading}>
            <h3>{item.title}</h3>
          </div>

          <div className={styles.card__date}>
            <FiCalendar /> <p>{item.postedOn}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default BlogPostsCard;
