import { getYearFromDate } from '../../utils'
import { TMovie } from '../../types'

export const mapClassifiedMovies = (data: any): TMovie[] =>
  data.results.map((movie: any) => ({
    id: movie.id,
    title: movie.original_title,
    poster: movie.poster_path,
    date: getYearFromDate(movie.release_date),
    overview: movie.overview,
  }))
