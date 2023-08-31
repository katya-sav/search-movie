import { useEffect } from 'react'

import { fetchPersonProfile } from '../../../store/slices/person-profile'
import {
  useAppDispatch,
  usePersonProfile,
  usePersonProfileLoading,
} from '../../../store'

export const usePersonPage = (personId: string | undefined) => {
  const dispatch = useAppDispatch()

  const person = usePersonProfile(personId)

  const loading = usePersonProfileLoading()

  useEffect(() => {
    if (personId) {
      dispatch(fetchPersonProfile(personId))
    }
  }, [personId, dispatch])

  return { loading, person }
}
