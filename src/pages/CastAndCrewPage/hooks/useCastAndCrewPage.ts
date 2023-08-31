import { useEffect } from 'react'

import {
  useAppDispatch,
  useMovieCardLoading,
  useMovieTitlePoster,
} from '../../../store'
import { fetchMovieCard } from '../../../store/slices/movie-card'

export const useCastAndCrewPage = (movieId: string | undefined) => {
  const dispatch = useAppDispatch()

  const { title, poster, year } = useMovieTitlePoster(movieId)

  const loading = useMovieCardLoading()

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieCard(movieId))
    }
  }, [movieId, dispatch])

  return { loading, title, poster, year }
}
