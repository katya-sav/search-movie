import { getYearFromDate } from '../../utils'
import { TPersonProfMovie } from './types'

export const mapPersonMovies = (data: any): TPersonProfMovie => {
  const cast = data.cast.map((castProf: any) => ({
    id: castProf.id,
    title: castProf.title,
    year: getYearFromDate(castProf.release_date),
    prof: castProf.character,
  }))

  const crew = data.crew.map((crewProf: any) => ({
    id: crewProf.id,
    title: crewProf.title,
    year: getYearFromDate(crewProf.release_date),
    prof: crewProf.job,
  }))

  return { cast, crew }
}
