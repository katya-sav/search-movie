import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MoviesList } from '../../components/MoviesList'
import { ScrollToTop } from '../../utils/components'
import { useClassifiedMoviesPage } from './hooks'
import { SkeletonMoviesList } from '../../components/Skeletons'

export const ClassifiedMoviesPage = () => {
  const { pathType } = useParams()

  const { loading, classifiedMovies } = useClassifiedMoviesPage(pathType)

  if (!pathType) {
    return null
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {loading ? (
                <SkeletonMoviesList />
              ) : (
                <div>
                  <ScrollToTop />
                  <MoviesList movies={classifiedMovies} />
                </div>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  )
}
