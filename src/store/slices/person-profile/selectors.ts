import { useSelector } from 'react-redux'

import { RootState } from '../../store'

export const usePersonProfile = (personId: string | undefined) =>
  useSelector((state: RootState) =>
    personId ? state.personProfile.personProfiles[personId] : null,
  )
