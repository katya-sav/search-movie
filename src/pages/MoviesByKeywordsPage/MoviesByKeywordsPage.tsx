import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { fetchMoviesByKeyword } from '../../store/slices/movies-by-keyword'
import { MoviesList } from '../../components/MoviesList'
import { ScrollToTop } from '../../utils/components'
import { useAppDispatch, useMoviesByKeyword } from '../../store'

export const MoviesByKeywordsPage = () => {
  const { keyId } = useParams()
  const dispatch = useAppDispatch()

  const moviesByKeyword = useMoviesByKeyword(keyId)

  useEffect(() => {
    if (keyId) {
      dispatch(fetchMoviesByKeyword(keyId))
    }
  }, [keyId, dispatch])

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              <MoviesList movies={moviesByKeyword} />
            </>
          }
        />
      </Routes>
    </div>
  )
}
