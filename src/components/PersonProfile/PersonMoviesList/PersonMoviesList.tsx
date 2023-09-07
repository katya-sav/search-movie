import React, { useMemo } from 'react'

import { PersonMovie } from '../PersonMovie/PersonMovie'
import { TPersonMovie } from '../../../types'
import styles from './PersonMoviesList.module.css'

type TPersonMoviesListProps = {
  title: string
  personMovies: TPersonMovie[]
}

export const PersonMoviesList = ({
  title,
  personMovies,
}: TPersonMoviesListProps) => {
  const renderPersonMovie = useMemo(
    () =>
      [...personMovies]
        .sort((a, b) => (a.year < b.year ? 1 : -1))
        .map(personMovie => (
          <PersonMovie key={personMovie.id} personMovie={personMovie} />
        )),
    [personMovies],
  )

  if (!personMovies.length) {
    return null
  }

  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.list}>{renderPersonMovie}</div>
    </div>
  )
}
