import React from 'react'

import { Icon } from '../../../Icon'

import styles from './SkeletonVideosList.module.css'

export const SkeletonVideosList = () => (
  <ul className={styles.list}>
    {Array(10)
      .fill(0)
      .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className={styles.card}>
          <Icon icon="video" size="lg" className={styles.video} />
        </li>
      ))}{' '}
  </ul>
)
