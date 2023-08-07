import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useMovies = (searchQuery: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.movies.movies, searchQuery),
  )
