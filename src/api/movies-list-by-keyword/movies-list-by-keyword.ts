import { mapMoviesListByKeyword } from './map-movies-list-by-keyword'
import { TMovie } from '../../types'

type TGetMoviesListByKeywordSuccess = {
  type: 'success'
  data: TMovie[]
}

type TGetMoviesListByKeywordError = {
  type: 'error'
  error: any
}

type TGetMoviesListByKeywordResponse =
  | TGetMoviesListByKeywordSuccess
  | TGetMoviesListByKeywordError

export const getMoviesListByKeyword = async (
  keyId: string,
): Promise<TGetMoviesListByKeywordResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'
    const moviesListByKeywordRes = await fetch(
      `${baseUrl}/3/discover/movie?query&with_keyword=${keyId}`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )

    const moviesListByKeyword = await moviesListByKeywordRes.json()

    const data = mapMoviesListByKeyword(moviesListByKeyword)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
