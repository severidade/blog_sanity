import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate.js';

import styles from './PostList.module.css';

export default function Post({ post }) {
  return (
    <article className={ styles.single_post }>
      <Link to={"/post/" + post.slug.current} key={post.slug.current}>
        <div className={ styles.post_container }>
          <div className={ styles.side_wire }></div>
          <figure className={ styles.container_img_post }>
            <img
              className={ styles.thumbnail }
              src={ post.thumbnailImage ? post.thumbnailImage.asset.url : post.mainImage.asset.url }
              alt={`Esta é a thumbnail do post "${post.title}"`}
            />
          </figure>
          <span className={ styles.post_title} >
            <h3>{post.title}</h3>
            { post.sub_title ? <p className={ styles.sub_title }>{ post.sub_title }</p>: null}
          </span>
          <div className={ styles.container_post_date }>
            <span 
              className={ styles.post_date }
              dangerouslySetInnerHTML={{__html: formatDate(post.publishedAt)}}>
            </span>
            <div className={ styles.bottom_wire }></div>
          </div>
        </div>
      </Link>
    </article>
  );
}
