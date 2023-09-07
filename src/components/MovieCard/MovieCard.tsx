import React from 'react'

import { CardPoster } from './CardPoster '
import { CardMain } from './CardMain'
import { CardRating } from './CardRating'
import { getValidateText } from '../../utils'
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
        <div className={styles.title}>{getValidateText(movieCard.title)}</div>
        <CardMain movieCard={movieCard} />
      </div>
      <div className={styles.rating}>
        <CardRating movieCard={movieCard} />
      </div>
    </div>
  )
}
