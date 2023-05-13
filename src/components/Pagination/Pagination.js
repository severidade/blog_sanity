import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export default function Pagination({ pageCount, handlePageClick, currentPage }) {
  return (
    <ReactPaginate
      previousLabel={'Next'}
      nextLabel={'Prev'}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={0}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
      forcePage={currentPage}
    />
  );
}