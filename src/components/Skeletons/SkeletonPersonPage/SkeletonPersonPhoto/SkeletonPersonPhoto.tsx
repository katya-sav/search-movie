import React from 'react'

import { Icon } from '../../../Icon'

import styles from './SkeletonPersonPhoto.module.css'

export const SkeletonPersonPhoto = () => (
  <div className={styles.section}>
    <div className={styles.title}> </div>
    <Icon icon="portrait" size="xl" className={styles.photo} />
    <div className={styles.button}> </div>
  </div>
)
