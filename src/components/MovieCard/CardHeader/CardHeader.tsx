import React from "react";

import { TMovieCard } from "../../../types";
import { validateText } from "../../../utils/validate-text";
import styles from "./CardHeader.module.css";

type TCardHeaderProps = {
  movieCard: TMovieCard;
};

export const CardHeader = ({ movieCard }: TCardHeaderProps) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{validateText(movieCard.title)}</h1>
      <h3>Description: {validateText(movieCard.plot)}</h3>
    </div>
  );
};
