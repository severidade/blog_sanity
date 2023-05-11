import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchSinglePost, fetchPreviousPost, fetchNextPost } from '../utils/fetch';
import SinglePostContent from '../components/SinglePostContent/SinglePostContent';

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);

  const [previousPost, setPreviousPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetchSinglePost(slug)
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

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

  if (!singlePost) return <div>Carregendo...</div>;

  return (
      <main className='container_main'>
        <SinglePostContent singlePost={singlePost} />

        <div className='teste'>
          {nextPost && (
            <Link 
              to={"/post/" + nextPost.slug.current}
              key={nextPost.slug.current}
            > 
              {nextPost.title} 
            </Link>
          )}
          {previousPost && (
            <Link
              to={"/post/" + previousPost.slug.current}
              key={previousPost.slug.current}
            > 
              {previousPost.title} 
            </Link>
          )}
        </div>

      </main>
  );
}
