import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectMovieBackdrops, selectMoviePosters } from './selectors'

export const useMovieBackdrops = (movieId: string | undefined) =>
  useSelector((state: RootState) => selectMovieBackdrops(state, movieId))

export const useMoviePosters = (movieId: string | undefined) =>
  useSelector((state: RootState) => selectMoviePosters(state, movieId))

export const useMovieImagesLoading = () =>
  useSelector((state: RootState) => state.movieImages.state === 'loading')
