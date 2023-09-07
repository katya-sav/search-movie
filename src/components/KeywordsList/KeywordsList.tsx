import React from 'react'

import { Keyword } from '../Keyword/Keyword'
import { TKeyword } from '../../types'
import styles from './KeywordsList.module.css'

type TKeywordsListProps = {
  title: string
  keywords: TKeyword[]
}

export const KeywordsList = ({ title, keywords }: TKeywordsListProps) => {
  if (!keywords.length) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.list}>
        {keywords.map(keyword => (
          <Keyword key={keyword.id} keyword={keyword} />
        ))}
      </div>
    </div>
  )
}
