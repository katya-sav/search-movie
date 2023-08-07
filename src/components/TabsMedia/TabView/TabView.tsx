import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { TabViewAll } from '../TabViewAll'

type TTabViewProps = {
  movieId: string
  activeTab: number
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
    <div>
      <TabViewAll
        id={1}
        title="View all posters"
        activeTab={activeTab}
        onClick={handleNavigatePosters}
      />
      <TabViewAll
        id={2}
        title="View all backdrops"
        activeTab={activeTab}
        onClick={handleNavigateBackdrops}
      />
      <TabViewAll
        id={3}
        title="View all videos"
        activeTab={activeTab}
        onClick={handleNavigateVideos}
      />
    </div>
  )
}
