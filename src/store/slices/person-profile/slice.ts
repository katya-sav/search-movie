import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getPersonProfile } from '../../../api'
import { TPersonProfileSlice } from './types'

export const fetchPersonProfile = createThunk(
  'personProfile/getPersonProfile',
  async (personId: string) => {
    const response = await getPersonProfile(personId)

    if (response.type === 'success') {
      return response.data
    }

    throw response.error
  },
)

const initialState: TPersonProfileSlice = {
  personProfiles: {},
  error: null,
  state: 'init',
}

const personProfileSlice = createSlice({
  name: 'personProfile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPersonProfile.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchPersonProfile.fulfilled, (state, action) => {
      state.state = 'success'
      state.personProfiles[action.payload.id] = action.payload
    })
    builder.addCase(fetchPersonProfile.rejected, (state, action) => {
      state.state = 'failure'
      state.error = action.error
    })
  },
})

export const personProfileReducer = personProfileSlice.reducer
