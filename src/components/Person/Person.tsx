import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { SafeImage } from '../SafeImage'
import styles from './Person.module.css'

type TPersonProps = {
  personId: string
  namePerson: string
  image: string
  description: string
}

export const Person = ({
  namePerson,
  image,
  description,
  personId,
}: TPersonProps) => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate(`/person/${personId}`, { replace: false })
  }, [navigate, personId])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()

        handleNavigate()
      }
    },
    [handleNavigate],
  )
  return (
    <div
      className={styles.card}
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <SafeImage
        src={`https://api.moviesdb.ru/t/p/w185${image}`}
        alt={namePerson}
        className={styles.image}
        errorClassName={styles.imageError}
      />
      <div className={styles.name}>{namePerson}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
