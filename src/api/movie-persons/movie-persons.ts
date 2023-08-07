import { mapMoviePersons } from './map-movie-persons'
import { TMoviePersons } from './types'

type TGetMoviePersonsSuccess = {
  type: 'success'
  data: TMoviePersons
}

type TGetMoviePersonsError = {
  type: 'error'
  error: any
}

type TGetMoviePersonsResponse = TGetMoviePersonsSuccess | TGetMoviePersonsError

export const getMoviePersons = async (
  movieId: string,
): Promise<TGetMoviePersonsResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'
    const moviePersonsRes = await fetch(
      `${baseUrl}/3/movie/${movieId}/credits?language=en-US`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )

    const moviePersons = await moviePersonsRes.json()

    const data = mapMoviePersons(moviePersons)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
