import { TPerson, TFetchingState } from '../../../types'

export type TMoviePersonsSlice = {
  movieCast: { [movieId: string]: TPerson[] }
  movieCrew: { [movieId: string]: TPerson[] }
  error: any
  state: TFetchingState
}
