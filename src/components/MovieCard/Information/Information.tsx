import React from 'react'

import { InformationLinkList } from '../InformationLinkList'
import { InformationTextList } from '../InformationTextList'
import { TInformation } from '../../../types'

import styles from './Information.module.css'

type TInformationProps = {
  linkType?: 'company' | 'genre'
  items: TInformation[]
  title: string
}

export const Information = ({ items, title, linkType }: TInformationProps) => (
  <div className={styles.list}>
    <div className={styles.title}>{title}</div>
    {linkType ? (
      <InformationLinkList linkType={linkType} items={items} />
    ) : (
      <InformationTextList items={items} />
    )}
  </div>
)
