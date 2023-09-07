import React from 'react'

import styles from './SkeletonMovieDescription.module.css'

export const SkeletonMovieDescription = () => (
  <div className={styles.card}>
    <div className={styles.title}> </div>
    <div className={styles.description}> </div>
  </div>
)
