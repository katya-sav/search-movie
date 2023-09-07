import { mapPersonMovies } from './map-person-movies'
import { TPersonProfMovie } from './types'

type TGetPersonMoviesSuccess = {
  type: 'success'
  data: TPersonProfMovie
}

type TGetPersonMoviesError = {
  type: 'error'
  error: any
}

type TGetPersonMoviesResponse = TGetPersonMoviesSuccess | TGetPersonMoviesError

export const getPersonMovies = async (
  personId: string,
): Promise<TGetPersonMoviesResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'

    const personMoviesRes = await fetch(
      `${baseUrl}/3/person/${personId}/movie_credits`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )

    const personMovies = await personMoviesRes.json()

    const data = mapPersonMovies(personMovies)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
