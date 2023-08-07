import React from 'react'

import { TextWithIcon } from '../TextWithIcon'
import { getNumberFromRating } from '../../utils'
import { TIconType } from '../../types'
import styles from './Rating.module.css'

type TRating = {
  ratingText: string
  additionalText?: string
  title: string
  icon: TIconType
}

export const Rating = ({
  ratingText,
  additionalText,
  title,
  icon,
}: TRating) => {
  const secondaryText = additionalText ? `/${additionalText} votes` : undefined

  return (
    <div className={styles.ratingInner}>
      <div className={styles.ratingTitle}> {title} </div>
      <TextWithIcon
        icon={icon}
        size="xl"
        text={getNumberFromRating(ratingText)}
        secondaryText={secondaryText}
      />
    </div>
  )
}
