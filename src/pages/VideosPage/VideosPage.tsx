import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MovieVideosList } from '../../components/MovieVideosList'
import { useScrollToTop } from '../../utils'
import { PageTitleBlock } from '../../components/PageTitleBlock'
import { SkeletonVideosPage } from '../../components/Skeletons'
import styles from './VideosPage.module.css'
import { useVideosPage } from './hooks'

export const VideosPage = () => {
  const { movieId } = useParams()

  const { loading, videos, title } = useVideosPage(movieId)

  useScrollToTop()

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
              <SkeletonVideosPage />
            ) : (
              <div>
                {title && <PageTitleBlock title={title} movieId={movieId} />}
                <div className={styles.section}>
                  <MovieVideosList className={styles.list} videos={videos} />
                </div>
              </div>
            )
          }
        />
      </Routes>
    </div>
  )
}
