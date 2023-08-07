import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { fetchMovieVideos } from '../../store/slices/movie-videos'
import { fetchMovieCard } from '../../store/slices/movie-card'
import { MovieVideosList } from '../../components/TabsMedia/MovieVideosList'
import { ScrollToTop } from '../../utils/components'
import { PageTitleBlock } from '../../components/PageTitleBlock'
import {
  useAppDispatch,
  useMovieTitlePoster,
  useMovieVideos,
} from '../../store'
import styles from './VideosPage.module.css'

export const VideosPage = () => {
  const { movieId } = useParams()
  const dispatch = useAppDispatch()

  const { title, poster, year } = useMovieTitlePoster(movieId)

  const movieVideos = useMovieVideos(movieId)

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieVideos(movieId))
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
                <MovieVideosList className={styles.list} videos={movieVideos} />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  )
}
