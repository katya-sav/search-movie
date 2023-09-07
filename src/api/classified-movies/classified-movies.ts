import { TMovie, TClassifiedMovie } from '../../types'
import { mapClassifiedMovies } from './map-classified-movies'

type TGetClassifiedMoviesSuccess = {
  type: 'success'
  data: TMovie[]
}

type TGetClassifiedMoviesError = {
  type: 'error'
  error: any
}

type TGetClassifiedMoviesResponse =
  | TGetClassifiedMoviesSuccess
  | TGetClassifiedMoviesError

export const getClassifiedMovies = async (
  pathType: TClassifiedMovie,
): Promise<TGetClassifiedMoviesResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'

    const classifiedMoviesRes = await fetch(
      `${baseUrl}/3/movie/${pathType}?language=en-US&page=1`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )
    const classifiedMovies = await classifiedMoviesRes.json()

    const data = mapClassifiedMovies(classifiedMovies)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
