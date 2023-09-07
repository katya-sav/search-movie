import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MoviesList } from '../../components/MoviesList'
import { useScrollToTop } from '../../utils'
import { useMoviesByGenrePage } from './hooks'
import { SkeletonMoviesList } from '../../components/Skeletons'

export const MoviesByGenrePage = () => {
  const { genreId } = useParams()

  const { loading, moviesByGenre } = useMoviesByGenrePage(genreId)

  useScrollToTop()

  if (!genreId) {
    return null
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          loading ? (
            <SkeletonMoviesList />
          ) : (
            <MoviesList movies={moviesByGenre} />
          )
        }
      />
    </Routes>
  )
}
