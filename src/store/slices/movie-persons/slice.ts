import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getMoviePersons } from '../../../api/movie-persons'
import { TMoviePersonsSlice } from './types'

export const fetchMoviePersons = createThunk(
  'moviePersons/getMoviePersons',
  async (movieId: string) => {
    const response = await getMoviePersons(movieId)

    if (response.type === 'success') {
      return { movieId, data: response.data }
    }

    throw response.error
  },
)

const initialState: TMoviePersonsSlice = {
  movieCast: {},
  movieCrew: {},
  error: null,
  state: 'init',
}

export const moviePersonsSlice = createSlice({
  name: 'moviePersons',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMoviePersons.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchMoviePersons.fulfilled, (state, action) => {
      state.state = 'success'
      state.movieCast[action.payload.movieId] = action.payload.data.cast
      state.movieCrew[action.payload.movieId] = action.payload.data.crew
    })
    builder.addCase(fetchMoviePersons.rejected, (state, action) => {
      state.state = 'failure'
      state.error = action.error
    })
  },
})

export const moviePersonsReducer = moviePersonsSlice.reducer
