import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { PersonProfile } from '../../components/PersonProfile'
import { usePersonPage } from './hooks'
import { SkeletonPersonPage } from '../../components/Skeletons'

export const PersonPage = () => {
  const { personId } = useParams()

  const { loading, person } = usePersonPage(personId)

  if (!personId) {
    return null
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <SkeletonPersonPage />
            ) : (
              <PersonProfile personProfile={person} />
            )
          }
        />
      </Routes>
    </div>
  )
}
