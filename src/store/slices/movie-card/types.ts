import { TMovieCard, TFetchingState } from '../../../types'

export type TMovieCardSlice = {
  movieCards: { [id: string]: TMovieCard | null }
  error: any
  state: TFetchingState
}
