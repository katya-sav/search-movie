import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getMovieVideos } from '../../../api/movie-videos'
import { TMovieVideosSlice } from './types'

export const fetchMovieVideos = createThunk(
  'movieVideos/getMovieVideos',
  async (movieId: string) => {
    const response = await getMovieVideos(movieId)

    if (response.type === 'success') {
      return { movieId, data: response.data }
    }

    throw response.error
  },
)

const initialState: TMovieVideosSlice = {
  videos: {},
  error: null,
  state: 'init',
}

export const movieVideosSlice = createSlice({
  name: 'movieVideos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovieVideos.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchMovieVideos.fulfilled, (state, action) => {
      state.state = 'success'
      state.videos[action.payload.movieId] = action.payload.data
    })
    builder.addCase(fetchMovieVideos.rejected, (state, action) => {
      state.state = 'failure'
      state.error = action.error
    })
  },
})

export const movieVideosReducer = movieVideosSlice.reducer
