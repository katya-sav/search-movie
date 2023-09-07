import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getClassifiedMovies } from '../../../api'
import { TMoviesSliceState } from '../types'
import { TClassifiedMovie } from '../../../types'

export const fetchClassifiedMovies = createThunk(
  'movies/searchMovies',
  async (pathType: TClassifiedMovie) => {
    const response = await getClassifiedMovies(pathType)

    if (response.type === 'success') {
      return { query: pathType, data: response.data }
    }

    throw response.error
  },
)

const initialState: TMoviesSliceState = {
  movies: {},
  error: null,
  state: 'init',
}

const classifiedMoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchClassifiedMovies.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchClassifiedMovies.fulfilled, (state, action) => {
      state.movies[action.payload.query] = action.payload.data
      state.state = 'success'
    })
    builder.addCase(fetchClassifiedMovies.rejected, (state, action) => {
      state.error = action.error
      state.state = 'failure'
    })
  },
})

export const classifiedMoviesReducer = classifiedMoviesSlice.reducer
