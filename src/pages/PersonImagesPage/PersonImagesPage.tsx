import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { PersonImagesList } from '../../components/PersonImagesList'
import { SkeletonPersonImagesPage } from '../../components/Skeletons'
import { usePersonImagesPage } from './hooks'

export const PersonImagesPage = () => {
  const { personId } = useParams()

  const { loading, images } = usePersonImagesPage(personId)

  if (!personId) {
    return null
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {' '}
              {loading ? (
                <SkeletonPersonImagesPage />
              ) : (
                <PersonImagesList personImages={images} personId={personId} />
              )}
            </>
          }
        />
      </Routes>
    </div>
  )
}
