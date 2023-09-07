import React, { useCallback } from 'react'
import cx from 'classnames'

import styles from './TabNavItem.module.css'
import { TTabName } from '../types'

type TTabNavItemProps = {
  title: TTabName
  activeTab: TTabName
  setActiveTab: any
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
      onClick={() => handleTab()}
    >
      {title}
    </button>
  )
}
