import React from "react";

import { TextWithIcon } from "../TextWithIcon";
import { TIconType } from "../../types";
import styles from "./Rating.module.css";

type TRating = {
  ratingText: string;
  additionalText?: string;
  title: string;
  icon: TIconType;
};

export const Rating = ({
  ratingText,
  additionalText,
  title,
  icon,
}: TRating) => {
  const secondaryText = additionalText ? `/${additionalText} votes` : undefined;

  return (
    <div className={styles.ratingInner}>
      <div className={styles.ratingTitle}> {title} </div>
      <TextWithIcon
        icon={icon}
        size="xl"
        text={Number(`${ratingText}`).toFixed(1)}
        secondaryText={secondaryText}
      />
    </div>
  );
};
