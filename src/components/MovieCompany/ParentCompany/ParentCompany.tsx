import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { SafeImage } from '../../SafeImage'
import { TCompany } from '../../../types'

import styles from './ParentCompany.module.css'

type TParentCompanyProps = {
  movieCompany: TCompany
}

export const ParentCompany = ({ movieCompany }: TParentCompanyProps) => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate(`/company/${movieCompany.parentCompany?.id}`, { replace: false })
  }, [navigate, movieCompany.parentCompany?.id])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()

        handleNavigate()
      }
    },
    [handleNavigate],
  )

  if (!movieCompany.parentCompany) {
    return null
  }

  return (
    <div>
      <div className={styles.title}>Parent Company</div>
      <div className={styles.section}>
        <div
          onClick={handleNavigate}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          className={styles.name}
        >
          {movieCompany.parentCompany.name}
        </div>
        <SafeImage
          src={`https://api.moviesdb.ru/t/p/w92${movieCompany.parentCompany.logo_path}`}
          className={styles.image}
          errorClassName={styles.imageError}
        />
      </div>{' '}
    </div>
  )
}
