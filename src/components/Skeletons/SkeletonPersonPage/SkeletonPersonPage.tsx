import React from 'react'

import { SkeletonPersonPhoto } from './SkeletonPersonPhoto'
import { SkeletonPersonalInformation } from './SkeletonPersonalInformation'
import { SkeletonPersonBiography } from './SkeletonPersonBiography'
import { SkeletonPersonMoviesList } from './SkeletonPersonMoviesList'

import styles from './SkeletonPersonPage.module.css'

export const SkeletonPersonPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.card}>
      <div>
        <div className={styles.title}> </div>
        <div className={styles.topSection}>
          <SkeletonPersonPhoto />
          <SkeletonPersonalInformation />
        </div>
      </div>
      <div className={styles.section}>
        <SkeletonPersonBiography />
        <SkeletonPersonMoviesList />
      </div>
    </div>
  </div>
)
