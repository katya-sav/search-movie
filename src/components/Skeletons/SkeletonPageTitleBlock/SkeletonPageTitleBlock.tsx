import React from 'react'

import styles from './SkeletonPageTitleBlock.module.css'

export const SkeletonPageTitleBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}> </div>
    <div className={styles.button}> </div>
  </div>
)
