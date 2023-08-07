import { createSlice } from '@reduxjs/toolkit'

import { TModalSlice, TOpenModalAction } from './types'

const initialState: TModalSlice = {
  id: null,
  meta: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action: TOpenModalAction) => {
      state.id = action.payload.id
      state.meta = action.payload.meta ?? null
    },

    close: state => {
      state.id = null
    },
  },
})

export const { open, close } = modalSlice.actions
export const modalSliceReducer = modalSlice.reducer
