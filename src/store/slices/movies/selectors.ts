import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const selectMovies = createSelector(
  [
    (state: RootState) => state.movies.movies,
    (_: RootState, searchQuery?: string) => searchQuery,
  ],
  (movies, searchQuery) => getListSafe(movies, searchQuery),
)
