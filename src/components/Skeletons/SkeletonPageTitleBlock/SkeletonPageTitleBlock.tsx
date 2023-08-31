import React from 'react'

import { Icon } from '../../Icon'

import styles from './SkeletonPageTitleBlock.module.css'

export const SkeletonPageTitleBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.card}>
      <Icon icon="image" size="xl" className={styles.image} />
      <div className={styles.details}>
        <div className={styles.title}> </div>
        <div className={styles.year}> </div>
        <div className={styles.button}> </div>
      </div>
    </div>
  </div>
)
