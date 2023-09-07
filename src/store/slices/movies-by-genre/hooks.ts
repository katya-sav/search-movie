import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectMoviesByGenre } from './selectors'

export const useMoviesByGenre = (genreId: string | undefined) =>
  useSelector((state: RootState) => selectMoviesByGenre(state, genreId))

export const useMoviesByGenreLoading = () =>
  useSelector((state: RootState) => state.moviesByGenre.state === 'loading')
