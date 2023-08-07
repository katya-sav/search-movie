import { TRecommendation, TFetchingState } from '../../../types'

export type TMovieRecommendationsSlice = {
  recommendations: { [movieId: string]: TRecommendation[] }
  error: any
  state: TFetchingState
}
