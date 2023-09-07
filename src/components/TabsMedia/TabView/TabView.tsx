import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { TTabName } from '../types'
import { TabViewAll } from '../TabViewAll'
import styles from './TabView.module.css'

type TTabViewProps = {
  movieId: string
  activeTab: TTabName
}

export const TabView = ({ movieId, activeTab }: TTabViewProps) => {
  const navigate = useNavigate()

  const handleNavigatePosters = useCallback(() => {
    navigate(`/posters/${movieId}`, { replace: false })
  }, [movieId, navigate])

  const handleNavigateBackdrops = useCallback(() => {
    navigate(`/backdrops/${movieId}`, { replace: false })
  }, [movieId, navigate])

  const handleNavigateVideos = useCallback(() => {
    navigate(`/videos/${movieId}`, { replace: false })
  }, [movieId, navigate])

  return (
    <div className={styles.wrapper}>
      <TabViewAll
        title="Posters"
        text="View all posters"
        activeTab={activeTab}
        onClick={handleNavigatePosters}
      />
      <TabViewAll
        title="Backdrops"
        text="View all backdrops"
        activeTab={activeTab}
        onClick={handleNavigateBackdrops}
      />
      <TabViewAll
        title="Videos"
        text="View all videos"
        activeTab={activeTab}
        onClick={handleNavigateVideos}
      />
    </div>
  )
}
