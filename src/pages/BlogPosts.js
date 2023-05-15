import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../utils/fetch';
import PosstList from '../components/PostList/PostList.js';
import Pagination from '../components/Pagination/Pagination';

export default function BlogPosts() {
  const [postData, setPost] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  // const [perPage] = useState(3);
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    fetchPosts()
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerPage(3);
      } else if (window.innerWidth < 900) {
        setPerPage(8);
      } else {
        setPerPage(10);
      }
    };
    
    handleResize(); // quando o componete e montado

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!postData) return <div className='loading'>Loading...</div>;

  const pageCount = Math.ceil(postData.length / perPage);
  // Math.ceil() para arredondar para cima garantindo que haja pelo menos uma página para exibir os posts.

  const handlePageClick = (data) => {
    setPageNumber(data.selected);
  };

  const start = pageNumber * perPage;
  const end = start + perPage;
  const currentItems = postData.slice(start, end);

  return (
    <main className='container_main'>
      <section className='container_section'>
        <h2>NEW on the Blog</h2>
        <div className='container_list_posts'>
          {currentItems.map((post, index) => (
            <PosstList key={post.slug.current} post={post} />
          ))}
          { pageCount > 1 && (
            <Pagination 
              pageCount={pageCount}
              handlePageClick={handlePageClick}
              currentPage={pageNumber}
            />
          )}
        </div>
      </section>
    </main>
  );
}
