import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ dataPerPage, total, changePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.list}>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={() => changePage(number)}>{number}</a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
