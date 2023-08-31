import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MovieImagesList } from '../../components/MovieImagesList'
import { ScrollToTop } from '../../utils/components'
import { PageTitleBlock } from '../../components/PageTitleBlock'
import { usePostersPage } from './hooks'
import { SkeletonImagesPage } from '../../components/Skeletons'

import styles from './PostersPage.module.css'

export const PostersPage = () => {
  const { movieId } = useParams()

  const { posters, loading, title, poster, year } = usePostersPage(movieId)

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
                <SkeletonImagesPage width={165} />
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
                  <div>
                    <MovieImagesList
                      images={posters}
                      className={styles.list}
                      size="w185"
                      width={185}
                    />
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
