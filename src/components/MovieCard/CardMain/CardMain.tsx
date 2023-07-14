import React from "react";

import { InformationBlock } from "../InformationBlock";
import { validateText } from "../../../utils/validate-text";
import { TMovieCard } from "../../../types";
import styles from "./CardMain.module.css";

type TCardMainProps = {
  movieCard: TMovieCard;
};

export const CardMain = ({ movieCard }: TCardMainProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.year}>Year: {validateText(movieCard.year)}</div>
      <div>
        <InformationBlock movieCard={movieCard} />
      </div>
    </div>
  );
};
