import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectMovieCast, selectMovieCrew } from './selectors'

export const useMovieCast = (movieId: string | undefined) =>
  useSelector((state: RootState) => selectMovieCast(state, movieId))

export const useMovieCrew = (movieId: string | undefined) =>
  useSelector((state: RootState) => selectMovieCrew(state, movieId))

export const useMoviePersonsLoading = () =>
  useSelector((state: RootState) => state.moviePersons.state === 'loading')
