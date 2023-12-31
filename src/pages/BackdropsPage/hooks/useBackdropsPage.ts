import { useEffect } from 'react'

import { fetchMovieImages } from '../../../store/slices/movie-images'
import { fetchMovieCard } from '../../../store/slices/movie-card'
import {
  useMovieImagesLoading,
  useAppDispatch,
  useMovieBackdrops,
  useMovieTitle,
} from '../../../store'

export const useBackdropsPage = (movieId: string | undefined) => {
  const dispatch = useAppDispatch()

  const { title } = useMovieTitle(movieId)
  const backdrops = useMovieBackdrops(movieId)
  const loading = useMovieImagesLoading()

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieImages(movieId))
      dispatch(fetchMovieCard(movieId))
    }
  }, [movieId, dispatch])

  return { backdrops, loading, title }
}
