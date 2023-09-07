import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { MainPage } from './pages/MainPage'
import { SearchPage } from './pages/SearchPage'
import { ClassifiedMoviesPage } from './pages/ClassifiedMoviesPage'
import { CardPage } from './pages/CardPage'
import { MoviesByKeywordPage } from './pages/MoviesByKeywordPage'
import { MoviesByGenrePage } from './pages/MoviesByGenrePage'
import { CastAndCrewPage } from './pages/CastAndCrewPage'
import { PostersPage } from './pages/PostersPage'
import { BackdropsPage } from './pages/BackdropsPage'
import { VideosPage } from './pages/VideosPage'
import { PersonPage } from './pages/PersonPage'
import { PersonImagesPage } from './pages/PersonImagesPage'
import { CompanyPage } from './pages/CompanyPage'
import { PageNotFound } from './pages/PageNotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AppModals } from './AppModals'

import './GlobalStyles.css'

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search/:searchQuery/*" element={<SearchPage />} />
      <Route path="/movies/:pathType/*" element={<ClassifiedMoviesPage />} />
      <Route path="card/:movieId/*" element={<CardPage />} />
      <Route path="keyword/:keyId/*" element={<MoviesByKeywordPage />} />
      <Route path="genre/:genreId/*" element={<MoviesByGenrePage />} />
      <Route path="persons/:movieId/*" element={<CastAndCrewPage />} />
      <Route path="posters/:movieId/*" element={<PostersPage />} />
      <Route path="backdrops/:movieId/*" element={<BackdropsPage />} />
      <Route path="videos/:movieId/*" element={<VideosPage />} />
      <Route path="person/:personId/*" element={<PersonPage />} />
      <Route path="personImages/:personId/*" element={<PersonImagesPage />} />
      <Route path="company/:companyId/*" element={<CompanyPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
    <AppModals />
  </>
)
