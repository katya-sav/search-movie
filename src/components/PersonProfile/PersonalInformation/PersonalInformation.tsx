import React from 'react'

import {
  getPersonGender,
  getAgeFromBirthday,
  getAgeOfDeath,
} from '../../../utils'

import { TPersonProfile } from '../../../types'
import styles from './PersonalInformation.module.css'

type TPersonalInformationProps = {
  personProfile: TPersonProfile
}

export const PersonalInformation = ({
  personProfile,
}: TPersonalInformationProps) => {
  const age = getAgeFromBirthday(`${personProfile.birthday}`)
  const ageOfDeath = getAgeOfDeath(
    `${personProfile.birthday}`,
    `${personProfile.deathday}`,
  )

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Personal Information</h3>
      <div className={styles.text}>Profession: {personProfile.profession}</div>
      <div className={styles.text}>
        Gender: {getPersonGender(`${personProfile.gender}`)}
      </div>
      <div className={styles.text}>
        Birthday: {personProfile.birthday}
        {`${personProfile.deathday}` === 'null' ? ` (${age} years)` : null}
      </div>
      <div className={styles.text}>
        {`${personProfile.deathday}` !== 'null'
          ? `Deathday: ${personProfile.deathday} (${ageOfDeath} years)`
          : null}
      </div>
      <div>Place of birth: {personProfile.placeOfBirth}</div>
    </div>
  )
}
