import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MoviesList } from '../../components/MoviesList'
import { ScrollToTop } from '../../utils/components'
import { useMoviesByGenrePage } from './hooks'
import { SkeletonMoviesList } from '../../components/Skeletons'

export const MoviesByGenrePage = () => {
  const { genreId } = useParams()

  const { loading, moviesByGenre } = useMoviesByGenrePage(genreId)

  if (!genreId) {
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
                  <MoviesList movies={moviesByGenre} />
                </div>
              )}
              /
            </div>
          }
        />
      </Routes>
    </div>
  )
}
