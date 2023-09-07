import React from 'react'

import { Icon } from '../../../Icon'
import { SkeletonCardRating } from './SkeletonCardRating'

import styles from './SkeletonMovieCard.module.css'

export const SkeletonMovieCard = () => (
  <div className={styles.wrapper}>
    <div className={styles.section}>
      <Icon icon="image" size="xl" className={styles.image} />
      <div className={styles.card}>
        <div className={styles.title}> </div>
        <div className={styles.year}> </div>
        <div className={styles.text}> </div>
        <div className={styles.text}> </div>
        <div className={styles.companies}> </div>
        <div className={styles.companies}> </div>
      </div>
      <div className={styles.rating}>
        {' '}
        <SkeletonCardRating />
      </div>
    </div>
  </div>
)
