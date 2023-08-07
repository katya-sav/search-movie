import { TPersonMovie, TFetchingState } from '../../../types'

export type TPersonMoviesSlice = {
  personProfCast: { [personId: string]: TPersonMovie[] }
  personProfCrew: { [personId: string]: TPersonMovie[] }
  error: any
  state: TFetchingState
}
