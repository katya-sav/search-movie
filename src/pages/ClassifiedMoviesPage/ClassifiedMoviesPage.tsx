import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MoviesList } from '../../components/MoviesList'
import { useClassifiedMoviesPage } from './hooks'
import { useScrollToTop } from '../../utils'
import { SkeletonMoviesList } from '../../components/Skeletons'
import { TClassifiedMovie } from '../../types'

export const ClassifiedMoviesPage = () => {
  const { pathType } = useParams()

  const { loading, classifiedMovies } = useClassifiedMoviesPage(
    pathType as TClassifiedMovie,
  )

  useScrollToTop()

  if (!pathType) {
    return null
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <SkeletonMoviesList />
            ) : (
              <MoviesList movies={classifiedMovies} />
            )
          }
        />
      </Routes>
    </div>
  )
}
