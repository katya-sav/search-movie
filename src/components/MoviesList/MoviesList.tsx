import React from 'react'

import { MoviesShow } from '../MoviesShow'
import { TMovie } from '../../types'

import styles from './MoviesList.module.css'
import { SearchNotFound } from './SearchNotFound'

type TMoviesListProps = {
  movies: TMovie[]
  searchQuery?: string
}

export const MoviesList = ({ movies, searchQuery }: TMoviesListProps) => {
  if (movies.length === 0) {
    return <SearchNotFound searchQuery={searchQuery} />
  }

  return (
    <div className={styles.list}>
      {movies.map(movie => (
        <MoviesShow key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
