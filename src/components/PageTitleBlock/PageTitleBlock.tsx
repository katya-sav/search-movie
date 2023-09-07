import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonBack } from '../ButtonBack'
import styles from './PageTitleBlock.module.css'

type TPageTitleBlockProps = {
  title: string
  movieId: string
}

export const PageTitleBlock = ({ title, movieId }: TPageTitleBlockProps) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(`/card/${movieId}`, { replace: false })
  }, [navigate, movieId])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ButtonBack
        title="Back"
        onClick={handleClick}
        className={styles.button}
      />
    </div>
  )
}
