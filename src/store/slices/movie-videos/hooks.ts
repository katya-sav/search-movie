import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectMovieVideos } from './selectors'

export const useMovieVideos = (movieId: string | undefined) =>
  useSelector((state: RootState) => selectMovieVideos(state, movieId))

export const useMovieVideosLoading = () =>
  useSelector((state: RootState) => state.movieVideos.state === 'loading')
