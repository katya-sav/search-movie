import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getMovieCompany } from '../../../api'
import { TMovieCompanySlice } from './types'

export const fetchMovieCompany = createThunk(
  'movieCompany/getMovieCompany',
  async (companyId: string, { getState }) => {
    const movieCompany = getState().movieCompany.companies[companyId]

    if (movieCompany) {
      return movieCompany
    }

    const response = await getMovieCompany(companyId)

    if (response.type === 'success') {
      return response.data
    }

    throw response.error
  },
)

const initialState: TMovieCompanySlice = {
  companies: {},

  error: null,
  state: 'init',
}

const movieCompanySlice = createSlice({
  name: 'movieCompany',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovieCompany.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchMovieCompany.fulfilled, (state, action) => {
      state.state = 'success'
      state.companies[action.payload.id] = action.payload
    })
    builder.addCase(fetchMovieCompany.rejected, (state, action) => {
      state.state = 'failure'
      state.error = action.error
    })
  },
})

export const movieCompanyReducer = movieCompanySlice.reducer
