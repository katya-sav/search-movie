import React from 'react'

import { TMovie } from '../../../types'
import { getValidateText } from '../../../utils'
import styles from './Details.module.css'

type TDetailsProps = {
  movie: TMovie
}

export const Details = ({ movie }: TDetailsProps) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{movie.title}</h2>
    <div className={styles.year}>Year: {getValidateText(movie.date)}</div>
    <div>Description:</div>
    <div className={styles.description}>{getValidateText(movie.overview)}</div>
  </div>
)
