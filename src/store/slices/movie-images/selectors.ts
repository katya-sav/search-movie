import { useSelector } from 'react-redux'

import { getListSafe } from '../../../utils'
import { RootState } from '../../store'

export const useMovieBackdrops = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.movieImages.backdrops, movieId),
  )

export const useMoviePosters = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.movieImages.posters, movieId),
  )
