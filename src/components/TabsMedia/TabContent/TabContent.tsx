import React from 'react'

type TTabContentProps = {
  id: number
  activeTab: number
  content: any
}

export const TabContent = ({ id, activeTab, content }: TTabContentProps) => (
  <div>{activeTab === id ? <div>{content}</div> : null}</div>
)
