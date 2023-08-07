import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { SafeImage } from '../SafeImage'
import { ButtonBack } from '../ButtonBack'
import styles from './PageTitleBlock.module.css'

type TPageTitleBlockProps = {
  title: string
  poster: string
  year: string
  movieId: string
}

export const PageTitleBlock = ({
  title,
  poster,
  year,
  movieId,
}: TPageTitleBlockProps) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(`/card/${movieId}`, { replace: false })
  }, [navigate, movieId])

  return (
    <div className={styles.container}>
      <SafeImage
        src={`https://api.moviesdb.ru/t/p/w185${poster}`}
        alt={title}
        className={styles.image}
        errorClassName={styles.imageError}
      />
      <div className={styles.details}>
        <h2 className={styles.text}>{title}</h2>
        <div className={styles.text}>Year: {year}</div>
        <ButtonBack title="Back" onClick={handleClick} />
      </div>
    </div>
  )
}
