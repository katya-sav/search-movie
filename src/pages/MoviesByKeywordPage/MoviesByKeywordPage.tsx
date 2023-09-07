import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MoviesList } from '../../components/MoviesList'
import { useScrollToTop } from '../../utils'
import { useMoviesByKeywordPage } from './hooks'
import { SkeletonMoviesList } from '../../components/Skeletons'

export const MoviesByKeywordPage = () => {
  const { keyId } = useParams()
  const { loading, moviesByKeyword } = useMoviesByKeywordPage(keyId)

  useScrollToTop()

  if (!keyId) {
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
              <MoviesList movies={moviesByKeyword} />
            )
          }
        />
      </Routes>
    </div>
  )
}
