import { mapMovieImages } from './map-movie-images'
import { TMovieImages } from './types'

type TGetMovieImagesSuccess = {
  type: 'success'
  data: TMovieImages
}

type TGetMovieImagesError = {
  type: 'error'
  error: any
}

type TGetMovieImagesResponse = TGetMovieImagesSuccess | TGetMovieImagesError

export const getMovieImages = async (
  movieId: string,
): Promise<TGetMovieImagesResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'

    const movieImagesRes = await fetch(`${baseUrl}/3/movie/${movieId}/images`, {
      method: 'GET',
      headers: { accept: 'application/json' },
    })

    const movieImages = await movieImagesRes.json()

    const data = mapMovieImages(movieImages)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
