import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectClassifiedMovies } from './selectors'

export const useClassifiedMovies = (pathType: string | undefined) =>
  useSelector((state: RootState) => selectClassifiedMovies(state, pathType))

export const useClassifiedMoviesLoading = () =>
  useSelector((state: RootState) => state.classifiedMovies.state === 'loading')
