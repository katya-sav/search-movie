import React, { useMemo } from 'react'

import { MoviesShow } from '../MoviesShow'
import { TMovie } from '../../types'

import styles from './MoviesList.module.css'

type TMoviesListProps = {
  movies: TMovie[]
}

export const MoviesList = ({ movies }: TMoviesListProps) => {
  const renderedMovies = useMemo(
    () => movies.map(movie => <MoviesShow key={movie.id} movie={movie} />),
    [movies],
  )

  return <div className={styles.list}>{renderedMovies}</div>
}
