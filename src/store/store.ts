import { configureStore } from '@reduxjs/toolkit'

import { moviesReducer } from './slices/movies'
import { movieCardReducer } from './slices/movie-card'
import { moviePersonsReducer } from './slices/movie-persons'
import { movieRecommendationsReducer } from './slices/movie-recommendations'
import { movieImagesReducer } from './slices/movie-images'
import { movieVideosReducer } from './slices/movie-videos'
import { movieKeywordsReducer } from './slices/movie-keywords'
import { moviesByKeywordReducer } from './slices/movies-by-keyword'
import { personProfileReducer } from './slices/person-profile'
import { personMoviesReducer } from './slices/person-movies'
import { personImagesReducer } from './slices/person-images'
import { modalSliceReducer } from './slices/modal'
import { movieCompanyReducer } from './slices/movie-company'
import { moviesByGenreReducer } from './slices/movies-by-genre'
import { classifiedMoviesReducer } from './slices/classified-movies'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    classifiedMovies: classifiedMoviesReducer,
    movieCard: movieCardReducer,
    movieCompany: movieCompanyReducer,
    moviePersons: moviePersonsReducer,
    movieRecommendations: movieRecommendationsReducer,
    movieImages: movieImagesReducer,
    movieVideos: movieVideosReducer,
    movieKeywords: movieKeywordsReducer,
    moviesByKeyword: moviesByKeywordReducer,
    moviesByGenre: moviesByGenreReducer,
    personProfile: personProfileReducer,
    personMovies: personMoviesReducer,
    personImages: personImagesReducer,
    modal: modalSliceReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
