import React from 'react';
import sanityClient from '../../cliente';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

import styles from './SinglePostContent.module.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function SinglePostContent({ singlePost }) {
  return (
    <div className='container_single_post'>
      <div className='header_single_post'>
          <div className='container_title'>
            <h1>{singlePost.title}</h1>
            <p>{singlePost.sub_title}</p>
          </div>
          <div className='container_author'>
            <img
              src={urlFor(singlePost.authorImage).url()}
              alt={singlePost.name}
            />
            <p>{singlePost.name}</p>
          </div>
      </div>
      <figure className={ styles.container_main_image }>
        <img
          className={ styles.post_main_image }
          src={singlePost.mainImage.asset.url}
          alt={singlePost.title}
        />
      </figure>
      <BlockContent blocks={singlePost.body} projectId="70kqnxpw" dataset="production" className='container_post'/>
    </div>



    // <article className={ styles.single_post }>
    //   <Link to={"/post/" + post.slug.current} key={post.slug.current}>
    //     <div className={ styles.post_container }>
    //       <div className={ styles.side_wire }></div>
    //       <figure className={ styles.container_img_post }>
    //         <img
    //           className={ styles.thumbnail }
    //           src={ post.thumbnailImage ? post.thumbnailImage.asset.url : post.mainImage.asset.url }
    //           alt={`Esta é a thumbnail do post "${post.title}"`}
    //         />
    //       </figure>
    //       <span className={ styles.post_title} >
    //         <h3>{post.title}</h3>
    //         <p>{post.sub_title}</p>
    //       </span>
    //       <div className={ styles.container_post_date }>
    //         <span 
    //           className={ styles.post_date }
    //           dangerouslySetInnerHTML={{__html: formatDate(post.publishedAt)}}>
    //         </span>
    //         <div className={ styles.bottom_wire }></div>
    //       </div>
    //     </div>
    //   </Link>
    // </article>
  );
}
