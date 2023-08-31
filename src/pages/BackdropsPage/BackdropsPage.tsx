import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import { MovieImagesList } from '../../components/MovieImagesList'
import { ScrollToTop } from '../../utils/components'
import { PageTitleBlock } from '../../components/PageTitleBlock'
import { SkeletonImagesPage } from '../../components/Skeletons'

import styles from './BackdropsPage.module.css'
import { useBackdropsPage } from './hooks'

export const BackdropsPage = () => {
  const { movieId } = useParams()

  const { backdrops, loading, title, poster, year } = useBackdropsPage(movieId)

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
                <SkeletonImagesPage width={480} />
              ) : (
                <div>
                  {' '}
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
                      images={backdrops}
                      size="original"
                      className={styles.list}
                      width={500}
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
