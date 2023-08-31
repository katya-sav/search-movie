import { useEffect } from 'react'

import { fetchMovieCard } from '../../../store/slices/movie-card'
import { fetchMoviePersons } from '../../../store/slices/movie-persons'
import { fetchMovieRecommendations } from '../../../store/slices/movie-recommendations'
import { fetchMovieKeywords } from '../../../store/slices/movie-keywords'
import {
  useAppDispatch,
  useMovieRecommendations,
  useMovieCard,
  useMovieKeyword,
  useMovieCast,
  useMovieCardLoading,
  useMoviePersonsLoading,
  useMovieKeywordsLoading,
  useMovieRecommendationsLoading,
} from '../../../store'

export const useCardPage = (movieId: string | undefined) => {
  const dispatch = useAppDispatch()

  const card = useMovieCard(movieId)
  const cast = useMovieCast(movieId)
  const recommendations = useMovieRecommendations(movieId)
  const keywords = useMovieKeyword(movieId)

  const movie = {
    card,
    cast,
    recommendations,
    keywords,
  }

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieCard(movieId))
      dispatch(fetchMoviePersons(movieId))
      dispatch(fetchMovieRecommendations(movieId))
      dispatch(fetchMovieKeywords(movieId))
    }
  }, [movieId, dispatch])

  const isMovieCardLoading = useMovieCardLoading()
  const isMoviePersonsLoading = useMoviePersonsLoading()
  const isMovieKeywordsLoading = useMovieKeywordsLoading()
  const isMovieRecommendationsLoading = useMovieRecommendationsLoading()

  const loading =
    isMovieCardLoading ||
    isMoviePersonsLoading ||
    isMovieKeywordsLoading ||
    isMovieRecommendationsLoading

  return { loading, movie }
}
