import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { fetchPersonProfile } from '../../store/slices/person-profile'

import { PersonProfile } from '../../components/PersonProfile'
import { useAppDispatch, usePersonProfile } from '../../store'

export const PersonPage = () => {
  const { personId } = useParams()
  const dispatch = useAppDispatch()

  const person = usePersonProfile(personId)

  useEffect(() => {
    if (personId) {
      dispatch(fetchPersonProfile(personId))
    }
  }, [personId, dispatch])

  if (!personId) {
    return null
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonProfile personProfile={person} />} />
      </Routes>
    </div>
  )
}
