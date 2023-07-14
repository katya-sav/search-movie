import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { fetchMovies } from '../../store/slices/movies-slice'
import { MoviesList } from '../../components/MoviesList'
import { useAppDispatch, RootState } from '../../store'

export const SearchPage = () => {
  const { searchQuery } = useParams()
  const dispatch = useAppDispatch()

  const movies = useSelector((state: RootState) => state.movies.movies)

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
