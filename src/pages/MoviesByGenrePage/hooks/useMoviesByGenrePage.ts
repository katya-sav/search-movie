import { useEffect } from 'react'

import { fetchMoviesByGenre } from '../../../store/slices/movies-by-genre'
import {
  useAppDispatch,
  useMoviesByGenre,
  useMoviesByGenreLoading,
} from '../../../store'

export const useMoviesByGenrePage = (genreId: string | undefined) => {
  const dispatch = useAppDispatch()

  const moviesByGenre = useMoviesByGenre(genreId)

  const loading = useMoviesByGenreLoading()

  useEffect(() => {
    if (genreId) {
      dispatch(fetchMoviesByGenre(genreId))
    }
  }, [genreId, dispatch])

  return { loading, moviesByGenre }
}
