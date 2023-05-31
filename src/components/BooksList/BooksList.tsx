import React from "react";

import { BooksShow } from "../BooksShow/BooksShow";
import { TBook } from "../../types";
import styles from "./BooksList.module.css";

type TBooksListProps = {
  books: TBook[];
};

export const BooksList = ({ books }: TBooksListProps) => {
  const renderedBooks = books.map((book) => {
    return <BooksShow key={book.id} book={book} />;
  });

  return <div className={styles.list}>{renderedBooks}</div>;
};
