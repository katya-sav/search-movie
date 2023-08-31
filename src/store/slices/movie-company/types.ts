import { TCompany, TFetchingState } from '../../../types'

export type TMovieCompanySlice = {
  companies: { [id: string]: TCompany | null }
  error: any
  state: TFetchingState
}
