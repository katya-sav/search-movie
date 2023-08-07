import React from 'react'

import { InformationBlock } from '../InformationBlock'
import { getValidateText } from '../../../utils'
import { TMovieCard } from '../../../types'
import styles from './CardMain.module.css'

type TCardMainProps = {
  movieCard: TMovieCard
}

export const CardMain = ({ movieCard }: TCardMainProps) => (
  <div className={styles.main}>
    <div className={styles.year}>Year: {getValidateText(movieCard.year)}</div>
    <div>
      <InformationBlock movieCard={movieCard} />
    </div>
  </div>
)
