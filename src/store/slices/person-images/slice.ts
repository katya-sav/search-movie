import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getPersonImages } from '../../../api'
import { TPersonImagesSlice } from './types'

export const fetchPersonImages = createThunk(
  'personImages/getPersonImages',
  async (personId: string, { getState }) => {
    const personImages = getState().personImages.personImages[personId]

    if (personImages) {
      return { personId, data: personImages }
    }

    const response = await getPersonImages(personId)

    if (response.type === 'success') {
      return { personId, data: response.data }
    }

    throw response.error
  },
)

const initialState: TPersonImagesSlice = {
  personImages: {},
  error: null,
  state: 'init',
}

const personImagesSlice = createSlice({
  name: 'personImages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPersonImages.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchPersonImages.fulfilled, (state, action) => {
      state.state = 'success'
      state.personImages[action.payload.personId] = action.payload.data
    })
    builder.addCase(fetchPersonImages.rejected, (state, action) => {
      state.state = 'failure'
      state.error = action.error
    })
  },
})

export const personImagesReducer = personImagesSlice.reducer
