import { useSelector } from 'react-redux'

import { RootState } from '../../store'

export const useMovieCompany = (companyId: string | undefined) =>
  useSelector((state: RootState) =>
    companyId ? state.movieCompany.companies[companyId] : null,
  )

export const useMovieCompanyLoading = () =>
  useSelector((state: RootState) => state.movieCompany.state === 'loading')
