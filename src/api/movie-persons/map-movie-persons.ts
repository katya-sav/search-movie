import { TMoviePersons } from './types'

export const mapMoviePersons = (data: any): TMoviePersons => {
  const cast = data.cast.map((castPerson: any) => ({
    id: castPerson.id,
    name: castPerson.original_name,
    description: castPerson.character,
    image: castPerson.profile_path,
  }))

  const crew = data.crew.map((crewPerson: any) => ({
    id: crewPerson.id,
    name: crewPerson.original_name,
    description: crewPerson.job,
    image: crewPerson.profile_path,
  }))

  return { cast, crew }
}
