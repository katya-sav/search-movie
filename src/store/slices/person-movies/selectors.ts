import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const selectPersonProfCast = createSelector(
  [
    (state: RootState) => state.personMovies.personProfCast,
    (_: RootState, personId?: string) => personId,
  ],
  (personProfCast, personId) => getListSafe(personProfCast, personId),
)

export const selectPersonProfCrew = createSelector(
  [
    (state: RootState) => state.personMovies.personProfCrew,
    (_: RootState, personId?: string) => personId,
  ],
  (personProfCrew, personId) => getListSafe(personProfCrew, personId),
)
