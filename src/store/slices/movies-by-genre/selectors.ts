import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useMoviesByGenre = (genreId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.moviesByGenre.movies, genreId),
  )

export const useMoviesByGenreLoading = () =>
  useSelector((state: RootState) => state.moviesByGenre.state === 'loading')
