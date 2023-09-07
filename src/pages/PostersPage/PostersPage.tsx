import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MovieImagesList } from '../../components/MovieImagesList'
import { PageTitleBlock } from '../../components/PageTitleBlock'
import { usePostersPage } from './hooks'
import { useScrollToTop } from '../../utils'
import { SkeletonImagesPage } from '../../components/Skeletons'

import styles from './PostersPage.module.css'

export const PostersPage = () => {
  const { movieId } = useParams()

  const { posters, loading, title } = usePostersPage(movieId)

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
              <SkeletonImagesPage width={165} />
            ) : (
              <div>
                {title && <PageTitleBlock title={title} movieId={movieId} />}
                <div>
                  <MovieImagesList
                    images={posters}
                    className={styles.list}
                    size="w185"
                    width={185}
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
