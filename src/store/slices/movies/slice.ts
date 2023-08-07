import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getMovies } from '../../../api'
import { TMoviesSliceState } from '../types'

export const fetchMovies = createThunk(
  'movies/searchMovies',
  async (searchQuery: string) => {
    const response = await getMovies(searchQuery)

    if (response.type === 'success') {
      return { query: searchQuery, data: response.data }
    }

    throw response.error
  },
)

const initialState: TMoviesSliceState = {
  movies: {},
  error: null,
  state: 'init',
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // changeSearchTerm(state, action) {
    //   state.searchTerm = action.payload;
    // },
  },
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies[action.payload.query] = action.payload.data
      state.state = 'success'
    })
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.error = action.error
      state.state = 'failure'
    })
  },
})

// export const { changeSearchTerm } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer
