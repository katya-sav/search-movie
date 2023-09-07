import { useEffect } from 'react'

import { fetchMovieVideos } from '../../../store/slices/movie-videos'
import { fetchMovieCard } from '../../../store/slices/movie-card'
import {
  useAppDispatch,
  useMovieTitle,
  useMovieVideos,
  useMovieVideosLoading,
} from '../../../store'

export const useVideosPage = (movieId: string | undefined) => {
  const dispatch = useAppDispatch()

  const { title } = useMovieTitle(movieId)

  const videos = useMovieVideos(movieId)

  const loading = useMovieVideosLoading()

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieVideos(movieId))
      dispatch(fetchMovieCard(movieId))
    }
  }, [movieId, dispatch])

  return { loading, videos, title }
}
