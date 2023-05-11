import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePost } from '../utils/fetch';
import SinglePostContent from '../components/SinglePostContent/SinglePostContent';

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetchSinglePost(slug)
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Carregendo...</div>;

  return (
      <main className='container_main'>
        <SinglePostContent singlePost={singlePost} />
      </main>
  );
}
