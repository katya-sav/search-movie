import React from "react";

import { TMovie } from "../../../types";
import { validateText } from "../../../utils/validate-text";
import styles from "./Details.module.css";

type TDetailsProps = {
  movie: TMovie;
};

export const Details = ({ movie }: TDetailsProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{movie.title}</h2>
      <div className={styles.year}>Year: {validateText(movie.date)}</div>
      <div>Description: {validateText(movie.overview)}</div>
    </div>
  );
};
