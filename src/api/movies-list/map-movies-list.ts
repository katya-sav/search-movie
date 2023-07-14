import { getYearFromDate } from '../../utils/get-year-from-date'
import { TMovie } from '../../types'

export const mapMoviesList = (data: any): TMovie[] =>
  data.results.map((movie: any) => ({
    id: movie.id,
    title: movie.original_title,
    poster: movie.poster_path,
    date: getYearFromDate(movie.release_date),
    overview: movie.overview,
  }))
