import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useMoviesByKeyword = (keyId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.moviesByKeyword.movies, keyId),
  )

export const useMoviesByKeywordLoading = () =>
  useSelector((state: RootState) => state.moviesByKeyword.state === 'loading')
