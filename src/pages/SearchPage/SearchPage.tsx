import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MoviesList } from '../../components/MoviesList'
import { useSearchPage } from './hooks'
import { SkeletonMoviesList } from '../../components/Skeletons'

export const SearchPage = () => {
  const { searchQuery } = useParams()

  const { movies, loading } = useSearchPage(searchQuery)

  return (
    <Routes>
      <Route
        path="/"
        element={
          loading ? (
            <SkeletonMoviesList />
          ) : (
            <MoviesList searchQuery={searchQuery} movies={movies} />
          )
        }
      />
    </Routes>
  )
}
