import React, { useCallback } from 'react'
import cx from 'classnames'

import { TTabName } from '../types'
import styles from './TabNavItem.module.css'

type TTabNavItemProps = {
  title: TTabName
  activeTab: TTabName
  setActiveTab: (name: TTabName) => void
}

export const TabNavItem = ({
  title,
  activeTab,
  setActiveTab,
}: TTabNavItemProps) => {
  const handleTab = useCallback(() => {
    setActiveTab(title)
  }, [title, setActiveTab])

  return (
    <button
      type="button"
      className={cx(styles.button, activeTab === title && styles.buttonActive)}
      onClick={handleTab}
    >
      {title}
    </button>
  )
}
