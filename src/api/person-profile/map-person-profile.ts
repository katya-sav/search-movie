import { TPersonProfile } from '../../types'

export const mapPersonProfile = (data: any): TPersonProfile => ({
  id: data.id,
  name: data.name,
  image: data.profile_path,
  gender: data.gender,
  birthday: data.birthday,
  placeOfBirth: data.place_of_birth,
  deathday: data.deathday,
  biography: data.biography,
  profession: data.known_for_department,
})
