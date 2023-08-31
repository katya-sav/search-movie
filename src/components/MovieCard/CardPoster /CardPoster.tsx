import React from 'react'

import { SafeImage } from '../../SafeImage'
import { TextWithIcon } from '../../TextWithIcon'
import { getNumberFromRating } from '../../../utils'
import { TMovieCard } from '../../../types'

import styles from './CardPoster.module.css'

type TCardPosterProps = {
  movieCard: TMovieCard
}

export const CardPoster = ({ movieCard }: TCardPosterProps) => (
  <div className={styles.wrapper}>
    <div className={styles.poster}>
      {' '}
      <SafeImage
        src={`https://api.moviesdb.ru/t/p/w342${movieCard.poster}`}
        alt={movieCard.title}
        className={styles.image}
        errorClassName={styles.imageError}
      />
      <div className={styles.overlay}>
        <TextWithIcon
          icon="star"
          size="sm"
          text={getNumberFromRating(movieCard.rating)}
        />
      </div>
    </div>
  </div>
)
