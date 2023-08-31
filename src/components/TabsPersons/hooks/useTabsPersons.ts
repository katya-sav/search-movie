import { useEffect } from 'react'

import { useAppDispatch, useMovieCast, useMovieCrew } from '../../../store'
import { fetchMoviePersons } from '../../../store/slices/movie-persons'

export const useTabsPersons = (movieId: string | undefined) => {
  const dispatch = useAppDispatch()
  const cast = useMovieCast(movieId)
  const crew = useMovieCrew(movieId)

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMoviePersons(movieId))
    }
  }, [movieId, dispatch])

  return { cast, crew }
}
