import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useMovieRecommendations = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.movieRecommendations.recommendations, movieId),
  )
