import React from 'react'

import styles from './SkeletonPersonalInformation.module.css'

export const SkeletonPersonalInformation = () => (
  <div className={styles.card}>
    <div className={styles.title}> </div>
    <div className={styles.profession}> </div>
    <div className={styles.gender}> </div>
    <div className={styles.date}> </div>
    <div className={styles.place}> </div>
  </div>
)
