import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Main } from '../../components/Main'

export const MainPage = () => (
  <Routes>
    <Route path="/" element={<Main />} />
  </Routes>
)
