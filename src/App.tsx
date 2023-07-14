import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { MainPage } from './pages/MainPage'
import { SearchPage } from './pages/SearchPage'
import { CardPage } from './pages/CardPage'
import './GlobalStyles.css'

export const App = () => (
  <div className="GlobalStyles">
    <Header />
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/search/:searchQuery/*" element={<SearchPage />} />
      <Route path="card/:movieId/*" element={<CardPage />} />
    </Routes>
  </div>
)
