import React from 'react'

import { CardPoster } from './CardPoster '
import { CardHeader } from './CardHeader'
import { CardMain } from './CardMain'
import { CardRating } from './CardRating'
import { TMovieCard } from '../../types'
import styles from './MovieCard.module.css'

type TMovieCardProps = {
  movieCard: TMovieCard | null
}

export const MovieCard = ({ movieCard }: TMovieCardProps) => {
  if (!movieCard) {
    return null
  }

  return (
    <div className={styles.card}>
      <CardPoster movieCard={movieCard} />
      <div className={styles.container}>
        <CardHeader movieCard={movieCard} />
        <CardMain movieCard={movieCard} />
      </div>
      <CardRating movieCard={movieCard} />
    </div>
  )
}
