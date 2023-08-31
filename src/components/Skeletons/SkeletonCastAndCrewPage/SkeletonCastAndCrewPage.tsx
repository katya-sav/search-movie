import React from 'react'

import { SkeletonPageTitleBlock } from '../SkeletonPageTitleBlock'
import { SkeletonTabsPersons } from './SkeletonTabsPersons'

export const SkeletonCastAndCrewPage = () => (
  <div>
    <SkeletonPageTitleBlock />
    <SkeletonTabsPersons />
  </div>
)
