import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectclassifiedMovies } from './selectors'

export const useClassifiedMovies = (pathType: string | undefined) =>
  useSelector((state: RootState) => selectclassifiedMovies(state, pathType))

export const useClassifiedMoviesLoading = () =>
  useSelector((state: RootState) => state.classifiedMovies.state === 'loading')
