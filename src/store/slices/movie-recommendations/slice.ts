import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getMovieRecommendations } from '../../../api'
import { TMovieRecommendationsSlice } from './types'

export const fetchMovieRecommendations = createThunk(
  'movieRecommendations/getMovieRecommendations',
  async (movieId: string, { getState }) => {
    const recommendations =
      getState().movieRecommendations.recommendations[movieId]

    if (recommendations) {
      return { movieId, data: recommendations }
    }

    const response = await getMovieRecommendations(movieId)

    if (response.type === 'success') {
      return { movieId, data: response.data }
    }

    throw response.error
  },
)

const initialState: TMovieRecommendationsSlice = {
  recommendations: {},
  error: null,
  state: 'init',
}

export const movieRecommendationsSlice = createSlice({
  name: 'movieRecommendations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovieRecommendations.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchMovieRecommendations.fulfilled, (state, action) => {
      state.state = 'success'
      state.recommendations[action.payload.movieId] = action.payload.data
    })
    builder.addCase(fetchMovieRecommendations.rejected, (state, action) => {
      state.state = 'failure'
      state.error = action.error
    })
  },
})

export const movieRecommendationsReducer = movieRecommendationsSlice.reducer
