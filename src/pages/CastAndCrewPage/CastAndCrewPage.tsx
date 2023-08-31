import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { ScrollToTop } from '../../utils/components'
import { PageTitleBlock } from '../../components/PageTitleBlock'
import { TabsPersons } from '../../components/TabsPersons'
import { useCastAndCrewPage } from './hooks'
import { SkeletonCastAndCrewPage } from '../../components/Skeletons'

export const CastAndCrewPage = () => {
  const { movieId } = useParams()

  const { loading, title, poster, year } = useCastAndCrewPage(movieId)

  if (!movieId) {
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
                <SkeletonCastAndCrewPage />
              ) : (
                <div>
                  {title && poster && year && (
                    <PageTitleBlock
                      title={title}
                      poster={poster}
                      year={year}
                      movieId={movieId}
                    />
                  )}
                  <TabsPersons />
                </div>
              )}
            </>
          }
        />
      </Routes>
    </div>
  )
}
