import React from "react";
import { useNavigate } from "react-router-dom";

import { Poster } from "./Poster";
import { Details } from "./Details";
import { TMovie } from "../../types";
import styles from "./MoviesShow.module.css";

type TMoviesShowProps = {
  movie: TMovie;
};

export const MoviesShow = ({ movie }: TMoviesShowProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      onClick={() => navigate(`/card/${movie.id}`, { replace: false })}
    >
      <Poster movie={movie} />
      <Details movie={movie} />
    </div>
  );
};
