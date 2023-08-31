import React from 'react'

import { SkeletonPageTitleBlock } from '../SkeletonPageTitleBlock'
import { SkeletonVideosList } from './SkeletonVideosList'

export const SkeletonVideosPage = () => (
  <div>
    <SkeletonPageTitleBlock />
    <SkeletonVideosList />
  </div>
)
