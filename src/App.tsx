import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { MainPage } from './pages/MainPage'
import { SearchPage } from './pages/SearchPage'
import { CardPage } from './pages/CardPage'
import { MoviesByKeywordsPage } from './pages/MoviesByKeywordsPage'
import { CastAndCrewPage } from './pages/CastAndCrewPage'
import { PostersPage } from './pages/PostersPage'
import { BackdropsPage } from './pages/BackdropsPage'
import { VideosPage } from './pages/VideosPage'
import { PersonPage } from './pages/PersonPage'
import { PersonImagesPage } from './pages/PersonImagesPage'
import { AppModals } from './AppModals'

import './GlobalStyles.css'

export const App = () => (
  <div className="GlobalStyles">
    <Header />
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/search/:searchQuery/*" element={<SearchPage />} />
      <Route path="card/:movieId/*" element={<CardPage />} />
      <Route path="keyword/:keyId/*" element={<MoviesByKeywordsPage />} />
      <Route path="persons/:movieId/*" element={<CastAndCrewPage />} />
      <Route path="posters/:movieId/*" element={<PostersPage />} />
      <Route path="backdrops/:movieId/*" element={<BackdropsPage />} />
      <Route path="videos/:movieId/*" element={<VideosPage />} />
      <Route path="person/:personId/*" element={<PersonPage />} />
      <Route path="personImages/:personId/*" element={<PersonImagesPage />} />
    </Routes>
    <AppModals />
  </div>
)
