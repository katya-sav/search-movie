import React from 'react'

import { Icon } from '../../../Icon'

import styles from './SkeletonMedia.module.css'

export const SkeletonMedia = () => (
  <div className={styles.wrapper}>
    <div className={styles.media}>
      <div className={styles.title}> </div>
      <div className={styles.mediaNav}>
        <div className={styles.button}> </div>
        <div className={styles.button}> </div>
        <div className={styles.button}> </div>
        <div className={styles.buttonBig}> </div>
      </div>
    </div>
    <ul className={styles.list}>
      {Array(20)
        .fill(0)
        .map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className={styles.card}>
            <Icon icon="image" size="xl" className={styles.image} />
          </li>
        ))}{' '}
    </ul>
  </div>
)
