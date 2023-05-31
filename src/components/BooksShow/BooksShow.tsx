import React from "react";

import { TBook } from "../../types";
import styles from "./BooksShow.module.css";

type TBooksShowProps = {
  book: TBook;
};

export const BooksShow = ({ book }: TBooksShowProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={book.imageLink} alt={book.title} />
      <div className={styles.overlay}>
        {book.title}
        <p>By: {book.authors ? book.authors.join(", ") : "Anonymous"}</p>
      </div>
    </div>
  );
};
