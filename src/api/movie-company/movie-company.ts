import { mapMovieCompany } from './map-movie-company'
import { TCompany } from '../../types'

type TGetMovieCompanySuccess = {
  type: 'success'
  data: TCompany
}

type TGetMovieCompanyError = {
  type: 'error'
  error: any
}

type TGetMovieCompanyResponse = TGetMovieCompanySuccess | TGetMovieCompanyError

export const getMovieCompany = async (
  companyId: string,
): Promise<TGetMovieCompanyResponse> => {
  try {
    const baseUrl = 'https://api.moviesdb.ru'
    const movieCompanyRes = await fetch(`${baseUrl}/3/company/${companyId}`, {
      method: 'GET',
      headers: { accept: 'application/json' },
    })

    const movieCompany = await movieCompanyRes.json()

    const data = mapMovieCompany(movieCompany)

    return { type: 'success', data }
  } catch (error) {
    return { type: 'error', error }
  }
}
