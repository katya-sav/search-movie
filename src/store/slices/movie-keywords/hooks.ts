import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectMovieKeyword } from './selectors'

export const useMovieKeyword = (movieId: string | undefined) =>
  useSelector((state: RootState) => selectMovieKeyword(state, movieId))

export const useMovieKeywordsLoading = () =>
  useSelector((state: RootState) => state.movieKeywords.state === 'loading')
