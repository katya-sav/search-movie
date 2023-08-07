import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { PersonImage } from '../PersonImage/PersonImage'
import { TImage } from '../../types'

import styles from './PersonImagesList.module.css'
import { ButtonBack } from '../ButtonBack'

type TPersonImagesListProps = {
  personImages: TImage[]
  personId: string
}

export const PersonImagesList = ({
  personImages,
  personId,
}: TPersonImagesListProps) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(`/person/${personId}`, { replace: false })
  }, [navigate, personId])

  const renderPersonImage = personImages.map(personImage => (
    <PersonImage personImage={personImage} />
  ))

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>All Photos</h3>
      <div className={styles.list}>{renderPersonImage}</div>
      <ButtonBack
        title="Back to Person"
        onClick={handleClick}
        className={styles.button}
      />
    </div>
  )
}
