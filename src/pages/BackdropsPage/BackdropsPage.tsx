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
  useMovieBackdrops,
} from '../../store'
import styles from './BackdropsPage.module.css'

export const BackdropsPage = () => {
  const { movieId } = useParams()
  const dispatch = useAppDispatch()

  const { title, poster, year } = useMovieTitlePoster(movieId)

  const movieBackdrops = useMovieBackdrops(movieId)

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
                  images={movieBackdrops}
                  size="original"
                  className={styles.list}
                  width={500}
                />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  )
}
