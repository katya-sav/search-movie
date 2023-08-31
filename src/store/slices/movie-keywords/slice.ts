import { createSlice } from '@reduxjs/toolkit'

import { createThunk } from '../../create-thunk'
import { getMovieKeywords } from '../../../api'
import { TMovieKeywordsSlice } from './types'

export const fetchMovieKeywords = createThunk(
  'movieKeywords/getMovieKeywords',
  async (movieId: string) => {
    const response = await getMovieKeywords(movieId)

    if (response.type === 'success') {
      return { movieId, data: response.data }
    }

    throw response.error
  },
)

const initialState: TMovieKeywordsSlice = {
  keywords: {},
  error: null,
  state: 'init',
}

export const movieKeywordsSlice = createSlice({
  name: 'movieKeywords',
  initialState,
  reducers: {},
  extraReducers: biulder => {
    biulder.addCase(fetchMovieKeywords.pending, state => {
      state.state = 'loading'
    })
    biulder.addCase(fetchMovieKeywords.fulfilled, (state, action) => {
      state.state = 'success'
      state.keywords[action.payload.movieId] = action.payload.data
    })
    biulder.addCase(fetchMovieKeywords.rejected, (state, action) => {
      state.state = 'failure'
      state.error = action.error
    })
  },
})

export const movieKeywordsReducer = movieKeywordsSlice.reducer
