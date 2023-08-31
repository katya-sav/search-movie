import React from 'react'

import styles from './SkeletonAdditionalInformation.module.css'

export const SkeletonAdditionalInformation = () => (
  <div className={styles.list}>
    <div className={styles.title}> </div>
    <div className={styles.card}>
      <div className={styles.name}> </div>
      <div className={styles.text}> </div>
      <div className={styles.text}> </div>
      <div className={styles.runtime}> </div>
    </div>
  </div>
)
