import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../create-thunk'
import { getMovieCard } from '../../api/movie-card'
import { TMovieCardSlice } from './types'

export const fetchMovieCard = createThunk(
  'movieCard/getMovieCard',
  async (movieId: string) => {
    const response = await getMovieCard(movieId)

    if (response.type === 'success') {
      return response.data
    }

    throw response.error
  },
)

const initialState: TMovieCardSlice = {
  movieCards: {},
  error: null,
  state: 'init',
}

const movieCardSlice = createSlice({
  name: 'movieCard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovieCard.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchMovieCard.fulfilled, (state, action) => {
      state.state = 'success'
      state.movieCards[action.payload.id] = action.payload
    })
    builder.addCase(fetchMovieCard.rejected, (state, action) => {
      state.state = 'failure'
      state.error = action.error
    })
  },
})

export const movieCardReducer = movieCardSlice.reducer
