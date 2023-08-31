import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import image from '../../images/error.png'

import styles from './PageNotFound.module.css'
import { ButtonBack } from '../../components/ButtonBack'

export const PageNotFound = () => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate(`/`, { replace: false })
  }, [navigate])

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="error" />
      <h1 className={styles.title}>Page Not Found</h1>
      <div className={styles.text}>You can return to the Homepage</div>
      <ButtonBack
        title="Home"
        onClick={handleNavigate}
        className={styles.button}
      />
    </div>
  )
}
