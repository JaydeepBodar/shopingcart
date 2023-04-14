import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css"
const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <React.Fragment>
      <ul className={itemsPerPage.length === 0 ? 'page':"pagination" }>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
                to='/'
              onClick={() => onPageChange(number)}
              className={
                currentPage === number ? "page-link active" : "page-link"
              }
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Pagination;
