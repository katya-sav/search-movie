import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { TabNavItem } from './TabNavItem'
import { TabContent } from './TabContent'
import { PersonsList } from '../PersonsList'
import { useTabsPersons } from './hooks'

import styles from './TabsPersons.module.css'

export const TabsPersons = () => {
  const { movieId } = useParams()

  const [activeTab, setActiveTab] = useState(1)

  const { cast, crew } = useTabsPersons(movieId)

  if (!movieId) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabHeader}>
        <h3 className={styles.title}>Full Cast and Crew</h3>
        <div className={styles.nav}>
          <TabNavItem
            id={1}
            title="Cast"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            id={2}
            title="Crew"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div>
        <TabContent
          id={1}
          activeTab={activeTab}
          content={
            <PersonsList
              movieId={movieId}
              items={cast}
              className={styles.list}
            />
          }
        />
        <TabContent
          id={2}
          activeTab={activeTab}
          content={
            <PersonsList
              movieId={movieId}
              items={crew}
              className={styles.list}
            />
          }
        />
      </div>
    </div>
  )
}
