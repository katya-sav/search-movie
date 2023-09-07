import { createSelector } from '@reduxjs/toolkit'

import { getListSafe } from '../../../utils'
import { RootState } from '../../store'

export const selectPersonImages = createSelector(
  [
    (state: RootState) => state.personImages.personImages,
    (_: RootState, personId?: string) => personId,
  ],
  (personImages, personId) => getListSafe(personImages, personId),
)
