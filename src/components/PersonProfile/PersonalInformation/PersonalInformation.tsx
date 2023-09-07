import React from 'react'

import {
  getPersonGender,
  getAgeFromBirthday,
  getAgeOfDeath,
  getValidateText,
} from '../../../utils'

import { TPersonProfile } from '../../../types'
import styles from './PersonalInformation.module.css'

type TPersonalInformationProps = {
  personProfile: TPersonProfile
}

export const PersonalInformation = ({
  personProfile,
}: TPersonalInformationProps) => {
  const age = getAgeFromBirthday(personProfile.birthday)
  const ageOfDeath = getAgeOfDeath(
    personProfile.birthday,
    personProfile.deathday,
  )

  const isPersonAlive = personProfile.deathday === null

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Personal Information</h3>
      <div className={styles.text}>Profession: {personProfile.profession}</div>
      <div className={styles.text}>
        Gender: {getPersonGender(Number(personProfile.gender))}
      </div>
      <div className={styles.text}>
        Birthday: {getValidateText(personProfile.birthday)}
        {isPersonAlive && age ? ` (${age} years)` : null}
      </div>
      <div className={styles.text}>
        {!isPersonAlive && ageOfDeath
          ? `Deathday: ${personProfile.deathday} (${ageOfDeath} years)`
          : null}
      </div>
      <div>Place of birth: {getValidateText(personProfile.placeOfBirth)}</div>
    </div>
  )
}
