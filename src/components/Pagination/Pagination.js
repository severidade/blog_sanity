import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export default function Pagination({ pageCount, handlePageClick, currentPage }) {
  return (
    <ReactPaginate
      previousLabel={'Prev'}
      nextLabel={'Next'}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
      forcePage={currentPage}
    />
  );
}