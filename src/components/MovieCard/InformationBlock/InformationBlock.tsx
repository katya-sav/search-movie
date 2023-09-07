import React from 'react'

import { Information } from '../Information'
import { TMovieCard } from '../../../types'

type TInformationBlockProps = {
  movieCard: TMovieCard
}

export const InformationBlock = ({ movieCard }: TInformationBlockProps) => (
  <div>
    <Information title="Language:" items={movieCard.languages} />
    <Information linkType="genre" title="Genre:" items={movieCard.genres} />
    <Information title="Country:" items={movieCard.countries} />
    <Information
      linkType="company"
      title="Company:"
      items={movieCard.companies}
    />
  </div>
)
