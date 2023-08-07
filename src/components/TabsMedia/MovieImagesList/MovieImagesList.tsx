import React, { useMemo } from 'react'
import cx from 'classnames'

import { MovieImage } from '../MovieImage/MovieImage'
import { TImage } from '../../../types'
import styles from './MovieImagesList.module.css'

type TImageWidth = 185 | 500

type TMovieImageListProps = {
  images: TImage[]
  size: string
  width?: TImageWidth
  className?: string
}

export const MovieImagesList = ({
  images,
  size,
  width,
  className,
}: TMovieImageListProps) => {
  const imageClassName = width ? styles[`fixedWidth${width}`] : undefined

  const renderImages = useMemo(
    () =>
      images.map(image => (
        <MovieImage
          key={image.path}
          image={image}
          size={size}
          className={imageClassName}
        />
      )),
    [images, size, imageClassName],
  )

  if (!images.length) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={cx(styles.list, className)}>{renderImages}</div>
    </div>
  )
}
