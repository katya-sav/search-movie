import { TVideo, TFetchingState } from '../../../types'

export type TMovieVideosSlice = {
  videos: { [movieId: string]: TVideo[] }
  error: any
  state: TFetchingState
}
