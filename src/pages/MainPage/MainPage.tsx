import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Main } from '../../components/Main'

export const MainPage = () => (
  <div>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </div>
)
