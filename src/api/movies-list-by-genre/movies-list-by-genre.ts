import { mapMoviesListByGenre } from './map-movies-list-by-genre'
import { TMovie } from '../../types'

type TGetMoviesListByGenreSuccess = {
  type: 'success'
  data: TMovie[]
}

type TGetMoviesListByGenreError = {
  type: 'error'
  error: any
}

type TGetMoviesListByGenreResponse =
  | TGetMoviesListByGenreSuccess
  | TGetMoviesListByGenreError

export const getMoviesListByGenre = async (
  genreId: string,
): Promise<TGetMoviesListByGenreResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'
    const moviesListByGenreRes = await fetch(
      `${baseUrl}/3/discover/movie?query&with_genres=${genreId}`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )

    const moviesListByGenre = await moviesListByGenreRes.json()

    const data = mapMoviesListByGenre(moviesListByGenre)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
