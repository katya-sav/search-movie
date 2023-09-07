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
