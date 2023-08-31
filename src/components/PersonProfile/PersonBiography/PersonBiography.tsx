import React from 'react'

import { getValidateText } from '../../../utils'
import { TPersonProfile } from '../../../types'

import styles from './PersonBiography.module.css'

type TPersonBiographyProps = {
  personProfile: TPersonProfile
}

export const PersonBiography = ({ personProfile }: TPersonBiographyProps) => (
  <div className={styles.wrapper}>
    <h3 className={styles.biographyTitle}>Biography </h3>
    <div className={styles.biography}>
      {' '}
      {getValidateText(personProfile.biography)}
    </div>{' '}
  </div>
)
