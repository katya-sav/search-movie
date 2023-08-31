import { TCompany } from '../../types'

export const mapMovieCompany = (data: any): TCompany => ({
  id: data.id,
  name: data.name,
  headquarters: data.headquarters,
  homepage: data.homepage,
  logo: data.logo_path,
  country: data.origin_country,
  parentCompany: data.parent_company,
})
