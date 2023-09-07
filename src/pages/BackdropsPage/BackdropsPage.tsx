import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MovieImagesList } from '../../components/MovieImagesList'
import { useScrollToTop } from '../../utils'
import { PageTitleBlock } from '../../components/PageTitleBlock'
import { SkeletonImagesPage } from '../../components/Skeletons'

import styles from './BackdropsPage.module.css'
import { useBackdropsPage } from './hooks'

export const BackdropsPage = () => {
  const { movieId } = useParams()

  useScrollToTop()

  const { backdrops, loading, title } = useBackdropsPage(movieId)

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
              <SkeletonImagesPage width={480} />
            ) : (
              <div>
                {title && <PageTitleBlock title={title} movieId={movieId} />}
                <div>
                  <MovieImagesList
                    images={backdrops}
                    size="original"
                    className={styles.list}
                    width={500}
                  />
                </div>
              </div>
            )
          }
        />
      </Routes>
    </div>
  )
}
