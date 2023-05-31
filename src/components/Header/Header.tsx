import React from "react";

import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./Header.module.css";
import image from "../../image/search-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

type THeaderProps = {
  onSearchSubmit: (searchTerm: string) => Promise<void>;
};

export const Header = ({ onSearchSubmit }: THeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.left_side}>
        <FontAwesomeIcon
          className={styles.button}
          icon={faRightToBracket}
          size="lg"
        />
        <h1 className={styles.title}>Find Your Book</h1>
      </div>
      <div className={styles.search}>
        <h2 className={styles.text}>Enter Book Name</h2>
        <SearchBar onSubmit={onSearchSubmit} />
        <img className={styles.image} src={image} alt="image-book" />
      </div>
    </div>
  );
};
