import React from 'react'

import { TPersonProfile } from '../../../types'
import styles from './PersonBiography.module.css'

type TPersonBiographyProps = {
  personProfile: TPersonProfile
}

export const PersonBiography = ({ personProfile }: TPersonBiographyProps) => (
  <div>
    <h3 className={styles.biographyTitle}>Biography </h3>
    <div className={styles.biography}> {personProfile.biography}</div>{' '}
  </div>
)
