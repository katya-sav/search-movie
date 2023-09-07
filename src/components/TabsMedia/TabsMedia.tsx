import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { TabNavItem } from './TabNavItem'
import { TabView } from './TabView'
import { TTabName } from './types'
import { TabsContent } from './TabsContent'

import styles from './TabsMedia.module.css'

export const TabsMedia = () => {
  const { movieId } = useParams()
  const [activeTab, setActiveTab] = useState<TTabName>('Posters')

  if (!movieId) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabHeader}>
        <h3 className={styles.title}>Media</h3>
        <div className={styles.nav}>
          <TabNavItem
            title="Posters"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Backdrops"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Videos"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabView movieId={movieId} activeTab={activeTab} />
        </div>
      </div>
      <TabsContent activeTab={activeTab} movieId={movieId} />
    </div>
  )
}
