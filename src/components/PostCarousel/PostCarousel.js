import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPreviousPost, fetchNextPost } from '../../utils/fetch';

import styles from './PostCarousel.module.css';

export default function PostCarousel({ singlePost }) {
  const [previousPost, setPreviousPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  useEffect(() => {
    if (!singlePost) return;
    const { publishedAt } = singlePost;
    fetchPreviousPost( publishedAt)
      .then((data) => setPreviousPost(data))
      .catch(console.error);
    fetchNextPost(publishedAt)
      .then((data) => setNextPost(data))
      .catch(console.error);
  }, [singlePost]);

  return (
    <div className={ styles.container_post_carousel }>
      {nextPost && (
        <Link 
          to={"/post/" + nextPost.slug.current}
          key={nextPost.slug.current}
          className={ styles.next_post }
        > 
          Next <strong>Post</strong> 
          {/* {nextPost.title}  */}
        </Link>
      )}
      {previousPost && (
        <Link
          to={"/post/" + previousPost.slug.current}
          key={previousPost.slug.current}
          className={ styles.prev_post }
        > 
          Prev <strong>Post</strong> 
         {/* {previousPost.title}  */}
        </Link>
      )}
    </div>
  );
}
