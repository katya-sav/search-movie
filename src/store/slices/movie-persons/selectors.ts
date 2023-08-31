import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getListSafe } from '../../../utils'

export const useMovieCast = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.moviePersons.movieCast, movieId),
  )

export const useMovieCrew = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.moviePersons.movieCrew, movieId),
  )

export const useMoviePersonsLoading = () =>
  useSelector((state: RootState) => state.moviePersons.state === 'loading')
