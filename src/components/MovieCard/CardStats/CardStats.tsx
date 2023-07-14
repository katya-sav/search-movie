import React from "react";

import { TMovieCard } from "../../../types";
import { validateText } from "../../../utils/validate-text";
import styles from "./CardStats.module.css";

type TCardStats = {
  movieCard: TMovieCard;
};

export const CardStats = ({ movieCard }: TCardStats) => {
  const budget = `${movieCard.budget}$`;
  const runtime = `${movieCard.runtime} min`;
  return (
    <div className={styles.stats}>
      <div className={styles.budget}>Budget: {validateText(budget)}</div>
      <div>Runtime: {validateText(runtime)}</div>
    </div>
  );
};
