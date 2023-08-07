import { TKeyword, TFetchingState } from '../../../types'

export type TMovieKeywordsSlice = {
  keywords: { [movieId: string]: TKeyword[] }
  error: any
  state: TFetchingState
}
