import { useEffect } from 'react'

import { fetchClassifiedMovies } from '../../../store/slices/classified-movies'
import {
  useClassifiedMoviesLoading,
  useAppDispatch,
  useClassifiedMovies,
} from '../../../store'
import { TClassifiedMovie } from '../../../types'

export const useClassifiedMoviesPage = (pathType?: TClassifiedMovie) => {
  const dispatch = useAppDispatch()

  const classifiedMovies = useClassifiedMovies(pathType)
  const loading = useClassifiedMoviesLoading()

  useEffect(() => {
    if (pathType) {
      dispatch(fetchClassifiedMovies(pathType))
    }
  }, [pathType, dispatch])

  return { loading, classifiedMovies }
}
