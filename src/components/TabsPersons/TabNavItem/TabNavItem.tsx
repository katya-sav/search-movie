import React, { useCallback } from 'react'

import styles from './TabNavItem.module.css'

type TTabNavItemProps = {
  id: number
  title: string
  activeTab: number
  setActiveTab: any
}

export const TabNavItem = ({
  id,
  title,
  activeTab,
  setActiveTab,
}: TTabNavItemProps) => {
  const handleTab = useCallback(() => {
    setActiveTab(id)
  }, [id, setActiveTab])

  return (
    <button
      type="button"
      className={
        activeTab === id ? `${styles.buttonActive}` : `${styles.button}`
      }
      onClick={() => handleTab()}
    >
      {title}
    </button>
  )
}
