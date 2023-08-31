import React from 'react'

import styles from './SkeletonPersonBiography.module.css'

export const SkeletonPersonBiography = () => (
  <div className={styles.card}>
    <div className={styles.title}> </div>
    <div className={styles.biography}> </div>
  </div>
)
