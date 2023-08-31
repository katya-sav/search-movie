import React from 'react'

import { Icon } from '../../../Icon'

import styles from './SkeletonPersonsList.module.css'

export const SkeletonPersonsList = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}> </div>{' '}
    <ul className={styles.list}>
      {Array(12)
        .fill({})
        .map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className={styles.card}>
            <Icon icon="portrait" size="xl" className={styles.icon} />
            <div className={styles.text}> </div>
            <div className={styles.text}> </div>
          </li>
        ))}{' '}
    </ul>
  </div>
)
