import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectMoviesByKeyword } from './selectors'

export const useMoviesByKeyword = (keyId: string | undefined) =>
  useSelector((state: RootState) => selectMoviesByKeyword(state, keyId))

export const useMoviesByKeywordLoading = () =>
  useSelector((state: RootState) => state.moviesByKeyword.state === 'loading')
