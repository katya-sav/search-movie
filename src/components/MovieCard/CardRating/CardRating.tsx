import React from "react";

import { Rating } from "../../Rating";
import { TMovieCard } from "../../../types";
import { validateText } from "../../../utils/validate-text";
import styles from "./CardRating.module.css";

type TCardRatingProps = {
  movieCard: TMovieCard;
};

export const CardRating = ({ movieCard }: TCardRatingProps) => {
  return (
    <div className={styles.rating}>
      <Rating
        title="Rating"
        icon="star"
        ratingText={validateText(movieCard.rating)}
      />
    </div>
  );
};
