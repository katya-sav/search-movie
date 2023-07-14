import React from "react";

import { TMovie } from "../../../types";
import { SafeImage } from "../../SafeImage";
import styles from "./Poster.module.css";

type TPosterProps = {
  movie: TMovie;
};

export const Poster = ({ movie }: TPosterProps) => {
  return (
    <SafeImage
      src={`https://api.moviesdb.ru/t/p/w342${movie.poster}`}
      alt={movie.title}
      className={styles.image}
      errorClassName={styles.imageError}
    />
  );
};
