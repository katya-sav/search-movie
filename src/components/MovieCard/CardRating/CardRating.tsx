import React from 'react'

import { Rating } from '../../Rating'
import { TMovieCard } from '../../../types'
import styles from './CardRating.module.css'

type TCardRatingProps = {
  movieCard: TMovieCard
}

export const CardRating = ({ movieCard }: TCardRatingProps) => (
  <div className={styles.rating}>
    <Rating title="Rating" icon="star" ratingText={movieCard.rating} />
  </div>
)
