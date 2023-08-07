import React from 'react'

import { useModalMeta } from '../../store'
import { SafeImage } from '../SafeImage'

import styles from './ImageModalContent.module.css'

export const ImageModalContent = () => {
  const meta = useModalMeta()

  if (!meta || meta.metaType !== 'image') {
    return null
  }

  return (
    <div className={styles.modal}>
      <SafeImage
        src={`https://api.moviesdb.ru/t/p/original${meta.imagePath}`}
        className={styles.image}
      />
    </div>
  )
}
