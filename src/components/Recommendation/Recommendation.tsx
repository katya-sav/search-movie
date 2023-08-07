import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { SafeImage } from '../SafeImage'
import { TextWithIcon } from '../TextWithIcon'
import { getNumberFromRating } from '../../utils'
import { TRecommendation } from '../../types'
import styles from './Recommendation.module.css'

type TRecommendationProps = {
  recommendation: TRecommendation
}

export const Recommendation = ({ recommendation }: TRecommendationProps) => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate(`/card/${recommendation.id}`, { replace: false })
  }, [navigate, recommendation.id])

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
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className={styles.card}
    >
      <div className={styles.container}>
        <div className={styles.title}>{recommendation.title}</div>
        <SafeImage
          src={`https://api.moviesdb.ru/t/p/w342${recommendation.poster}`}
          alt={recommendation.title}
          className={styles.image}
          errorClassName={styles.imageError}
        />
        <div className={styles.overlay}>
          <TextWithIcon
            icon="star"
            size="sm"
            text={getNumberFromRating(recommendation.rating)}
          />
        </div>
      </div>
    </div>
  )
}
