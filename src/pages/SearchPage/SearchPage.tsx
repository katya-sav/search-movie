import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { fetchMovies } from '../../store/slices/movies'
import { MoviesList } from '../../components/MoviesList'
import { useAppDispatch, useMovies } from '../../store'

export const SearchPage = () => {
  const { searchQuery } = useParams()
  const dispatch = useAppDispatch()

  const movies = useMovies(searchQuery)

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchMovies(searchQuery))
    }
  }, [searchQuery, dispatch])

  return (
    <div>
      <Routes>
        <Route path="/" element={<MoviesList movies={movies} />} />
      </Routes>
    </div>
  )
}
