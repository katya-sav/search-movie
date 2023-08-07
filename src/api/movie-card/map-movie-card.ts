import { getYearFromDate } from '../../utils'
import { TMovieCard } from '../../types'

export const mapMovieCard = (data: any): TMovieCard => ({
  id: data.id,
  title: data.title,
  originalTitle: data.original_title,
  plot: data.overview,
  poster: data.poster_path,
  year: getYearFromDate(data.release_date),
  languages: data.spoken_languages,
  genres: data.genres,
  countries: data.production_countries,
  companies: data.production_companies,
  budget: data.budget,
  runtime: data.runtime,
  revenue: data.revenue,
  rating: data.vote_average,
  // producersList: prepareOthers("Produced by", data.fullCast.others),
  // operatorsList: prepareOthers("Cinematography by", data.fullCast.others),
  // montageList: prepareOthers("Editing by", data.fullCast.others),
  // musicList: prepareOthers("Music by", data.fullCast.others),
})

// function prepareOthers(jobType: string, list: any[]) {
//   return list.find(({ job }) => job === jobType)?.items;
// }
