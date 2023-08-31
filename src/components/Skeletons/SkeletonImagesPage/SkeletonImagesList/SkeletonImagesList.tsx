import React from 'react'
import cx from 'classnames'

import { Icon } from '../../../Icon'

import styles from './SkeletonImagesList.module.css'

type TSkeletonImagesListProps = {
  className: string | undefined
}

export const SkeletonImagesList = ({ className }: TSkeletonImagesListProps) => (
  <ul className={styles.list}>
    {Array(24)
      .fill(0)
      .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className={styles.card}>
          <Icon
            icon="image"
            size="xl"
            className={cx(styles.image, className)}
          />
        </li>
      ))}{' '}
  </ul>
)
