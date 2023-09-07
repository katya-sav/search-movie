import React from 'react'
import { SkeletonMovieCard } from './SkeletonMovieCard'
import { SkeletonMovieDescription } from './SkeletonMovieDescription'
import { SkeletonPersonsList } from './SkeletonPersonsList'
import { SkeletonMedia } from './SkeletonMedia'
import { SkeletonRecommendations } from './SkeletonRecommendations'
import { SkeletonAdditionalInformation } from './SkeletonAdditionalInformation'
import { SkeletonKeywords } from './SkeletonKeywords'

import styles from './SkeletonCardPage.module.css'

export const SkeletonCardPage = () => (
  <div>
    <SkeletonMovieCard />
    <SkeletonMovieDescription />
    <div className={styles.section}>
      <div className={styles.personsAndMedia}>
        <SkeletonPersonsList />
        <SkeletonMedia />
        <SkeletonRecommendations />
      </div>
      <div className={styles.additionally}>
        <SkeletonAdditionalInformation />
        <SkeletonKeywords />
      </div>
    </div>
  </div>
)
