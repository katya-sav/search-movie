import { useEffect } from 'react'

import { fetchMovieImages } from '../../../store/slices/movie-images'
import { fetchMovieCard } from '../../../store/slices/movie-card'
import {
  useMovieImagesLoading,
  useAppDispatch,
  useMoviePosters,
  useMovieTitle,
} from '../../../store'

export const usePostersPage = (movieId: string | undefined) => {
  const dispatch = useAppDispatch()

  const { title } = useMovieTitle(movieId)
  const posters = useMoviePosters(movieId)
  const loading = useMovieImagesLoading()

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieImages(movieId))
      dispatch(fetchMovieCard(movieId))
    }
  }, [movieId, dispatch])

  return { posters, loading, title }
}
