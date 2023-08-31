import React from 'react'

import { TPersonProfile } from '../../../../types'

import styles from './SkeletonPersonalInformation.module.css'

type TSkeletonPersonalInformationProps = {
  personProfile: TPersonProfile
}

export const SkeletonPersonalInformation = ({
  personProfile,
}: TSkeletonPersonalInformationProps) => (
  <div className={styles.card}>
    <div className={styles.title}> </div>
    <div className={styles.profession}> </div>
    <div className={styles.gender}> </div>
    <div className={styles.date}> </div>
    {personProfile.deathday ? <div className={styles.date}> </div> : null}
    <div className={styles.place}> </div>
  </div>
)
