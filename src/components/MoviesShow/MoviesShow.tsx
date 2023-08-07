import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Poster } from './Poster'
import { Details } from './Details'
import { TMovie } from '../../types'
import styles from './MoviesShow.module.css'

type TMoviesShowProps = {
  movie: TMovie
}

export const MoviesShow = ({ movie }: TMoviesShowProps) => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate(`/card/${movie.id}`, { replace: false })
  }, [navigate, movie.id])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()

        handleNavigate()
      }
    },
    [handleNavigate],
  )

  return (
    <div
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      className={styles.container}
      role="button"
      tabIndex={0}
    >
      <Poster movie={movie} />
      <Details movie={movie} />
    </div>
  )
}
