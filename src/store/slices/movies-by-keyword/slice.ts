import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getMoviesListByKeyword } from '../../../api'
import { TMoviesSliceState } from '../types'

export const fetchMoviesByKeyword = createThunk(
  'moviesByKeyword/getMoviesByKeyword',
  async (keyId: string) => {
    const response = await getMoviesListByKeyword(keyId)

    if (response.type === 'success') {
      return { keyId, data: response.data }
    }

    throw response.error
  },
)

const initialState: TMoviesSliceState = {
  movies: {},
  error: null,
  state: 'init',
}

const moviesByKeywordSlice = createSlice({
  name: 'moviesByKeyword',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMoviesByKeyword.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchMoviesByKeyword.fulfilled, (state, action) => {
      state.movies[action.payload.keyId] = action.payload.data
      state.state = 'success'
    })
    builder.addCase(fetchMoviesByKeyword.rejected, (state, action) => {
      state.error = action.error
      state.state = 'failure'
    })
  },
})

export const moviesByKeywordReducer = moviesByKeywordSlice.reducer
