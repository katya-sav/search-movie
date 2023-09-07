import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const selectMovieKeyword = createSelector(
  [
    (state: RootState) => state.movieKeywords.keywords,
    (_: RootState, movieId?: string) => movieId,
  ],
  (keywords, movieId) => getListSafe(keywords, movieId),
)
