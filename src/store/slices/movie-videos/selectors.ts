import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useMovieVideos = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.movieVideos.videos, movieId),
  )
