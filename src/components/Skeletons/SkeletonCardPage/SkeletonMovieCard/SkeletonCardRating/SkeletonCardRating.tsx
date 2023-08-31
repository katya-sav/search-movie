import React from 'react'

import { Icon } from '../../../../Icon'

import styles from './SkeletonCardRating.module.css'

export const SkeletonCardRating = () => (
  <div className={styles.rating}>
    <div className={styles.ratingName}> </div>
    <div className={styles.ratingInner}>
      {' '}
      <Icon icon="star" size="xl" className={styles.ratingIcon} />
      <div className={styles.ratingText}> </div>
    </div>
  </div>
)
