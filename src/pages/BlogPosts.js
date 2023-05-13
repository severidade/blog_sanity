import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchPosts } from '../utils/fetch';
import PosstList from '../components/PostList/PostList.js';

export default function BlogPosts() {
  const [postData, setPost] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [perPage] = useState(3);

  useEffect(() => {
    fetchPosts()
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  if (!postData) return <div>Carregando...</div>;

  const pageCount = Math.ceil(postData.length / perPage);

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
        </div>
        <ReactPaginate
          previousLabel={'Anterior'}
          nextLabel={'Próxima'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={0}
          // breakLabel={'---'}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </section>
    </main>
  );
}
