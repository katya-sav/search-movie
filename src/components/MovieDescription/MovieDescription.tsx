import React from 'react'

import { TMovieCard } from '../../types'

import styles from './MovieDescription.module.css'

type TMovieDescriptionProps = {
  movieCard: TMovieCard | null
}

export const MovieDescription = ({ movieCard }: TMovieDescriptionProps) => {
  if (!movieCard?.plot) {
    return null
  }

  return (
    <div className={styles.card}>
      <div className={styles.title}>Description</div>
      <div className={styles.description}>{movieCard.plot}</div>
    </div>
  )
}
