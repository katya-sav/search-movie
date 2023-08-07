import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getPersonMovies } from '../../../api/person-movies'
import { TPersonMoviesSlice } from './types'

export const fetchPersonMovies = createThunk(
  'personMovies/getPersonMovies',
  async (personId: string) => {
    const response = await getPersonMovies(personId)

    if (response.type === 'success') {
      return { personId, data: response.data }
    }

    throw response.error
  },
)

const initialState: TPersonMoviesSlice = {
  personProfCast: {},
  personProfCrew: {},
  error: null,
  state: 'init',
}

export const PersonMoviesSlice = createSlice({
  name: 'personMovies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPersonMovies.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchPersonMovies.fulfilled, (state, action) => {
      state.state = 'success'
      state.personProfCast[action.payload.personId] = action.payload.data.cast
      state.personProfCrew[action.payload.personId] = action.payload.data.crew
    })
    builder.addCase(fetchPersonMovies.rejected, (state, action) => {
      state.state = 'failure'
      state.error = action.error
    })
  },
})

export const personMoviesReducer = PersonMoviesSlice.reducer
