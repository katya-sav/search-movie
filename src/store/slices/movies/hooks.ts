import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectMovies } from './selectors'

export const useMovies = (searchQuery?: string) =>
  useSelector((state: RootState) => selectMovies(state, searchQuery))

export const useMoviesLoading = () =>
  useSelector((state: RootState) => state.movies.state === 'loading')
