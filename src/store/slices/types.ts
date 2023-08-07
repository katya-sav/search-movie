import { TMovie, TFetchingState } from '../../types'

export type TMoviesSliceState = {
  movies: { [query: string]: TMovie[] }
  error: any
  state: TFetchingState
}
