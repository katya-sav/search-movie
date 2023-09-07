import React from 'react'

import { ButtonRight } from '../../ButtonRight'
import { TTabName } from '../types'
import styles from './TabViewAll.module.css'

type TTabViewAllProps = {
  title: TTabName
  text: string
  activeTab: TTabName
  onClick: () => void
}

export const TabViewAll = ({
  title,
  text,
  activeTab,
  onClick,
}: TTabViewAllProps) => (
  <ButtonRight
    className={activeTab === title ? styles.button : styles.buttonHidden}
    title={text}
    onClick={onClick}
  />
)
