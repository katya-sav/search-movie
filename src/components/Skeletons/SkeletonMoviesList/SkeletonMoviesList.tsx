import React from 'react'

import { Icon } from '../../Icon'

import styles from './SkeletonMoviesList.module.css'

export const SkeletonMoviesList = () => (
  <ul className={styles.list}>
    {Array(20)
      .fill(0)
      .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <div className={styles.card}>
            <Icon icon="image" size="xl" className={styles.image} />
            <div className={styles.section}>
              <div className={styles.title}> </div>
              <div className={styles.year}> </div>
              <div className={styles.subtitle}> </div>
              <div className={styles.description}> </div>{' '}
            </div>
          </div>
        </li>
      ))}
  </ul>
)
