import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getMoviesListByGenre } from '../../../api'
import { TMoviesSliceState } from '../types'

export const fetchMoviesByGenre = createThunk(
  'moviesByGenre/getMoviesByGenre',
  async (genreId: string) => {
    const response = await getMoviesListByGenre(genreId)

    if (response.type === 'success') {
      return { genreId, data: response.data }
    }

    throw response.error
  },
)

const initialState: TMoviesSliceState = {
  movies: {},
  error: null,
  state: 'init',
}

const moviesByGenreSlice = createSlice({
  name: 'moviesByGenre',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMoviesByGenre.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
      state.movies[action.payload.genreId] = action.payload.data
      state.state = 'success'
    })
    builder.addCase(fetchMoviesByGenre.rejected, (state, action) => {
      state.error = action.error
      state.state = 'failure'
    })
  },
})

export const moviesByGenreReducer = moviesByGenreSlice.reducer
