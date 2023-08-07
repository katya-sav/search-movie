import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { fetchMoviePersons } from '../../store/slices/movie-persons'
import { fetchMovieCard } from '../../store/slices/movie-card'
import { PersonsList } from '../../components/PersonsList'
import { ScrollToTop } from '../../utils/components'
import { PageTitleBlock } from '../../components/PageTitleBlock'
import {
  useAppDispatch,
  useMovieCast,
  useMovieCrew,
  useMovieTitlePoster,
} from '../../store'
import styles from './CastAndCrewPage.module.css'

export const CastAndCrewPage = () => {
  const { movieId } = useParams()
  const dispatch = useAppDispatch()

  const { title, poster, year } = useMovieTitlePoster(movieId)

  const movieCast = useMovieCast(movieId)

  const movieCrew = useMovieCrew(movieId)

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMoviePersons(movieId))
      dispatch(fetchMovieCard(movieId))
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
              {title && poster && year && (
                <PageTitleBlock
                  title={title}
                  poster={poster}
                  year={year}
                  movieId={movieId}
                />
              )}
              <div className={styles.section}>
                <PersonsList
                  movieId={movieId}
                  title="Cast"
                  items={movieCast}
                  className={styles.container}
                />
                <PersonsList
                  movieId={movieId}
                  title="Crew"
                  items={movieCrew}
                  className={styles.container}
                />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  )
}
