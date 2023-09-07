import React from 'react'

import { TabContent } from '../TabContent'
import { MovieImagesList } from '../../MovieImagesList'
import { MovieVideosList } from '../../MovieVideosList'
import { useTabsContent } from '../hooks'
import { TTabName } from '../types'

type TTabsContentProps = {
  activeTab: TTabName
  movieId: string
}

export const TabsContent = ({ activeTab, movieId }: TTabsContentProps) => {
  const { backdrops, posters, videos } = useTabsContent(movieId)

  return (
    <div>
      <TabContent
        title="Posters"
        activeTab={activeTab}
        content={
          <MovieImagesList
            images={posters.slice(0, 20)}
            size="w185"
            width={185}
          />
        }
      />
      <TabContent
        title="Backdrops"
        activeTab={activeTab}
        content={
          <MovieImagesList
            images={backdrops.slice(0, 20)}
            size="original"
            width={180}
          />
        }
      />
      <TabContent
        title="Videos"
        activeTab={activeTab}
        content={<MovieVideosList videos={videos.slice(0, 5)} />}
      />
    </div>
  )
}
