import React from 'react'

import { getValidateText } from '../../../utils'
import { TCompany } from '../../../types'

import styles from './CompanyDetails.module.css'

type TCompanyDetailsProps = {
  movieCompany: TCompany
}

export const CompanyDetails = ({ movieCompany }: TCompanyDetailsProps) => (
  <div className={styles.details}>
    <h2 className={styles.title}>{movieCompany.name}</h2>
    <div className={styles.text}>
      Country: {getValidateText(movieCompany.country)}
    </div>
    <div className={styles.text}>
      Headquarters: {getValidateText(movieCompany.headquarters)}
    </div>
    <div className={styles.text}>
      Homepage:
      <a className={styles.link} href={movieCompany.homepage}>
        {getValidateText(movieCompany.homepage)}
      </a>
    </div>
  </div>
)
