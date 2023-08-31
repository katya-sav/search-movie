import React, { useCallback } from 'react'
import cx from 'classnames'

import { SafeImage } from '../SafeImage'
import { IMAGE_MODAL_ID } from '../../constants/modals'
import { useAppDispatch } from '../../store'
import { open } from '../../store/slices/modal'
import { TImage } from '../../types'

import styles from './MovieImage.module.css'

type TMovieImageProps = {
  image: TImage
  size: string
  className?: string
}

export const MovieImage = ({ image, size, className }: TMovieImageProps) => {
  const dispatch = useAppDispatch()

  const handleImageClick = useCallback(() => {
    dispatch(
      open({
        id: IMAGE_MODAL_ID,
        meta: { metaType: 'image', imagePath: image.path },
      }),
    )
  }, [dispatch, image])

  return (
    <SafeImage
      src={`https://api.moviesdb.ru/t/p/${size}${image.path}`}
      alt={image.path}
      className={cx(styles.image, className)}
      errorClassName={cx(styles.imageError, className)}
      onImageClick={handleImageClick}
    />
  )
}
