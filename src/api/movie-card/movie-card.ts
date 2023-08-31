import { mapMovieCard } from './map-movie-card'
import { TMovieCard } from '../../types'

type TGetMovieCardSuccess = {
  type: 'success'
  data: TMovieCard
}

type TGetMovieCardError = {
  type: 'error'
  error: any
}

type TGetMovieCardResponse = TGetMovieCardSuccess | TGetMovieCardError

export const getMovieCard = async (
  movieId: string,
): Promise<TGetMovieCardResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'

    const movieCardRes = await fetch(
      `${baseUrl}/3/movie/${movieId}?language=en-US`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )
    const movieCard = await movieCardRes.json()

    const data = mapMovieCard(movieCard)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
