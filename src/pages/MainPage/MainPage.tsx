import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Title } from '../../components/Title'

export const MainPage = () => (
  <div>
    <Routes>
      <Route path="/" element={<Title />} />
    </Routes>
  </div>
)
