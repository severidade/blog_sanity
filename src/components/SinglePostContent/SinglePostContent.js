import React from 'react';
import sanityClient from '../../cliente';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

import styles from './SinglePostContent.module.css';
import PostCarousel from '../PostCarousel/PostCarousel';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source)
}

export default function SinglePostContent({ singlePost }) {
  return (
    <section className='container_section'>
      <div className={ styles.container_single_post }>

      <PostCarousel singlePost={singlePost}/>
        
        <figure className={ styles.container_main_image }>
          <img
            className={ styles.post_main_image }
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
          />
        </figure>
        
        <div className='header_single_post'>
            <div className={ styles.container_title }>
              <h1 className='post_title'>{singlePost.title}</h1>
              {/* <p className={ styles.post_subtitle }>{singlePost.sub_title}</p> */}
              {singlePost.sub_title ? <p className={ styles.post_subtitle }>{singlePost.sub_title}</p> : null}
            </div>
        </div>

        <BlockContent
          blocks={singlePost.body}
          projectId="70kqnxpw"
          dataset="production"
          className={ styles.container_post }
        />

        <div className={ styles.footer_container_author }>
          <figure className={ styles.author_avatar }>
            <img
              src={urlFor(singlePost.authorImage).url()}
              alt={singlePost.name}
            />
          </figure>
          <p>{singlePost.name}</p>
        </div>

        

      </div>
    </section>
  );
}
