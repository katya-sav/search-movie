import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const selectMovieVideos = createSelector(
  [
    (state: RootState) => state.movieVideos.videos,
    (_: RootState, movieId?: string) => movieId,
  ],
  (videos, movieId) => getListSafe(videos, movieId),
)
