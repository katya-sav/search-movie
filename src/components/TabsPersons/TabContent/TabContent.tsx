import React from 'react'

import { TTabName } from '../types'

type TTabContentProps = {
  title: TTabName
  activeTab: TTabName
  content: any
}

export const TabContent = ({ title, activeTab, content }: TTabContentProps) => (
  <div>{activeTab === title ? <div>{content}</div> : null}</div>
)
