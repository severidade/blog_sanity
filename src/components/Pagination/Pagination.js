import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export default function Pagination({ pageCount, handlePageClick, currentPage }) {
  const handlePageChange = (selectedPage) => {
    handlePageClick(selectedPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ReactPaginate
      previousLabel={'Prev'}
      nextLabel={'Next'}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
      forcePage={currentPage}
    />
  );
}
