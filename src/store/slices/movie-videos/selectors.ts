import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useMovieVideos = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.movieVideos.videos, movieId),
  )

export const useMovieVideosLoading = () =>
  useSelector((state: RootState) => state.movieVideos.state === 'loading')
