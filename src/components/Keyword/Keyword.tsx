import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { TKeyword } from '../../types'
import styles from './Keyword.module.css'

type TKeywordProps = {
  keyword: TKeyword
}

export const Keyword = ({ keyword }: TKeywordProps) => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate(`/keyword/${keyword.id}`, { replace: false })
  }, [navigate, keyword.id])

  // const handleKeyDown = useCallback(
  //   (e: React.KeyboardEvent<HTMLDivElement>) => {
  //     if (e.key === 'Enter') {
  //       e.preventDefault()

  //       handleNavigate()
  //     }
  //   },
  //   [handleNavigate],
  // )

  return (
    <button
      className={styles.button}
      onClick={handleNavigate}
      type="button"
      tabIndex={0}
    >
      {keyword.key}
    </button>
  )
}
