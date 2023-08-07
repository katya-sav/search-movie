import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useMovieKeywords = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.movieKeywords.keywords, movieId),
  )
