import { useEffect } from 'react'

import { fetchMovies } from '../../../store/slices/movies'
import { useAppDispatch, useMovies, useMoviesLoading } from '../../../store'

export const useSearchPage = (searchQuery: string | undefined) => {
  const dispatch = useAppDispatch()

  const movies = useMovies(searchQuery)
  const loading = useMoviesLoading()

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchMovies(searchQuery))
    }
  }, [searchQuery, dispatch])

  return { movies, loading }
}
