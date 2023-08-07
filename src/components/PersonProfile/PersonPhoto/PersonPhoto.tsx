import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { SafeImage } from '../../SafeImage'
import { ButtonRight } from '../../ButtonRight'
import { TPersonProfile } from '../../../types'

import styles from './PersonPhoto.module.css'

type TPersonPhotoProps = {
  personProfile: TPersonProfile
}

export const PersonPhoto = ({ personProfile }: TPersonPhotoProps) => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate(`/personImages/${personProfile.id}`, { replace: false })
  }, [navigate, personProfile.id])

  return (
    <div>
      <SafeImage
        src={`https://api.moviesdb.ru/t/p/w342${personProfile.image}`}
        alt={personProfile.name}
        className={styles.image}
        errorClassName={styles.imageError}
      />
      <ButtonRight
        className={styles.button}
        title="Show All Photos"
        onClick={handleNavigate}
      />
    </div>
  )
}
