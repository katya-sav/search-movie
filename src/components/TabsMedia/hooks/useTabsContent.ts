import { useEffect } from 'react'

import { fetchMovieImages } from '../../../store/slices/movie-images'
import { fetchMovieVideos } from '../../../store/slices/movie-videos'
import {
  useAppDispatch,
  useMovieBackdrops,
  useMoviePosters,
  useMovieVideos,
} from '../../../store'

export const useTabsContent = (movieId: string | undefined) => {
  const dispatch = useAppDispatch()

  const backdrops = useMovieBackdrops(movieId)

  const posters = useMoviePosters(movieId)

  const videos = useMovieVideos(movieId)

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieImages(movieId))
      dispatch(fetchMovieVideos(movieId))
    }
  }, [movieId, dispatch])

  return { backdrops, posters, videos }
}
