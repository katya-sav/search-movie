import { useEffect } from 'react'

import { fetchMovieCompany } from '../../../store/slices/movie-company'
import {
  useAppDispatch,
  useMovieCompany,
  useMovieCompanyLoading,
} from '../../../store'

export const useCompanyPage = (companyId: string | undefined) => {
  const dispatch = useAppDispatch()

  const movieCompany = useMovieCompany(companyId)
  const loading = useMovieCompanyLoading()

  useEffect(() => {
    if (companyId) {
      dispatch(fetchMovieCompany(companyId))
    }
  }, [companyId, dispatch])

  return { loading, movieCompany }
}
