import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useMovieKeyword = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.movieKeywords.keywords, movieId),
  )

export const useMovieKeywordsLoading = () =>
  useSelector((state: RootState) => state.movieKeywords.state === 'loading')
