import React from 'react'

import styles from './SkeletonPersonMoviesList.module.css'

export const SkeletonPersonMoviesList = () => (
  <div className={styles.card}>
    {Array(2)
      .fill(0)
      .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <div className={styles.title}> </div>
          <div className={styles.list}> </div>
        </div>
      ))}
  </div>
)
