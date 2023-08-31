import React from 'react'

import { Icon } from '../../Icon'
import { SkeletonParentCompany } from '../SkeletonParentCompany'
import { TCompany } from '../../../types'

import styles from './SkeletonCompanyPage.module.css'

type TSkeletonCompanyPageProps = {
  movieCompany: TCompany | null
}

export const SkeletonCompanyPage = ({
  movieCompany,
}: TSkeletonCompanyPageProps) => {
  if (!movieCompany) {
    return null
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Icon icon="image" size="xl" className={styles.image} />
        <div className={styles.section}>
          <div className={styles.title}> </div>
          <div className={styles.text}> </div>
          <div className={styles.headquarters}> </div>
          <div className={styles.homepage}> </div>
          <SkeletonParentCompany movieCompany={movieCompany} />
        </div>
      </div>
    </div>
  )
}
