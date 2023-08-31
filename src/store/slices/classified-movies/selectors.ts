import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useClassifiedMovies = (pathType: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.classifiedMovies.movies, pathType),
  )

export const useClassifiedMoviesLoading = () =>
  useSelector((state: RootState) => state.classifiedMovies.state === 'loading')
