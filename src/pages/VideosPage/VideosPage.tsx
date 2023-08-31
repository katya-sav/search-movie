import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MovieVideosList } from '../../components/MovieVideosList'
import { ScrollToTop } from '../../utils/components'
import { PageTitleBlock } from '../../components/PageTitleBlock'
import { SkeletonVideosPage } from '../../components/Skeletons'

import styles from './VideosPage.module.css'
import { useVideosPage } from './hooks'

export const VideosPage = () => {
  const { movieId } = useParams()

  const { loading, videos, title, poster, year } = useVideosPage(movieId)

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
                <SkeletonVideosPage />
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
                  <div className={styles.section}>
                    <MovieVideosList className={styles.list} videos={videos} />
                  </div>
                </div>
              )}
            </>
          }
        />
      </Routes>
    </div>
  )
}
