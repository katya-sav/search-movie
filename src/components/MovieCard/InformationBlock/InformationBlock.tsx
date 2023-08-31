import React from 'react'

import { Information } from '../Information'
import { TMovieCard } from '../../../types'

import styles from './InformationBlock.module.css'

type TInformationBlockProps = {
  movieCard: TMovieCard
}

export const InformationBlock = ({ movieCard }: TInformationBlockProps) => (
  <div className={styles.block}>
    <Information title="Language:" items={movieCard.languages} />
    <Information linkType="genre" title="Genre:" items={movieCard.genres} />
    <Information title="Country:" items={movieCard.countries} />
    <div className={styles.company}>
      {' '}
      <Information
        linkType="company"
        title="Company:"
        items={movieCard.companies}
      />
    </div>{' '}
  </div>
)
