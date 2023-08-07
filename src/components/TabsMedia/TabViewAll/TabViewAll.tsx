import React from 'react'

import { ButtonRight } from '../../ButtonRight'
import styles from './TabViewAll.module.css'

type TTabViewAllProps = {
  id: number
  title: string
  activeTab: number
  onClick: () => void
}

export const TabViewAll = ({
  id,
  title,
  activeTab,
  onClick,
}: TTabViewAllProps) => (
  <ButtonRight
    className={activeTab === id ? `${styles.button}` : `${styles.buttonHidden}`}
    title={title}
    onClick={onClick}
  />
)
