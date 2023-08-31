import React from 'react'

import { TMovieCard } from '../../../types'
import { getValidateText } from '../../../utils'
import styles from './CardHeader.module.css'

type TCardHeaderProps = {
  movieCard: TMovieCard
}

export const CardHeader = ({ movieCard }: TCardHeaderProps) => (
  <div className={styles.header}>
    <div className={styles.title}>{getValidateText(movieCard.title)}</div>
    <div className={styles.subtitle}>Description:</div>
    <div className={styles.description}>{getValidateText(movieCard.plot)}</div>
  </div>
)
