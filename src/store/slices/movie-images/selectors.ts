import { createSelector } from '@reduxjs/toolkit'

import { getListSafe } from '../../../utils'
import { RootState } from '../../store'

export const selectMovieBackdrops = createSelector(
  [
    (state: RootState) => state.movieImages.backdrops,
    (_: RootState, movieId?: string) => movieId,
  ],
  (backdrops, movieId) => getListSafe(backdrops, movieId),
)

export const selectMoviePosters = createSelector(
  [
    (state: RootState) => state.movieImages.posters,
    (_: RootState, movieId?: string) => movieId,
  ],
  (posters, movieId) => getListSafe(posters, movieId),
)
