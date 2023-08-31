import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useMovieRecommendations = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.movieRecommendations.recommendations, movieId),
  )

export const useMovieRecommendationsLoading = () =>
  useSelector(
    (state: RootState) => state.movieRecommendations.state === 'loading',
  )

// export const useMovieRecommendationRating = (movieId: string | undefined) => {
//   const recommendations = useSelector((state: RootState) =>
//     movieId ? state.movieRecommendations.recommendations[movieId] : null,
//   )

//   return {
//     rating: recommendations,
//   }
// }
