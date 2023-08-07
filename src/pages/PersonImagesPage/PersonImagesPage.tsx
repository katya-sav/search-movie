import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { fetchPersonImages } from '../../store/slices/person-images'

import { PersonImagesList } from '../../components/PersonImagesList'
import { useAppDispatch, usePersonImages } from '../../store'

export const PersonImagesPage = () => {
  const { personId } = useParams()
  const dispatch = useAppDispatch()

  const images = usePersonImages(personId)

  useEffect(() => {
    if (personId) {
      dispatch(fetchPersonImages(personId))
    }
  }, [personId, dispatch])

  if (!personId) {
    return null
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PersonImagesList personImages={images} personId={personId} />
          }
        />
      </Routes>
    </div>
  )
}
