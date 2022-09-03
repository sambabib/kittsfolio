import type { ReactElement } from 'react';

// styling
import styles from '../styles/blogpostscard.module.scss';

// icons
import { FiCalendar } from 'react-icons/fi';

interface BlogProps {
  post: any;
}

const BlogPostsCard = ({ post }: BlogProps): ReactElement => {
  return (
    <>
      <a href={post.link} target='__blank'>
        <div className={styles.posts__card__container}>
          <div className={styles.card__id}>
            <span className='text-2xl font-medium'>{post.id}</span>
          </div>
          
          <div className={styles.card__heading}>
            <h3 className='text-lg'>{post.title}</h3>
          </div>


          <div className={styles.card__date}>
            <FiCalendar /> <span>{post.postedOn}</span>
          </div>
        </div>
      </a>
    </>
  );
};

export default BlogPostsCard;
