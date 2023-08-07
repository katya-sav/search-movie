import { mapPersonImages } from './map-person-images'
import { TImage } from '../../types'

type TGetPersonImagesSuccess = {
  type: 'success'
  data: TImage[]
}

type TGetPersonImagesError = {
  type: 'error'
  error: any
}

type TGetPersonImagesResponse = TGetPersonImagesSuccess | TGetPersonImagesError

export const getPersonImages = async (
  personId: string,
): Promise<TGetPersonImagesResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'
    const personImagesRes = await fetch(
      `${baseUrl}/3/person/${personId}/images`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )
    const personImages = await personImagesRes.json()

    const data = mapPersonImages(personImages)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
