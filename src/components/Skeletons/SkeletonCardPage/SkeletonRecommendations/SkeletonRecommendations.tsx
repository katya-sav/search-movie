import React from 'react'

import { Icon } from '../../../Icon'

import styles from './SkeletonRecommendations.module.css'

export const SkeletonRecommendations = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}> </div>
    <ul className={styles.list}>
      {Array(20)
        .fill({})
        .map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className={styles.card}>
            <div className={styles.wrapperText}>
              <div className={styles.text}> </div>
            </div>
            <Icon icon="image" size="xl" className={styles.icon} />
          </li>
        ))}{' '}
    </ul>
  </div>
)
