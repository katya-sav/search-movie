import React from "react";

import image from "../../image/cover-book.png";
import styles from "./BookCard.module.css";

type TBookCardProps = {
  handleClose: () => void;
};

export const BookCard = ({ handleClose }: TBookCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleClose();
  };

  return (
    <div className={styles.modal}>
      <div>
        <h1>Title</h1>
        <img className={styles.image} src={image} />
        <div>Author</div>
        <div>First publish year</div>
        <div>Description</div>
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  );
};
