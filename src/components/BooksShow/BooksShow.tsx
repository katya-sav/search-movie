import React, { useState } from "react";

import { TBook } from "../../types";
import styles from "./BooksShow.module.css";
import { BookCard } from "../BookCard/BookCard";

type TBooksShowProps = {
  book: TBook;
};

export const BooksShow = ({ book }: TBooksShowProps) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    console.log("OPEN");
    setShow(true);
  };

  const handleClose = () => {
    console.log("CLOSE");
    setShow(false);
  };

  return (
    <div className={styles.container} onClick={handleOpen}>
      <img className={styles.image} src={book.imageLink} alt={book.title} />
      <div className={styles.overlay}>
        {book.title}
        <p>By: {book.authors ? book.authors.join(", ") : "Anonymous"}</p>
      </div>
      {show && <BookCard handleClose={handleClose} />}
    </div>
  );
};
