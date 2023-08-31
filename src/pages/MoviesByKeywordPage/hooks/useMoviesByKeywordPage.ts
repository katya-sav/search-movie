import { useEffect } from 'react'

import { fetchMoviesByKeyword } from '../../../store/slices/movies-by-keyword'
import {
  useAppDispatch,
  useMoviesByKeyword,
  useMoviesByKeywordLoading,
} from '../../../store'

export const useMoviesByKeywordPage = (keyId: string | undefined) => {
  const dispatch = useAppDispatch()

  const moviesByKeyword = useMoviesByKeyword(keyId)

  const loading = useMoviesByKeywordLoading()

  useEffect(() => {
    if (keyId) {
      dispatch(fetchMoviesByKeyword(keyId))
    }
  }, [keyId, dispatch])

  return { loading, moviesByKeyword }
}
