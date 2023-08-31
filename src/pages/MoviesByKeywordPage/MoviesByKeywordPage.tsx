import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MoviesList } from '../../components/MoviesList'
import { ScrollToTop } from '../../utils/components'
import { useMoviesByKeywordPage } from './hooks'
import { SkeletonMoviesList } from '../../components/Skeletons'

export const MoviesByKeywordPage = () => {
  const { keyId } = useParams()
  const { loading, moviesByKeyword } = useMoviesByKeywordPage(keyId)

  if (!keyId) {
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
                  <MoviesList movies={moviesByKeyword} />
                </div>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  )
}
