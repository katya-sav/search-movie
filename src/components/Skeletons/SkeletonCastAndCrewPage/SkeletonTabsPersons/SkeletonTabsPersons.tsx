import React from 'react'

import { Icon } from '../../../Icon'

import styles from './SkeletonTabsPersons.module.css'

export const SkeletonTabsPersons = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}> </div>
    <div className={styles.nav}>
      <div className={styles.navItem}> </div>
      <div className={styles.navItem}> </div>
    </div>
    <div className={styles.list}>
      {Array(30)
        .fill({})
        .map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={styles.card}>
            <Icon icon="portrait" size="xl" className={styles.icon} />
            <div className={styles.text}> </div>
            <div className={styles.text}> </div>
          </div>
        ))}{' '}
    </div>
  </div>
)
