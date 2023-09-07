import { useEffect } from 'react'

import {
  useAppDispatch,
  useMovieCardLoading,
  useMovieTitle,
} from '../../../store'
import { fetchMovieCard } from '../../../store/slices/movie-card'

export const useCastAndCrewPage = (movieId: string | undefined) => {
  const dispatch = useAppDispatch()

  const { title } = useMovieTitle(movieId)

  const loading = useMovieCardLoading()

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieCard(movieId))
    }
  }, [movieId, dispatch])

  return { loading, title }
}
