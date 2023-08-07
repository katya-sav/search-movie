import { mapMoviesListByKeywords } from './map-movies-list-by-keywords'
import { TMovie } from '../../types'

type TGetMoviesListByKeywordsSuccess = {
  type: 'success'
  data: TMovie[]
}

type TGetMoviesListByKeywordsError = {
  type: 'error'
  error: any
}

type TGetMoviesListByKeywordsResponse =
  | TGetMoviesListByKeywordsSuccess
  | TGetMoviesListByKeywordsError

export const getMoviesListByKeywords = async (
  keyId: string,
): Promise<TGetMoviesListByKeywordsResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'
    const MoviesListByKeywordsRes = await fetch(
      `${baseUrl}/3/discover/movie?query&with_keywords=${keyId}`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )

    const MoviesListByKeywords = await MoviesListByKeywordsRes.json()

    const data = mapMoviesListByKeywords(MoviesListByKeywords)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
