import React from 'react'

import { TMovieCard } from '../../../types'
import { getValidateText } from '../../../utils'
import styles from './CardHeader.module.css'

type TCardHeaderProps = {
  movieCard: TMovieCard
}

export const CardHeader = ({ movieCard }: TCardHeaderProps) => (
  <div className={styles.header}>
    <h1 className={styles.title}>{getValidateText(movieCard.title)}</h1>
    <h3>Description: {getValidateText(movieCard.plot)}</h3>
  </div>
)
