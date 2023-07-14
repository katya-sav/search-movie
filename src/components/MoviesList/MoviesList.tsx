import React from "react";

import { MoviesShow } from "../MoviesShow";
import { TMovie } from "../../types";
import styles from "./MoviesList.module.css";

type TMoviesListProps = {
  movies: TMovie[];
};

export const MoviesList = ({ movies }: TMoviesListProps) => {
  const renderedMovies = movies.map((movie) => {
    return <MoviesShow key={movie.id} movie={movie} />;
  });

  return <div className={styles.list}>{renderedMovies}</div>;
};