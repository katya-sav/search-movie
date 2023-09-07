import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const selectMoviesByKeyword = createSelector(
  [
    (state: RootState) => state.moviesByKeyword.movies,
    (_: RootState, keyId?: string) => keyId,
  ],
  (movies, keyId) => getListSafe(movies, keyId),
)
