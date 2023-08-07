import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getMovieImages } from '../../../api/movie-images'
import { TMovieImagesSlice } from './types'

export const fetchMovieImages = createThunk(
  'movieImages/getMovieImages',
  async (movieId: string) => {
    const response = await getMovieImages(movieId)

    if (response.type === 'success') {
      return { movieId, data: response.data }
    }

    throw response.error
  },
)

const initialState: TMovieImagesSlice = {
  backdrops: {},
  posters: {},
  error: null,
  state: 'init',
}

export const movieImagesSlice = createSlice({
  name: 'movieImages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovieImages.pending, state => {
      state.state = 'loading'
    })
    builder.addCase(fetchMovieImages.fulfilled, (state, action) => {
      state.state = 'success'
      state.backdrops[action.payload.movieId] = action.payload.data.backdrops
      state.posters[action.payload.movieId] = action.payload.data.posters
    })
    builder.addCase(fetchMovieImages.rejected, (state, action) => {
      state.state = 'failure'
      state.error = action.error
    })
  },
})

export const movieImagesReducer = movieImagesSlice.reducer
