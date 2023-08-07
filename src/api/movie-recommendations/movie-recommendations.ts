import { TRecommendation } from '../../types'
import { mapMovieRecommendations } from './map-movie-recommendations'

type TGetMovieRecommendationsSuccess = {
  type: 'success'
  data: TRecommendation[]
}

type TGetMovieReccommendationsError = {
  type: 'error'
  error: any
}

type TGetMovieRecommendationsResponse =
  | TGetMovieRecommendationsSuccess
  | TGetMovieReccommendationsError

export const getMovieRecommendations = async (
  movieId: string,
): Promise<TGetMovieRecommendationsResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'
    const movieRecommendationsRes = await fetch(
      `${baseUrl}/3/movie/${movieId}/recommendations?language=en-US&page=1`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )

    const movieRecommendatins = await movieRecommendationsRes.json()

    const data = mapMovieRecommendations(movieRecommendatins)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
