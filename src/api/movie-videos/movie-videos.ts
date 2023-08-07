import { mapMovieVideos } from './map-movie-videos'
import { TVideo } from '../../types'

type TGetMovieVideosSuccess = {
  type: 'success'
  data: TVideo[]
}

type TGetMovieVideosError = {
  type: 'error'
  error: any
}

type TGetMovieVideosResponse = TGetMovieVideosSuccess | TGetMovieVideosError

export const getMovieVideos = async (
  movieId: string,
): Promise<TGetMovieVideosResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'

    const movieVideosRes = await fetch(
      `${baseUrl}/3/movie/${movieId}/videos?language=en-US`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    )

    const movieVideos = await movieVideosRes.json()

    const data = mapMovieVideos(movieVideos)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
