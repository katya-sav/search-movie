import { mapMovieKeywords } from './map-movie-keywords'
import { TKeyword } from '../../types'

type TGetMovieKeywordsSuccess = {
  type: 'success'
  data: TKeyword[]
}

type TGetMovieKeywordsError = {
  type: 'error'
  error: any
}

type TGetMovieKeywordsResponse =
  | TGetMovieKeywordsSuccess
  | TGetMovieKeywordsError

export const getMovieKeywords = async (
  movieId: string,
): Promise<TGetMovieKeywordsResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'
    const movieKeywordsRes = await fetch(
      `${baseUrl}/3/movie/${movieId}/keywords`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )

    const movieKeywords = await movieKeywordsRes.json()

    const data = mapMovieKeywords(movieKeywords)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
