import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { getValidateText } from '../../../utils'
import { TPersonMovie } from '../../../types'
import styles from './PersonMovie.module.css'

type TPersonMovieProps = {
  personMovie: TPersonMovie
}

export const PersonMovie = ({ personMovie }: TPersonMovieProps) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(`/card/${personMovie.id}`, { replace: false })
  }, [navigate, personMovie])

  return (
    <div className={styles.container}>
      <div className={styles.year}>{getValidateText(personMovie.year)}</div>
      <button
        type="button"
        onClick={handleClick}
        className={styles.titleButton}
      >
        {getValidateText(personMovie.title)}
      </button>
      <div className={styles.prof}>{getValidateText(personMovie.prof)}</div>
    </div>
  )
}
