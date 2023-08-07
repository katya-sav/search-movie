import React, { useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'

import { fetchMovieCard } from '../../store/slices/movie-card'
import { fetchMoviePersons } from '../../store/slices/movie-persons'
import { fetchMovieRecommendations } from '../../store/slices/movie-recommendations'
import { fetchMovieKeywords } from '../../store/slices/movie-keywords'
import { ScrollToTop } from '../../utils/components'
import { MovieCard } from '../../components/MovieCard'
import { PersonsList } from '../../components/PersonsList'
import { TabsMedia } from '../../components/TabsMedia'
import { AdditionalInformation } from '../../components/AdditionalInformation'
import { KeywordsList } from '../../components/KeywordsList'
import { RecommendationsList } from '../../components/RecommendationsList'
import {
  useAppDispatch,
  useMovieRecommendations,
  useMovieCard,
  useMovieKeywords,
  useMovieCast,
} from '../../store'
import styles from './CardPage.module.css'

export const CardPage = () => {
  const { movieId } = useParams()
  const dispatch = useAppDispatch()

  const movieCard = useMovieCard(movieId)

  const movieCast = useMovieCast(movieId)

  const movieRecommendations = useMovieRecommendations(movieId)

  const movieKeywords = useMovieKeywords(movieId)

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieCard(movieId))
      dispatch(fetchMoviePersons(movieId))
      dispatch(fetchMovieRecommendations(movieId))
      dispatch(fetchMovieKeywords(movieId))
    }
  }, [movieId, dispatch])

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
              <MovieCard movieCard={movieCard} />
              <div className={styles.section}>
                <div className={styles.personsAndMedia}>
                  <div className={styles.persons}>
                    <PersonsList
                      movieId={movieId}
                      title="Starring"
                      items={movieCast.slice(0, 10)}
                      viewAll
                    />
                  </div>
                  <TabsMedia />
                  <RecommendationsList
                    title="Recommendations"
                    recommendations={movieRecommendations}
                  />
                </div>
                <div className={styles.additionally}>
                  <AdditionalInformation movieCard={movieCard} />
                  <KeywordsList title="Keywords" keywords={movieKeywords} />
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  )
}
