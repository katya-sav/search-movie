import React from 'react'
import cx from 'classnames'

import image from '../../images/cover.png'
import styles from './NoImage.module.css'

type TNoImageProps = {
  className?: string
}

export const NoImage = ({ className }: TNoImageProps) => (
  <img src={image} className={cx(styles.image, className)} alt="No available" />
)
