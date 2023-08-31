export type TMovie = {
  id: string
  title: string
  poster: string
  date: string
  overview: string
}

export type TMovieCard = {
  id: string
  title: string
  originalTitle: string
  plot: string
  poster: string
  year: string
  languages: TInformation[]
  genres: TInformation[]
  countries: TInformation[]
  companies: TInformation[]
  budget: string
  runtime: string
  revenue: string
  rating: string
}

export type TCompany = {
  id: string
  name: string
  headquarters: string
  homepage: string
  logo: string
  country: string
  parentCompany: TParentCompany | null
}

export type TParentCompany = {
  id: string
  name: string
  logo_path: string
}

export type TInformation = {
  id: string
  name: string
  english_name?: string
}

export type TPerson = {
  id: string
  name: string
  image: string
  description: string
}

export type TImage = {
  path: string
}

export type TVideo = {
  id: string
  path: string
}

export type TKeyword = {
  id: string
  key: string
}

export type TRecommendation = {
  id: string
  title: string
  poster: string
  rating: string
}

export type TIconSize = 'xl' | 'sm' | 'lg' | 'xs'

export type TIconType =
  | 'star'
  | 'signIn'
  | 'arrowRight'
  | 'arrowLeft'
  | 'image'
  | 'portrait'
  | 'video'
  | 'github'

export type TFetchingState = 'init' | 'loading' | 'success' | 'failure'

export type TPersonProfile = {
  id: string
  name: string
  image: string
  gender: string
  birthday: string
  placeOfBirth: string
  deathday: string
  biography: string
  profession: string
}

export type TPersonMovie = {
  id: string
  title: string
  year: string
  prof: string
}
