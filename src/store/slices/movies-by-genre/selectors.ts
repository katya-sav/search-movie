import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const selectMoviesByGenre = createSelector(
  [
    (state: RootState) => state.moviesByGenre.movies,
    (_: RootState, genreId?: string) => genreId,
  ],
  (movies, genreId) => getListSafe(movies, genreId),
)
