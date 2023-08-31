import { useSelector } from 'react-redux'

import { RootState } from '../../store'

export const usePersonProfile = (personId: string | undefined) =>
  useSelector((state: RootState) =>
    personId ? state.personProfile.personProfiles[personId] : null,
  )

export const usePersonProfileLoading = () =>
  useSelector((state: RootState) => state.personProfile.state === 'loading')
