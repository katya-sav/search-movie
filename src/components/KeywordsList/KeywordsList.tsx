import React, { useMemo } from 'react'

import { Keyword } from '../Keyword/Keyword'
import { TKeyword } from '../../types'
import styles from './KeywordsList.module.css'

type TKeywordsListProps = {
  title: string
  keywords: TKeyword[]
}

export const KeywordsList = ({ title, keywords }: TKeywordsListProps) => {
  const renderKeywords = useMemo(
    () =>
      keywords.map(keyword => <Keyword key={keyword.id} keyword={keyword} />),
    [keywords],
  )

  if (!keywords.length) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.list}>{renderKeywords}</div>
    </div>
  )
}
