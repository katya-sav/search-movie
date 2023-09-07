import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const selectMovieRecommendations = createSelector(
  [
    (state: RootState) => state.movieRecommendations.recommendations,
    (_: RootState, movieId?: string) => movieId,
  ],
  (recommendations, movieId) => getListSafe(recommendations, movieId),
)
