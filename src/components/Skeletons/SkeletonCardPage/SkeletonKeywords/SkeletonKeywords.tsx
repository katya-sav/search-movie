import React from 'react'

import styles from './SkeletonKeywords.module.css'

export const SkeletonKeywords = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}> </div>
    <div className={styles.list}>
      {Array(3)
        .fill(0)
        .map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <div className={styles.keyword}> </div>
            <div className={styles.keywordBig}> </div>
            <div className={styles.keywordOther}> </div>
          </div>
        ))}
    </div>
  </div>
)
