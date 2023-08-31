import React, { useMemo } from 'react'

import { Recommendation } from '../Recommendation/Recommendation'
import { TRecommendation } from '../../types'
import styles from './RecommendationsList.module.css'

type TRecommendationsListProps = {
  title: string
  recommendations: TRecommendation[]
}

export const RecommendationsList = ({
  recommendations,
  title,
}: TRecommendationsListProps) => {
  const renderRecommendations = useMemo(
    () =>
      recommendations.map(recommendation => (
        <Recommendation
          key={recommendation.id}
          recommendation={recommendation}
        />
      )),
    [recommendations],
  )

  if (!recommendations.length) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>{renderRecommendations}</div>
    </div>
  )
}
