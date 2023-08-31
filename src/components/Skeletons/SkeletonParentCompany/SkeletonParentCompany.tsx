import React from 'react'

import { Icon } from '../../Icon'
import { TCompany } from '../../../types'

import styles from './SkeletonParentCompany.module.css'

type TSkeletonParentCompanyProps = {
  movieCompany: TCompany
}

export const SkeletonParentCompany = ({
  movieCompany,
}: TSkeletonParentCompanyProps) => {
  if (!movieCompany.parentCompany) {
    return null
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}> </div>
      <div className={styles.section}>
        <div className={styles.text}> </div>
        <Icon icon="image" size="xl" className={styles.image} />
      </div>
    </div>
  )
}
