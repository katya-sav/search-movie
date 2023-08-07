import React from 'react'

import { getValidateText, getCurrencyFromValue } from '../../utils'
import { TMovieCard } from '../../types'

import styles from './AdditionalInformation.module.css'

type TAdditionalInformation = {
  movieCard: TMovieCard | null
}

export const AdditionalInformation = ({
  movieCard,
}: TAdditionalInformation) => {
  if (!movieCard) {
    return null
  }

  const budget = getCurrencyFromValue(`${movieCard.budget}`)
  const revenue = getCurrencyFromValue(`${movieCard.revenue}`)
  const runtime = `${movieCard.runtime} min`

  return (
    <div className={styles.stats}>
      <h3 className={styles.title}>Additionally</h3>
      <div className={styles.data}>
        Original title: {getValidateText(movieCard.originalTitle)}
      </div>
      <div className={styles.data}>Budget: {getValidateText(budget)}</div>
      <div className={styles.data}>Revenue: {getValidateText(revenue)}</div>
      <div>Runtime: {getValidateText(runtime)}</div>
    </div>
  )
}
