import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'

import { ScrollToTop } from '../../utils/components'
import { SkeletonCardPage } from '../../components/Skeletons'
import { MovieCard } from '../../components/MovieCard'
import { PersonsList } from '../../components/PersonsList'
import { TabsMedia } from '../../components/TabsMedia'
import { AdditionalInformation } from '../../components/AdditionalInformation'
import { KeywordsList } from '../../components/KeywordsList'
import { RecommendationsList } from '../../components/RecommendationsList'
import { useCardPage } from './hooks'

import styles from './CardPage.module.css'

export const CardPage = () => {
  const { movieId } = useParams()
  const { loading, movie } = useCardPage(movieId)

  if (!movieId) {
    return null
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              {loading ? (
                <SkeletonCardPage />
              ) : (
                <div>
                  <MovieCard movieCard={movie.card} />
                  <div className={styles.section}>
                    <div className={styles.personsAndMedia}>
                      <div className={styles.persons}>
                        <PersonsList
                          movieId={movieId}
                          title="Starring"
                          items={movie.cast.slice(0, 10)}
                          viewAll
                        />
                      </div>
                      <TabsMedia />
                      <RecommendationsList
                        title="Recommendations"
                        recommendations={movie.recommendations}
                      />
                    </div>
                    <div className={styles.additionally}>
                      <AdditionalInformation movieCard={movie.card} />
                      <KeywordsList
                        title="Keywords"
                        keywords={movie.keywords}
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          }
        />
      </Routes>
    </div>
  )
}
