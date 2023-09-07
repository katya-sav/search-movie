import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectMovieRecommendations } from './selectors'

export const useMovieRecommendations = (movieId: string | undefined) =>
  useSelector((state: RootState) => selectMovieRecommendations(state, movieId))

export const useMovieRecommendationsLoading = () =>
  useSelector(
    (state: RootState) => state.movieRecommendations.state === 'loading',
  )
