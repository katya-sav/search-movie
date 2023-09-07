import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { PageTitleBlock } from '../../components/PageTitleBlock'
import { TabsPersons } from '../../components/TabsPersons'
import { useCastAndCrewPage } from './hooks'
import { useScrollToTop } from '../../utils'
import { SkeletonCastAndCrewPage } from '../../components/Skeletons'

export const CastAndCrewPage = () => {
  const { movieId } = useParams()

  useScrollToTop()

  const { loading, title } = useCastAndCrewPage(movieId)

  if (!movieId) {
    return null
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <SkeletonCastAndCrewPage />
            ) : (
              <div>
                {title && <PageTitleBlock title={title} movieId={movieId} />}
                <TabsPersons />
              </div>
            )
          }
        />
      </Routes>
    </div>
  )
}
