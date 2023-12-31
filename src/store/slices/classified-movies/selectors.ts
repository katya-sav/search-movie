import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const selectClassifiedMovies = createSelector(
  [
    (state: RootState) => state.classifiedMovies.movies,
    (_: RootState, pathType?: string) => pathType,
  ],
  (movies, pathType) => getListSafe(movies, pathType),
)
