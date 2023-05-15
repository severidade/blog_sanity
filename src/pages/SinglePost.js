import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePost } from '../utils/fetch';
import SinglePostContent from '../components/SinglePostContent/SinglePostContent';
import { Helmet } from 'react-helmet';

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetchSinglePost(slug)
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div className='loading'>Loading...</div>;

  const ogData = {
    title: singlePost.title,
    // description: singlePost.excerpt,
    image: singlePost.mainImage.asset.url,
    url: window.location.href,
  };

  console.log(ogData);
  console.log(singlePost);

  return (
      <main className='container_main'>
        <Helmet key={ogData.title}>
          <title>{singlePost.title}</title>
          <meta name="description" content={singlePost.excerpt} />
          <meta property="og:title" content={ogData.title} />
          {/* <meta property="og:description" content={ogData.description} /> */}
          <meta property="og:image" content={ogData.image} />
          <meta property="og:url" content={ogData.url} />
        </Helmet>
        <SinglePostContent singlePost={singlePost} />
      </main>
  );
}
