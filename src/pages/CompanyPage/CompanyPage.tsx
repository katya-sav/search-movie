import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MovieCompany } from '../../components/MovieCompany'
import { ScrollToTop } from '../../utils/components'

import { SkeletonCompanyPage } from '../../components/Skeletons'
import { useCompanyPage } from './hooks'

export const CompanyPage = () => {
  const { companyId } = useParams()

  const { loading, movieCompany } = useCompanyPage(companyId)

  if (!companyId) {
    return null
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              {loading ? (
                <SkeletonCompanyPage movieCompany={movieCompany} />
              ) : (
                <MovieCompany movieCompany={movieCompany} />
              )}
            </>
          }
        />
      </Routes>
    </div>
  )
}
