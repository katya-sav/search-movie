import { TImage, TFetchingState } from '../../../types'

export type TMovieImagesSlice = {
  backdrops: { [movieId: string]: TImage[] }
  posters: { [movieId: string]: TImage[] }
  error: any
  state: TFetchingState
}
