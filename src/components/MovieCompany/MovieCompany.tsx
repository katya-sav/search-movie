import React from 'react'

import { SafeImage } from '../SafeImage'
import { ParentCompany } from './ParentCompany'
import { CompanyDetails } from './CompanyDetails'
import { TCompany } from '../../types'

import styles from './MovieCompany.module.css'

type TMovieCompanyProps = {
  movieCompany: TCompany | null
}

export const MovieCompany = ({ movieCompany }: TMovieCompanyProps) => {
  if (!movieCompany) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <SafeImage
          src={`https://api.moviesdb.ru/t/p/w185${movieCompany.logo}`}
          className={styles.image}
          errorClassName={styles.imageError}
        />
        <div className={styles.section}>
          <CompanyDetails movieCompany={movieCompany} />
          <ParentCompany movieCompany={movieCompany} />
        </div>
      </div>
    </div>
  )
}
