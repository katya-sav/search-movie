import React from 'react'

import { Icon } from '../../Icon'

import styles from './SkeletonPersonImagesPage.module.css'

export const SkeletonPersonImagesPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}> </div>
    <ul className={styles.list}>
      {Array(15)
        .fill({})
        .map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className={styles.card}>
            <Icon icon="portrait" size="xl" className={styles.icon} />
          </li>
        ))}{' '}
    </ul>
    <div className={styles.button}> </div>
  </div>
)
