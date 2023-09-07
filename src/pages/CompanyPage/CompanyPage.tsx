import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MovieCompany } from '../../components/MovieCompany'
import { useScrollToTop } from '../../utils'
import { SkeletonCompanyPage } from '../../components/Skeletons'
import { useCompanyPage } from './hooks'

export const CompanyPage = () => {
  const { companyId } = useParams()

  const { loading, movieCompany } = useCompanyPage(companyId)

  useScrollToTop()

  if (!companyId) {
    return null
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <SkeletonCompanyPage movieCompany={movieCompany} />
            ) : (
              <MovieCompany movieCompany={movieCompany} />
            )
          }
        />
      </Routes>
    </div>
  )
}
