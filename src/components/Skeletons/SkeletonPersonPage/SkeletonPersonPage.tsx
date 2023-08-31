import React from 'react'

import { SkeletonPersonPhoto } from './SkeletonPersonPhoto'
import { SkeletonPersonalInformation } from './SkeletonPersonalInformation'
import { SkeletonPersonBiography } from './SkeletonPersonBiography'
import { SkeletonPersonMoviesList } from './SkeletonPersonMoviesList'
import { TPersonProfile } from '../../../types'

import styles from './SkeletonPersonPage.module.css'

type TSkeletonPersonPageProps = {
  personProfile: TPersonProfile | null
}

export const SkeletonPersonPage = ({
  personProfile,
}: TSkeletonPersonPageProps) => {
  if (!personProfile) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div>
          <SkeletonPersonPhoto />
          <SkeletonPersonalInformation personProfile={personProfile} />
        </div>
        <div className={styles.section}>
          <SkeletonPersonBiography />
          <SkeletonPersonMoviesList />
        </div>
      </div>
    </div>
  )
}
