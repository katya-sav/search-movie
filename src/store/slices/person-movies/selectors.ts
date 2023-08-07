import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const usePersonProfCast = (personId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.personMovies.personProfCast, personId),
  )

export const usePersonProfCrew = (personId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.personMovies.personProfCrew, personId),
  )
