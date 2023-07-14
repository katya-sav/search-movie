import { configureStore } from '@reduxjs/toolkit'

import { moviesReducer } from './slices/movies-slice'
import { movieCardReducer } from './slices/movie-card-slice'
import { moviePersonsReducer } from './slices/movie-persons-slice'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieCard: movieCardReducer,
    moviePersons: moviePersonsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
