import { TImage, TFetchingState } from '../../../types'

export type TPersonImagesSlice = {
  personImages: { [personId: string]: TImage[] }
  error: any
  state: TFetchingState
}
