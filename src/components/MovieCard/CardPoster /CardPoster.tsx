import React from 'react'

import { SafeImage } from '../../SafeImage'
import { TMovieCard } from '../../../types'
import styles from './CardPoster.module.css'

type TCardPosterProps = {
  movieCard: TMovieCard
}

export const CardPoster = ({ movieCard }: TCardPosterProps) => (
  <SafeImage
    src={`https://api.moviesdb.ru/t/p/w342${movieCard.poster}`}
    alt={movieCard.title}
    className={styles.image}
    errorClassName={styles.imageError}
  />
)
