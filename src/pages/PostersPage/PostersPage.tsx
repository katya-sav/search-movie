import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { fetchMovieImages } from '../../store/slices/movie-images'
import { fetchMovieCard } from '../../store/slices/movie-card'
import { MovieImagesList } from '../../components/TabsMedia/MovieImagesList'
import { ScrollToTop } from '../../utils/components'
import { PageTitleBlock } from '../../components/PageTitleBlock'
import {
  useAppDispatch,
  useMovieTitlePoster,
  useMoviePosters,
} from '../../store'
import styles from './PostersPage.module.css'

export const PostersPage = () => {
  const { movieId } = useParams()
  const dispatch = useAppDispatch()

  const { title, poster, year } = useMovieTitlePoster(movieId)

  const moviePosters = useMoviePosters(movieId)

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieImages(movieId))
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
                <MovieImagesList
                  images={moviePosters}
                  className={styles.list}
                  size="w185"
                  width={185}
                />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  )
}
