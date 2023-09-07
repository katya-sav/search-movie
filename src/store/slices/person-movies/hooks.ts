import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectPersonProfCast, selectPersonProfCrew } from './selectors'

export const usePersonProfCast = (personId: string | undefined) =>
  useSelector((state: RootState) => selectPersonProfCast(state, personId))

export const usePersonProfCrew = (personId: string | undefined) =>
  useSelector((state: RootState) => selectPersonProfCrew(state, personId))
