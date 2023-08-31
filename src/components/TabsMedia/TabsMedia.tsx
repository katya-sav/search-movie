import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchMovieImages } from '../../store/slices/movie-images'
import { fetchMovieVideos } from '../../store/slices/movie-videos'
import { TabNavItem } from './TabNavItem'
import { TabView } from './TabView'
import { TabContent } from './TabContent'
import { MovieImagesList } from '../MovieImagesList'
import { MovieVideosList } from '../MovieVideosList'
import {
  useAppDispatch,
  useMovieBackdrops,
  useMoviePosters,
  useMovieVideos,
} from '../../store'
import styles from './TabsMedia.module.css'

export const TabsMedia = () => {
  const [activeTab, setActiveTab] = useState(1)

  const { movieId } = useParams()
  const dispatch = useAppDispatch()

  const movieBackdrops = useMovieBackdrops(movieId)

  const moviePosters = useMoviePosters(movieId)

  const movieVideos = useMovieVideos(movieId)

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieImages(movieId))
      dispatch(fetchMovieVideos(movieId))
    }
  }, [movieId, dispatch])

  if (!movieId) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabHeader}>
        <h3 className={styles.title}>Media</h3>
        <div className={styles.nav}>
          <TabNavItem
            id={1}
            title="Posters"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            id={2}
            title="Backdrops"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            id={3}
            title="Videos"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabView movieId={movieId} activeTab={activeTab} />
        </div>
      </div>
      <div className={styles.outlet}>
        <TabContent
          id={1}
          activeTab={activeTab}
          content={
            <MovieImagesList
              images={moviePosters.slice(0, 20)}
              size="w185"
              width={185}
            />
          }
        />
        <TabContent
          id={2}
          activeTab={activeTab}
          content={
            <MovieImagesList
              images={movieBackdrops.slice(0, 20)}
              size="original"
              width={180}
            />
          }
        />
        <TabContent
          id={3}
          activeTab={activeTab}
          content={<MovieVideosList videos={movieVideos.slice(0, 5)} />}
        />
      </div>
    </div>
  )
}
