import { useSelector } from 'react-redux'

import { RootState } from '../../store'

export const useMovieCard = (movieId: string | undefined) =>
  useSelector((state: RootState) =>
    movieId ? state.movieCard.movieCards[movieId] : null,
  )

export const useMovieTitlePoster = (movieId: string | undefined) => {
  const movie = useMovieCard(movieId)

  return {
    title: movie?.title,
    poster: movie?.poster,
    year: movie?.year,
  }
}
