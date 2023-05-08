import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../cliente';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { fetchSinglePost } from '../utils/fetch';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetchSinglePost(slug)
    .then((data) => setSinglePost(data[0])).catch(console.error);
  }, [slug]);

  if(!singlePost) return <div>Carregendo...</div>;

  console.log(singlePost.sub_title);

  return(
    <main className='container_blog'>
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
        <figure className='container_main_image'>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
          />
        </figure>
        <BlockContent blocks={singlePost.body} projectId="70kqnxpw" dataset="production" className='container_post'/>
      </div>
    </main>
  )
}
