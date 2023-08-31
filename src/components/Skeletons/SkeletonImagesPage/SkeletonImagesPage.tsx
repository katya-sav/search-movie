import React from 'react'

import { SkeletonPageTitleBlock } from '../SkeletonPageTitleBlock'
import { SkeletonImagesList } from './SkeletonImagesList'

import styles from './SkeletonImagesPage.module.css'

type TImageWidth = 165 | 480

type TSkeletonImagesPageProps = {
  width?: TImageWidth
}

export const SkeletonImagesPage = ({ width }: TSkeletonImagesPageProps) => {
  const imageClassName = width ? styles[`fixedWidth${width}`] : undefined

  return (
    <div>
      <SkeletonPageTitleBlock />
      <SkeletonImagesList className={imageClassName} />
    </div>
  )
}
