import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const selectMovieCast = createSelector(
  [
    (state: RootState) => state.moviePersons.movieCast,
    (_: RootState, movieId?: string) => movieId,
  ],
  (movieCast, movieId) => getListSafe(movieCast, movieId),
)

export const selectMovieCrew = createSelector(
  [
    (state: RootState) => state.moviePersons.movieCrew,
    (_: RootState, movieId?: string) => movieId,
  ],
  (movieCrew, movieId) => getListSafe(movieCrew, movieId),
)
