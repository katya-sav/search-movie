import { TPersonProfile, TFetchingState } from '../../../types'

export type TPersonProfileSlice = {
  personProfiles: { [personId: string]: TPersonProfile | null }
  error: any
  state: TFetchingState
}
