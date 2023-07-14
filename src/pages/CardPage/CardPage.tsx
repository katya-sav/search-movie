import React, { useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { fetchMovieCard } from '../../store/slices/movie-card-slice'
import { fetchMoviePersons } from '../../store/slices/movie-persons-slice'
import { MovieCard } from '../../components/MovieCard'
import { PersonsList } from '../../components/PersonsList'
import { useAppDispatch, RootState } from '../../store'

export const CardPage = () => {
  const { movieId } = useParams()
  const dispatch = useAppDispatch()

  const movieCard = useSelector((state: RootState) =>
    movieId ? state.movieCard.movieCards[movieId] : null,
  )

  const movieCast = useSelector(
    (state: RootState) => state.moviePersons.movieCast,
  )

  const movieCrew = useSelector(
    (state: RootState) => state.moviePersons.movieCrew,
  )

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieCard(movieId))
      dispatch(fetchMoviePersons(movieId))
    }
  }, [movieId, dispatch])

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MovieCard movieCard={movieCard} />
              <PersonsList title="Cast" items={movieCast} />
              <PersonsList title="Crew" items={movieCrew} />
            </>
          }
        />
      </Routes>
    </div>
  )
}
