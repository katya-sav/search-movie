import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchPersonMovies } from '../../store/slices/person-movies'
import { PersonalInformation } from './PersonalInformation'
import { PersonMoviesList } from './PersonMoviesList'
import {
  useAppDispatch,
  usePersonProfCast,
  usePersonProfCrew,
} from '../../store'
import { TPersonProfile } from '../../types'
import styles from './PersonProfile.module.css'
import { PersonBiography } from './PersonBiography'
import { PersonPhoto } from './PersonPhoto'

type TPersonProfileProps = {
  personProfile: TPersonProfile | null
}

export const PersonProfile = ({ personProfile }: TPersonProfileProps) => {
  const { personId } = useParams()
  const dispatch = useAppDispatch()

  const personProfCast = usePersonProfCast(personId)

  const personProfCrew = usePersonProfCrew(personId)

  useEffect(() => {
    if (personId) {
      dispatch(fetchPersonMovies(personId))
    }
  }, [personId, dispatch])

  if (!personProfile) {
    return null
  }

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}> {personProfile.name}</h2>
        <PersonPhoto personProfile={personProfile} />
        <PersonalInformation personProfile={personProfile} />
      </div>
      <div className={styles.section}>
        <PersonBiography personProfile={personProfile} />
        <PersonMoviesList title="Action" personMovies={personProfCast} />
        <PersonMoviesList title="Production" personMovies={personProfCrew} />
      </div>
    </div>
  )
}