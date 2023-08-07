import { mapPersonProfile } from './map-person-profile'
import { TPersonProfile } from '../../types'

type TGetPersonProfileSuccess = {
  type: 'success'
  data: TPersonProfile
}

type TGetPersonProfileError = {
  type: 'error'
  error: any
}

type TGetPersonProfileResponse =
  | TGetPersonProfileSuccess
  | TGetPersonProfileError

export const getPersonProfile = async (
  personId: string,
): Promise<TGetPersonProfileResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'
    const personProfileRes = await fetch(
      `${baseUrl}/3/person/${personId}?language=en-US`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )
    const personProfile = await personProfileRes.json()

    const data = mapPersonProfile(personProfile)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
