import React from "react";

import { SafeImage } from "../SafeImage";
import styles from "./Person.module.css";

type TPersonProps = {
  namePerson: string;
  image: string;
  description: string;
};

export const Person = ({ namePerson, image, description }: TPersonProps) => {
  return (
    <div className={styles.card}>
      <SafeImage
        src={`https://api.moviesdb.ru/t/p/w185${image}`}
        alt={namePerson}
        className={styles.image}
        errorClassName={styles.imageError}
      />
      <div className={styles.name}>{namePerson}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
